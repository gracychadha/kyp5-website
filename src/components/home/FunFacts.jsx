import React, { useEffect, useState } from "react";
import axios from "axios";

function FunFacts() {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "counters")
      .then((response) => {
        const data = response.data?.data || [];

        const sorted = data.sort((a, b) => a.order - b.order);

        setCounters(sorted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

  return (
    <section className="funfacts-section">
      <div className="container">
        <div className="funfacts-wrapper">
          {counters.length > 0 ? (
            counters.map((counter) => {
              const icon = counter.icon
                ? BASE_URL + counter.icon
                : "/assets/images/fun-facts/01.svg";

              return (
                <div className="funfact-card" key={counter.id}>
                  <div className="funfact-icon">
                    <img src={icon} alt={counter.label} />
                  </div>

                  <h2 className="funfact-number">
                    {counter.value}
                    <span>+</span>
                  </h2>

                  <p className="funfact-title">{counter.label}</p>
                </div>
              );
            })
          ) : (
            <>
              {" "}
              <div className="funfact-card">
                <div className="funfact-icon">
                  <img src="/assets/images/fun-facts/01.svg" alt="img" />
                </div>

                <h2 className="funfact-number">
                  10000
                  <span>+</span>
                </h2>

                <p className="funfact-title">Questionaire</p>
              </div>
              <div className="funfact-card">
                <div className="funfact-icon">
                  <img src="/assets/images/fun-facts/01.svg" alt="img" />
                </div>

                <h2 className="funfact-number">
                  25
                  <span>+</span>
                </h2>

                <p className="funfact-title">Trusted Institutes</p>
              </div>
              <div className="funfact-card">
                <div className="funfact-icon">
                  <img src="/assets/images/fun-facts/01.svg" alt="img" />
                </div>

                <h2 className="funfact-number">
                  100
                  <span>%</span>
                </h2>

                <p className="funfact-title">Client Satisfaction</p>
              </div>
              <div className="funfact-card">
                <div className="funfact-icon">
                  <img src="/assets/images/fun-facts/01.svg" alt="img" />
                </div>

                <h2 className="funfact-number">
                  2
                  <span>+</span>
                </h2>

                <p className="funfact-title">Award Winning</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default FunFacts;
