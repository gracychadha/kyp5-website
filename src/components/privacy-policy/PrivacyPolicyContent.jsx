import React, { useEffect, useState } from "react";
import axios from "axios";

function PrivacyPolicy() {
  const [privacyPolicy, setPrivacyPolicy] = useState(null);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "settings/privacy-policy")
      .then((response) => {
        setPrivacyPolicy(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!privacyPolicy) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }
  return (
    <>
      <div class="rts-course-default-area rts-section-gap">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="privacy-policy-content">
                <div className="privacy-policy-content">
                  <h2>
                    {privacyPolicy.title
                      ? privacyPolicy.title
                      : "Privacy Policy"}
                  </h2>

                  <p className="mb-4">
                    {privacyPolicy.subtitle
                      ? privacyPolicy.subtitle
                      : "This is a simple privacy policy content. You can replace this with your actual privacy policy text."}
                  </p>

                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        privacyPolicy?.content ||
                        "<p>Privacy policy content is currently unavailable.</p>",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
