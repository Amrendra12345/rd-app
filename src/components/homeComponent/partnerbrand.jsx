import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const PartnerBrand = () => {
  var settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: true,
    arrows: true,
    centerMode: true,
    speed: 800,
    autoplaySpeed: 3500,
    centerPadding: "0px",
    dots: false,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  const brandLogos = [
    {
      src: "/img/brand/Amazon.png",
      alt: "amazon logo",
      title: "Amazon",
      subTitle: "Sourcing Partner",
    },
    {
      src: "/img/brand/AxisBank.png",
      alt: "axis bank logo",
      title: "Axis Bank",
      subTitle: "Payment Partner",
    },
    {
      src: "/img/brand/bizlog-icon.png",
      alt: "bizlog-icon",
      title: "Bizlog",
      subTitle: "Logistics Partner",
    },
    {
      src: "/img/brand/ecom-express-icon.png",
      alt: "ecom-express logo",
      title: "Ecom Express",
      subTitle: "Logistics Partner",
    },
    {
      src: "/img/brand/flipkart-icon.png",
      alt: "flipkart logo",
      title: "Flipkart",
      subTitle: "Voucher Partner",
    },
    {
      src: "/img/brand/Gupshup.png",
      alt: "Gupshup logo",
      title: "Gupshup",
      subTitle: "Messaging Partner",
    },
    {
      src: "/img/brand/icici-icon.png",
      alt: "icici logo",
      title: "ICICI",
      subTitle: "Payment Partner",
    },
    {
      src: "/img/brand/Lendingkart.png",
      alt: "Lendingkart logo",
      title: "Lendingkart",
      subTitle: "Lending Partner",
    },
    {
      src: "/img/brand/msg91-icon.png",
      alt: "msg91 logo",
      title: "MSG91",
      subTitle: "Messaging Partner",
    },
    {
      src: "/img/brand/payment-icon.png",
      alt: "Paytm logo",
      title: "Paytm",
      subTitle: "Payment Partner",
    },
    {
      src: "/img/brand/Pickrr.png",
      alt: "Pickrr logo",
      title: "Pickrr",
      subTitle: "Logistics Partner",
    },
    {
      src: "/img/brand/Qwikcilver.png",
      alt: "Qwikcilver logo",
      title: "Qwikcilver",
      subTitle: "Payment Partner",
    },
    {
      src: "/img/brand/Razorpay.png",
      alt: "Razorpay logo",
      title: "Razorpay",
      subTitle: "Payment Partner",
    },
    {
      src: "/img/brand/shadowfax-icon.png",
      alt: "shadowfax",
      title: "Shadowfax",
      subTitle: "Logistics Partner",
    },
  ];
  return (
    <section className="partnerBrand py-10 mb-10">
      <div className="container">
        <h3 className="text-xl font-bold uppercase text-center mb-6 mt-0">
          Partner Brand
        </h3>

        <Slider {...settings}>
          {brandLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center p-2">
              <div className="p-4 border border-gray-200 rounded content-slider min-w-[175px] max-w-[200px]">
                <div className="w-full flex justify-center items-center flex-col">
                  <Image
                    src={logo.src}
                    width={80}
                    height={80}
                    alt={logo.alt}
                    className="brand-logo"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <div className="text-center mt-4 caption">
                    <p className="text-sm font-bold text-gray-900 title">
                      {logo.title}
                    </p>
                    <p className="text-sm text-gray-700 subTitle">
                      {logo.subTitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PartnerBrand;
