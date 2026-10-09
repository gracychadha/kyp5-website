import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Clock,
  HelpCircle,
  ShieldAlert,
  CheckSquare,
  Languages,
  ArrowRight,
  BookOpen,
  Sparkles,
  AlertCircle,
  CreditCard,
  CheckCircle,
  Lock,
  Loader2,
  Tag
} from "lucide-react";
import publicApi from "../api/publicApi";
import studentApi from "../api/studentApi";
import { useAuth } from "../context/AuthContext";
import { extractItemData } from "../utils/dataHelper";
import RichTextContent from "../components/common/RichTextContent";
import toast from "react-hot-toast";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function TestInstruction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [agreed, setAgreed] = useState(false);
  const [starting, setStarting] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        setLoading(true);
        if (isAuthenticated) {
          try {
            const res = await studentApi.getTestDetails(id, selectedLanguage);
            const data = extractItemData(res);
            if (data && data.test) {
              const qCount =
                data.test.questionCount ??
                data.test.totalQuestions ??
                data.questions?.length ??
                data.test._count?.questions ??
                0;
              setTest({
                ...data.test,
                studentStatus: data.studentStatus,
                questionCount: qCount,
                totalQuestions: qCount,
              });
              return;
            }
          } catch (e) {
            console.warn("Falling back to public test info", e);
          }
        }
        const pubRes = await publicApi.getTestById(id);
        const pubData = extractItemData(pubRes);
        if (pubData) {
          const qCount =
            pubData.questionCount ??
            pubData.totalQuestions ??
            pubData.questions?.length ??
            pubData._count?.questions ??
            0;
          setTest({
            ...pubData,
            questionCount: qCount,
            totalQuestions: qCount,
          });
        }
      } catch (err) {
        toast.error("Failed to load test instructions.");
        navigate("/tests");
      } finally {
        setLoading(false);
      }
    };

    fetchTestDetails();
  }, [id, isAuthenticated, selectedLanguage, navigate]);

  const isFreeTest = Boolean(test?.isFree || (test?.price || 0) === 0);
  const hasAccess = isFreeTest || Boolean(test?.studentStatus?.hasAccess);

  const handlePaymentOrUnlock = async () => {
    if (!isAuthenticated) {
      toast.error("Please login to purchase or unlock this assessment.");
      navigate("/login", { state: { returnUrl: `/test/${id}/instructions` } });
      return;
    }

    try {
      setPurchasing(true);
      const res = await studentApi.checkoutTest(id);
      const data = extractItemData(res);

      if (data?.isFree || data?.alreadyPaid) {
        toast.success(data.message || "Test unlocked successfully!");
        setTest((prev) => ({
          ...prev,
          studentStatus: {
            ...(prev?.studentStatus || {}),
            hasAccess: true,
            canAttempt: true,
          },
        }));
        return;
      }

      // Load Razorpay Checkout Script
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        toast.error("Failed to load Razorpay payment gateway script. Check internet connection.");
        return;
      }

      const options = {
        key: data.key,
        amount: data.amount,
        currency: data.currency || "INR",
        name: "KYP5 Psychometric Assessment",
        description: `Access to ${data.testTitle || test?.title || "Assessment"}`,
        order_id: data.orderId,
        handler: async function (response) {
          try {
            toast.loading("Verifying payment...", { id: "verify-test-pay" });
            const verifyRes = await studentApi.verifyTestPayment(id, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderId: data.orderId,
            });
            const verifyData = extractItemData(verifyRes);
            toast.success(verifyData?.message || "Payment verified! Test unlocked.", {
              id: "verify-test-pay",
            });
            setTest((prev) => ({
              ...prev,
              studentStatus: {
                ...(prev?.studentStatus || {}),
                hasAccess: true,
                canAttempt: true,
              },
            }));
          } catch (err) {
            toast.error(err.message || "Payment verification failed", {
              id: "verify-test-pay",
            });
          }
        },
        prefill: {
          name: user?.name || "",
          email: user?.email || "",
          contact: user?.phone || "",
        },
        theme: {
          color: "#4f46e5",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      toast.error(err.message || "Checkout initialization failed");
    } finally {
      setPurchasing(false);
    }
  };

  const handleStartTest = async () => {
    if (!agreed) {
      toast.error("Please agree to the examination instructions.");
      return;
    }

    if (!isAuthenticated) {
      toast.error("Please login or create an account to start the assessment.");
      navigate("/login", { state: { returnUrl: `/test/${id}/instructions` } });
      return;
    }

    if (!hasAccess) {
      toast.error("Payment required before starting this assessment. Please unlock test.");
      return;
    }

    try {
      setStarting(true);
      const res = await studentApi.startAttempt(id, selectedLanguage);
      const data = extractItemData(res);
      if (data && data.id) {
        navigate(`/test/attempt/${data.id}`);
      }
    } catch (err) {
      toast.error(err.message || "Could not start test attempt.");
    } finally {
      setStarting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const availableLanguages =
    test?.availableLanguages && test.availableLanguages.length > 0
      ? test.availableLanguages
      : [{ id: "en", code: "en", name: "English" }];

  return (
    <div className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Test Header */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Standard Psychometric Battery
          </span>

          {/* Language Selector */}
          {availableLanguages.length > 1 ? (
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-slate-500" />
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-700 focus:outline-none focus:border-indigo-600 cursor-pointer"
              >
                {availableLanguages.map((lang) => (
                  <option
                    key={lang.code || lang.id}
                    value={lang.code || lang.id}
                  >
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-600">
              <Languages className="w-3.5 h-3.5 text-slate-500" />
              <span>{availableLanguages[0]?.name || "English"}</span>
            </div>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          {test?.title || "Assessment Instructions"}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="text-[11px] text-slate-500 font-bold uppercase">Duration</div>
            <div className="text-base font-extrabold text-slate-800 mt-0.5">{test?.duration || 45} Minutes</div>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="text-[11px] text-slate-500 font-bold uppercase">Questions</div>
            <div className="text-base font-extrabold text-slate-800 mt-0.5">
              {test?.questionCount ?? test?.totalQuestions ?? test?._count?.questions ?? 0} Items
            </div>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="text-[11px] text-slate-500 font-bold uppercase">Pricing</div>
            <div className="text-base font-extrabold mt-0.5">
              {isFreeTest ? (
                <span className="text-emerald-600">FREE</span>
              ) : (
                <span className="text-indigo-600">₹{test?.price || 499}</span>
              )}
            </div>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
            <div className="text-[11px] text-slate-500 font-bold uppercase">Access Status</div>
            <div className="text-base font-extrabold mt-0.5">
              {hasAccess ? (
                <span className="text-emerald-600 flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 inline" /> Unlocked
                </span>
              ) : (
                <span className="text-amber-600 flex items-center gap-1">
                  <Lock className="w-4 h-4 inline" /> Payment Needed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Payment / Access Callout Box */}
      {!hasAccess && (
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 rounded-3xl p-6 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 bg-amber-400/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full">
              <Lock className="w-3.5 h-3.5" /> Premium Assessment
            </div>
            <h3 className="text-xl font-extrabold">Unlock Full Assessment for ₹{test?.price || 499}</h3>
            <p className="text-xs text-indigo-200">
              One-time payment powered securely by Razorpay. Gives full access to attempt the exam and get instant psychometric analytics.
            </p>
          </div>

          <button
            onClick={handlePaymentOrUnlock}
            disabled={purchasing}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm px-6 py-3.5 rounded-2xl shadow-md transition-all shrink-0 cursor-pointer flex items-center gap-2 disabled:opacity-60"
          >
            {purchasing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Initializing Razorpay...</span>
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                <span>Pay & Unlock (₹{test?.price || 499})</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Rules & Instructions Body */}
      <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
        <h3 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3">
          Standard Test Guidelines & Rules
        </h3>

        {test?.instructions || test?.termsConditions ? (
          <div className="space-y-4">
            {test.instructions && <RichTextContent content={test.instructions} />}
            {test.termsConditions && <RichTextContent content={test.termsConditions} />}
          </div>
        ) : (
          <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                1
              </span>
              <p>
                There are no right or wrong answers in psychometric interest and personality batteries. Please answer truthfully based on your genuine preferences and instinct.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                2
              </span>
              <p>
                Your answers are auto-saved in real time. If your device disconnects or reloads, your progress will be restored as long as the timer remains active.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                3
              </span>
              <p>
                Do not switch browser tabs or minimize the testing window. Frequent window switching triggers anti-cheat warning logs.
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 mt-0.5 text-xs">
                4
              </span>
              <p>
                When the countdown timer expires, your exam will automatically submit and calculate your career report.
              </p>
            </div>
          </div>
        )}

        {/* Agreement Checkbox */}
        <div className="pt-4 border-t border-slate-100">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-600 mt-1 cursor-pointer"
            />
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              I have read and understood all examination rules. I am ready to begin my assessment in a quiet environment.
            </span>
          </label>
        </div>

        {/* Start Action */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/tests" className="text-xs font-bold text-slate-500 hover:text-slate-800">
            ← Back to Tests
          </Link>

          {!hasAccess ? (
            <button
              onClick={handlePaymentOrUnlock}
              disabled={purchasing}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-8 py-3.5 rounded-2xl shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <CreditCard className="w-4 h-4" />
              <span>Unlock Assessment for ₹{test?.price || 499}</span>
            </button>
          ) : (
            <button
              onClick={handleStartTest}
              disabled={!agreed || starting}
              className="btn-primary w-full sm:w-auto text-sm px-8 py-3.5 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <span>{starting ? "Initializing Assessment..." : "Begin Assessment Now"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
