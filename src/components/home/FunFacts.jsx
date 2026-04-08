import React, { useEffect, useState } from "react";
import axios from "axios";

function FunFacts() {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "counters")
      .then((response) => {
        const data = response.data?.data || [];

        // sort by order
        const sorted = data.sort((a, b) => a.order - b.order);

        setCounters(sorted);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const BASE_URL = import.meta.env.VITE_BASE_URL.replace("/api/public/", "");

  return (
    <>
      <div className="fun-facts-area-1 shape-move bg_image ptb--50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="fun-facts-main-wrapper-1">

                {counters.length > 0 ? (
                  counters.map((counter) => {
                    const icon = counter.icon
                      ? BASE_URL + counter.icon
                      : "/assets/images/fun-facts/01.svg";

                    const label = counter.label || "Counter";

                    const value = counter.value || 0;

                    return (
                      <div className="single-fun-facts" key={counter.id}>
                        <div className="icon">
                          <img src={icon} alt={label} />
                        </div>

                        <h5 className="title">
                          <span className="counter">{value}</span>
                        </h5>

                        <span className="enr">{label}</span>
                      </div>
                    );
                  })
                ) : (
                  <p style={{ textAlign: "center" }}>
                    No counters available
                  </p>
                )}

              </div>

            </div>
          </div>
        </div>

        <div className="shape-image">
          <div className="shape one" data-speed="0.04" data-revert="true">
            <img src="/assets/images/banner/15.png" alt="shape" />
          </div>

          <div className="shape three" data-speed="0.04">
            <img src="/assets/images/banner/16.png" alt="shape" />
          </div>
        </div>

      </div>
    </>
  );
}

export default FunFacts;