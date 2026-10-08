import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Calendar, Phone, Mail, HelpCircle, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import publicApi from "../api/publicApi";
import { extractItemData } from "../utils/dataHelper";
import RichTextContent from "../components/common/RichTextContent";

const PRESET_SERVICES = {
  "multiple intelligence career profiling": {
    title: "Multiple Intelligence Career Profiling",
    price: "Expert Mentorship",
    briefIntro:
      "Scientific evaluation of linguistic, logical-mathematical, spatial, bodily-kinesthetic, musical, interpersonal, and intrapersonal intelligences to align student strengths with optimal career trajectories.",
    aboutTitle: "About Multiple Intelligence Profiling",
    aboutDescription:
      "<p>Based on Howard Gardner's theory of Multiple Intelligences, our comprehensive assessment identifies a student's unique cognitive profile beyond traditional academic grades.</p><p>We map these multidimensional intelligence scores against modern industry domains, helping students choose streams and careers where their innate talents thrive.</p>",
    workProcessTitle: "How the Profiling Process Works",
    workProcessSteps: [
      {
        title: "Stage 1: Psychometric Assessment",
        desc: "Interactive psychometric evaluation assessing 8 distinct intelligence dimensions and cognitive preferences.",
      },
      {
        title: "Stage 2: Multidimensional Synthesis",
        desc: "Algorithmic scoring compares responses against validated occupational profiles and intelligence radar charts.",
      },
      {
        title: "Stage 3: 1-on-1 Expert Guidance",
        desc: "Detailed debrief with certified career counselors to finalize subject streams and long-term career roadmaps.",
      },
    ],
    benefitsMainTitle: "Key Advantages",
    benefitsCards: [
      {
        title: "Discovers Hidden Talents",
        desc: "Uncovers underlying cognitive strengths beyond conventional classroom test scores.",
      },
      {
        title: "Tailored Stream Selection",
        desc: "Directly links student intelligence profiles to suitable academic streams and university majors.",
      },
    ],
  },
  "school stream selection drive": {
    title: "School Stream Selection Drive",
    price: "Campus Package",
    briefIntro:
      "Comprehensive institutional testing and counseling program for Class 8th to 10th students to help them confidently choose Science, Commerce, or Humanities/Arts.",
    aboutTitle: "About School Stream Selection Drive",
    aboutDescription:
      "<p>Selecting the right academic stream after Class 10 is one of the most critical decisions in a student's academic journey. Our Stream Selection Drive combines aptitude, personality traits, and career interests into an objective recommendation engine.</p><p>We work directly with schools to conduct institution-wide diagnostic testing, individual student reports, and parent counseling workshops.</p>",
    workProcessTitle: "How the Drive Works",
    workProcessSteps: [
      {
        title: "Phase 1: Institutional Assessment",
        desc: "Standardized psychometric battery administered to student cohorts under structured school supervision.",
      },
      {
        title: "Phase 2: Individualized Reporting",
        desc: "Comprehensive diagnostic reports highlighting top recommended stream combinations for each student.",
      },
      {
        title: "Phase 3: Parent-Student Alignment",
        desc: "Interactive counseling sessions and workshops to align student aspirations with parental expectations.",
      },
    ],
    benefitsMainTitle: "Key Advantages",
    benefitsCards: [
      {
        title: "Eliminates Subjectivity",
        desc: "Provides objective data-driven recommendations based on validated psychometric metrics.",
      },
      {
        title: "School-Wide Analytics",
        desc: "Equips school leadership with aggregate insights into student cohort capabilities.",
      },
    ],
  },
  "college major & vocational mapping": {
    title: "College Major & Vocational Mapping",
    price: "Higher Education",
    briefIntro:
      "Advanced vocational guidance matching higher education degrees and emerging global college programs to student aptitude.",
    aboutTitle: "About College & Vocational Mapping",
    aboutDescription:
      "<p>Navigating university applications and degree selection requires strategic foresight. Our vocational mapping service analyzes global job market trends alongside student psychometrics to pinpoint high-demand career pathways.</p><p>Whether preparing for Indian entrance exams or foreign university admissions, we provide actionable guidance step-by-step.</p>",
    workProcessTitle: "How the Process Works",
    workProcessSteps: [
      {
        title: "Step 1: Vocational Profiling",
        desc: "In-depth mapping of vocational interests, career motivators, and skill readiness.",
      },
      {
        title: "Step 2: University & Major Matching",
        desc: "Identification of optimal college programs, target entrance exams, and global degree paths.",
      },
      {
        title: "Step 3: Strategic Roadmap",
        desc: "Actionable preparation roadmap including timeline, portfolio building, and application strategies.",
      },
    ],
    benefitsMainTitle: "Key Advantages",
    benefitsCards: [
      {
        title: "Future-Proof Guidance",
        desc: "Focuses on emerging high-growth industries and future-ready career choices.",
      },
      {
        title: "Global Compatibility",
        desc: "Provides clarity for both Indian university systems and international education.",
      },
    ],
  },
};

