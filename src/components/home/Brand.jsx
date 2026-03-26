import React from "react";

function Brand() {
  return (
    <>
      <div className="brand-area-one ptb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="brand-style-one">
                
                <div className="left-title">
                  <h6 className="title">Trusted by:</h6>
                </div>

                <div
                  className="swiper mySwiper-category-1 swiper-data"
                  data-swiper={JSON.stringify({
                    spaceBetween: 30,
                    slidesPerView: 6,
                    loop: true,
                    speed: 1500,
                    autoplay: {
                      delay: 4000,
                    },
                    breakpoints: {
                      0: { slidesPerView: 2, spaceBetween: 30 },
                      320: { slidesPerView: 2, spaceBetween: 30 },
                      480: { slidesPerView: 3, spaceBetween: 30 },
                      640: { slidesPerView: 4, spaceBetween: 30 },
                      840: { slidesPerView: 4, spaceBetween: 30 },
                      1140: { slidesPerView: 6, spaceBetween: 30 },
                    },
                  })}
                >
                  
                  <div className="swiper-wrapper">

                    <div className="swiper-slide">
                      <div className="brand-area">
                        <img src="/assets/images/brand/08.svg" alt="brand" />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="brand-area">
                        <img src="/assets/images/brand/09.svg" alt="brand" />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="brand-area">
                        <img src="/assets/images/brand/10.svg" alt="brand" />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="brand-area">
                        <img src="/assets/images/brand/11.svg" alt="brand" />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="brand-area">
                        <img src="/assets/images/brand/12.svg" alt="brand" />
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="brand-area">
                        <img src="/assets/images/brand/13.svg" alt="brand" />
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;