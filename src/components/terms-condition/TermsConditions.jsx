import React ,{useEffect , useState} from "react";
import axios from "axios";

function TermsConditions() {
  const [termsConditions, setTermsConditions] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "settings/terms-conditions")
      .then((response) => {
        setTermsConditions(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!termsConditions) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <>
      <div class="rts-course-default-area rts-section-gap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="privacy-policy-content">
                <h2>
                  {termsConditions.title
                    ? termsConditions.title
                    : "Terms and Conditions"}
                </h2>
                <p className="mb-4">
                  {termsConditions.subtitle
                    ? termsConditions.subtitle
                    : "This is a simple terms and conditions content. You can replace this with your actual terms and conditions text."}
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      termsConditions?.content ||
                      "<p>Terms and conditions content is currently unavailable.</p>",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsConditions;
