import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const PartnerBrand = () => {
  var settings = {
    dots: false,
    infinite: true,
    className: "center",
    centerMode: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    lazyLoad: true,
  };
  return (
    <section className="partnerBrand py-10 mb-10">
      <div className="container">
        <h3 className="text-xl font-bold uppercase text-center mb-6 mt-0">
          Partner Brand
        </h3>

        <Slider {...settings}>
          <div className="flex justify-center items-center p-2">
            <div className="p-4">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={"/img/home4-brand-logo1.png"}
                  width={100}
                  height={100}
                  alt="Brand Logo 1"
                  className="brand-logo"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-2">
            <div className="p-4">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={"/img/home4-brand-logo2.png"}
                  width={80}
                  height={80}
                  className="brand-logo"
                  alt="Brand Logo 2"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-2">
            <div className="p-4">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={"/img/home4-brand-logo5.png"}
                  width={80}
                  height={80}
                  className="brand-logo"
                  alt="Brand Logo 5"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center p-2">
            <div className="p-4">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={"/img/home4-brand-logo3.png"}
                  width={80}
                  height={80}
                  className="brand-logo"
                  alt="Brand Logo 3"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-2">
            <div className="p-4">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={"/img/home4-brand-logo7.png"}
                  width={80}
                  height={80}
                  alt="Brand Logo 7"
                  className="brand-logo"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-2">
            <div className="p-4">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={"/img/home4-brand-logo4.png"}
                  width={80}
                  height={80}
                  className="brand-logo"
                  alt="Brand Logo 4"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-2">
            <div className="p-4">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={"/img/home4-brand-logo5.png"}
                  width={80}
                  height={80}
                  className="brand-logo"
                  alt="Brand Logo 5"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center p-2">
            <div className="p-4">
              <div className="w-full flex justify-center items-center">
                <Image
                  src={"/img/home4-brand-logo7.png"}
                  width={80}
                  height={80}
                  alt="Brand Logo 7"
                  className="brand-logo"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default PartnerBrand;