function getPresetServiceDetails(titleParam) {
  const decoded = decodeURIComponent(titleParam || "").toLowerCase().trim();
  if (PRESET_SERVICES[decoded]) {
    return PRESET_SERVICES[decoded];
  }
  if (decoded.includes("intelligence") || decoded.includes("profiling")) {
    return PRESET_SERVICES["multiple intelligence career profiling"];
  }
  if (decoded.includes("stream") || decoded.includes("school")) {
    return PRESET_SERVICES["school stream selection drive"];
  }
  if (decoded.includes("college") || decoded.includes("vocational") || decoded.includes("mapping")) {
    return PRESET_SERVICES["college major & vocational mapping"];
  }
  const cleanTitle = decodeURIComponent(titleParam || "Career Guidance Solution");
  return {
    title: cleanTitle,
    price: "Custom Package",
    briefIntro: "Comprehensive psychometric evaluation and career counseling designed for students and institutions.",
    aboutTitle: "About " + cleanTitle,
    aboutDescription: "<p>Our team of clinical psychologists and career specialists conduct structured assessment batteries and one-on-one strategy sessions to ensure absolute clarity.</p><p>Students receive actionable guidance on entrance exams, vocational matches, and higher education degree mappings.</p>",
    workProcessTitle: "How the Process Works",
    workProcessSteps: [
      { title: "Stage 1: Psychometric Battery", desc: "Student completes online assessment measuring RIASEC traits and cognitive aptitude." },
      { title: "Stage 2: Algorithmic Synthesis", desc: "Automated scoring compares responses against validated occupational models." },
      { title: "Stage 3: 1-on-1 Guidance", desc: "Detailed discussion with certified counselor to finalize stream & target universities." },
    ],
    benefitsMainTitle: "Key Advantages",
    benefitsCards: [
      { title: "Eliminates Guesswork", desc: "Data-driven clarity based on psychological research rather than subjective bias." },
      { title: "Parent-Student Alignment", desc: "Brings families together with concrete reports and career prospect data." },
    ],
  };
}

export default function ServiceDetail() {
  const { title } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const res = await publicApi.getServiceBySlug(title);
        const data = extractItemData(res);
        if (data && (data.title || data.id) && data.aboutDescription) {
          setService(data);
        } else {
          setService(getPresetServiceDetails(title));
        }
      } catch (e) {
        setService(getPresetServiceDetails(title));
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [title]);

  if (loading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <Link
        to="/services"
        className="inline-flex items-center gap-2 text-xs font-extrabold text-indigo-600 hover:text-indigo-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Services</span>
      </Link>

      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
        <div className="space-y-3 border-b border-slate-100 pb-6">
          <span className="text-[11px] font-black text-indigo-600 uppercase tracking-wider bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
            {service?.price || "Professional Guidance"}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
            {service?.title}
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            {service?.briefIntro || service?.description}
          </p>
        </div>

        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-black text-slate-900">
            {service?.aboutTitle || "Program Overview"}
          </h3>
          <RichTextContent content={service?.aboutDescription || service?.description} />
        </div>

        {/* Process Steps */}
        {service?.workProcessSteps && service.workProcessSteps.length > 0 && (
          <div className="space-y-6 pt-4 border-t border-slate-100">
            <h3 className="text-lg font-black text-slate-900">
              {service?.workProcessTitle || "How It Works"}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.workProcessSteps.map((step, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc || step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Banner */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950 p-6 rounded-2xl text-white">
          <div>
            <h4 className="text-base font-bold text-white">Need Customized Counseling?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Speak with a certified psychologist and career mentor today.</p>
          </div>
          <Link
            to="/contact-us"
            className="btn-primary text-xs py-2.5 px-6 whitespace-nowrap"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
