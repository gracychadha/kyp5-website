import React, { useEffect, useState } from "react";
import axios from "axios";

function Brand() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BASE_URL + "partners")
      .then((response) => {
        setPartners(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

 

  return (
    <div className="brand-area-one ptb--100">
      <div className="container">
        <div className="brand-style-one">
          <div className="left-title">
            <h6 className="title">Trusted by:</h6>
          </div>

          <div className="category-swiper-wrapper">
            <div className="swiper mySwiper-category-5">
              <div className="swiper-wrapper">
                {partners.map((partner) => (
                  <div className="swiper-slide" key={partner.id}>
                    <div className="brand-area">
                      <img
                        src={
                          partner.logo
                            ? import.meta.env.VITE_BASE_URL.replace(
                                "/api/public/",
                                "",
                              ) + partner.logo
                            : "/assets/images/brand/08.svg"
                        }
                        alt="brand"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Brand;
