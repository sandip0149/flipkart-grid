import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/bundle";
import Swiper from "swiper/bundle";
const SliderComponent = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2400,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="m-0 h-80 bg-gray-100 flex justify-center items-center">
      <div className="w-full h-full bg-white rounded-lg shadow-lg flex items-center">
        <div className="swiper mySwiper h-full">
          <div className="swiper-wrapper ">
            
          <div
              className="swiper-slide swiper-slide--style p-6  bg-cover"
              style={{ backgroundImage: "../public/flipkart grid-01.png" }}
            >
              {/* <img
                
                className="absolute -z-10  h-[90%]"
              /> */}
              {/* <div className="container__text">
                <h2 className="text-xl font-semibold mb-2 text-red-700">NFT </h2>
                <p className="text-gray-600">
                 Flipkart NFT MarketPlace Coming Soon...
                </p>
              </div> */}
            </div>
            <div className="swiper-slide swiper-slide--style p-6 bg-no-repeat bg-cover">
              <img
                src="./img1.png"
                className="absolute -z-10 w-2/5 ml-[400px]"
              />
              <div className="container__text z-10">
                {/* <h2 className="text-xl font-semibold mb-2 text-blue-700">
                  Unstop
                </h2> */}
                {/* <p className="text-gray-600">
                  Derived from the belief to #BeUnstoppable, is a community{" "}
                  <br />
                  engagement and hiring platform for students and freshers where{" "}
                  <br />
                  talent meets opportunities.
                </p> */}
              </div>
              {/* <div
                id="slide__img1"
                className="slide__img--img bg-cover bg-center"
                style={{
                  backgroundImage: "../../public/img1.jpeg",
                }}
              ></div> */}
            </div>

            <div className="swiper-slide swiper-slide--style p-6 bg-no-repeat bg-cover">
              <img
                src="./img2.png"
                className="absolute -z-10 w-2/5 ml-[400px]"
              />
              <div className="container__text">
                {/* <h2 className="text-xl font-semibold mb-2 text-yellow-400">
                  Flipkart
                </h2> */}
                {/* <p className="text-gray-600 ">
                  One of the largest world-wide E-Commerce Platform
                </p> */}
              </div>
            </div>

          </div>
          <div className="swiper-button-next text-gray-600"></div>
          <div className="swiper-button-prev text-gray-600"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
