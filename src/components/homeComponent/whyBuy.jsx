import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import {
  BsCheckCircle,
  BsFillPatchCheckFill,
  BsShieldCheck,
  BsTruck,
} from "react-icons/bs";
import { FaGears } from "react-icons/fa6";
import { GiThreeLeaves } from "react-icons/gi";
import { LuCircleCheckBig, LuPackageCheck } from "react-icons/lu";
import { PiHeadphonesFill } from "react-icons/pi";

const WhyBuy = () => {
  return (
    <section className="whyBuy pt-8 pb-10 bg-gray-50">
      <div className="container">
        <h3 className="text-xl font-bold uppercase text-center mb-10">
          Why Buy Refurbished with Us?
        </h3>
        <div className="grid grid-cols-5 gap-2">
          <div className="py-4 px-2">
            <BsTruck className="text-4xl text-teal-800 mx-auto mb-2" />
            <p className="text-gray-800 text-center text-[13px] font-semibold mb-1">
              Free Delivery
            </p>
            <p className="text-center text-sm text-gray-600 px-2 mb-1">
              Nationwide Free Delivery on all orders—no hidden charges
            </p>
          </div>
          <div className="py-4 px-2">
            <BsShieldCheck className="text-4xl text-teal-800 mx-auto mb-2" />
            <p className="text-gray-800 text-center text-sm font-semibold mb-1">
              Warranty
            </p>
            <p className="text-center text-sm text-gray-600 px-2 mb-1">
              6-Month Replacement Warranty for peace of mind
            </p>
          </div>
          <div className="py-4 px-2">
            <BiSolidOffer className="text-4xl text-teal-800 mx-auto mb-2" />
            <p className="text-gray-800 text-center text-sm font-semibold mb-1">
              Great Offers
            </p>
            <p className="text-center text-sm text-gray-600 px-2 mb-1">
              Great Offers on top brands and models
            </p>
          </div>
          <div className="py-4 px-2">
            <BsCheckCircle className="text-4xl text-teal-800 mx-auto mb-2" />
            <p className="text-gray-800 text-center text-sm font-semibold mb-1">
              Best Qality
            </p>
            <p className="text-center text-sm text-gray-600 px-2 mb-1">
              Certified Refurbished with 40+ quality checks
            </p>
          </div>
          <div className="py-4 px-2">
            <BsFillPatchCheckFill className="text-4xl text-teal-800 mx-auto mb-2" />
            <p className="text-gray-800 text-center text-sm font-semibold mb-1">
              Performance Guaranteed
            </p>
            <p className="text-center text-sm text-gray-600 px-2 mb-2">
              Battery & Performance Guaranteed
            </p>
          </div>
          <div className="py-4 px-2">
            <GiThreeLeaves className="text-4xl text-teal-800 mx-auto mb-2" />
            <p className="text-gray-800 text-center text-sm font-semibold">
              Eco-Friendly
            </p>
            <p className="text-center text-sm text-gray-600">
              Eco-Friendly Choice — reduce{" "}
              <span className="text-nowrap">e-waste</span>, save the planet
            </p>
          </div>
          <div className="py-4 px-2">
            <LuCircleCheckBig className="text-4xl text-teal-800 mx-auto mb-2" />
            <p className="text-gray-800 text-center text-sm font-semibold">
              Multi-Point Quality Check
            </p>
            <p className="text-center text-sm text-gray-600">
              Every device is tested for performance, battery, and appearance
            </p>
          </div>
          <div className="py-4 px-4">
            <FaGears className="text-4xl text-teal-800 mx-auto mb-2" />
            <p className="text-gray-800 text-center text-sm font-semibold">
              Genuine Parts Used
            </p>
            <p className="text-center text-sm text-gray-600">
              Only certified components in every refurbishment
            </p>
          </div>
          <div className="py-4 px-4">
            <LuPackageCheck className="text-4xl text-teal-800 mx-auto mb-2" />
            <p className="text-gray-800 text-center text-sm font-semibold">
              Secure Packaging
            </p>
            <p className="text-center text-sm text-gray-600">
              Devices shipped safely and damage-free
            </p>
          </div>
          <div className="py-4 px-4">
            <PiHeadphonesFill className="text-4xl text-teal-800 mx-auto mb-2" />
            <p className="text-gray-800 text-center text-sm font-semibold">
              Dedicated Support
            </p>
            <p className="text-center text-sm text-gray-600">
              Friendly customer service for all your queries
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuy;
