import Link from "next/link";
import React from "react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-gray-50 mt-auto">
      <div className="container">
        <div className="grid gap-1 grid-flow-col">
          <div className="">
            <p className="font-semibold mb-6 text-sm text-[18px] text-gray-900 tracking-wide">
              Follow us on
            </p>
            <ul className="flex gap-2">
              <li className="border rounded border-gray-300 p-1 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">
                <FaXTwitter className="2xl" />
              </li>
              <li className="border rounded border-gray-300 p-1 hover:bg-blue-800 hover:text-white transition-all duration-300 cursor-pointer">
                <FaFacebookF className="2xl" />
              </li>
              <li className="border rounded border-gray-300 p-1 hover:bg-gradient-to-r from-[#ff401e] to-[#fb0f0f] hover:text-white transition-all duration-300 cursor-pointer">
                <FaInstagram className="2xl" />
              </li>
              <li className="border rounded border-gray-300 p-1 hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer">
                <IoLogoYoutube className="2xl" />
              </li>
            </ul>
            <p className="font-semibold text-gray-700 mt-4 text-sm">
              RelCube India Pvt. Ltd.{" "}
            </p>
            <p className="font-semibold text-gray-600 text-[13px]">
              {" "}
              CIN : U52609UP2017PTC094858{" "}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Basement & 1st Floor,
              <br /> A-53, Sector-8,
              <br /> Noida - 201301, Uttar Pradesh, India
            </p>
          </div>
          <div className="">
            <p className="font-semibold mb-6 text-sm text-gray-900 tracking-wide">
              Services
            </p>
            <ul>
              <li className="text-sm text-gray-600 tracking-wide py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                {" "}
                Buy Phone
              </li>
              <li className="text-gray-600 tracking-wide text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                {" "}
                Buy Laptops
              </li>
              <li className="text-gray-600 tracking-wide text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                {" "}
                Buy Desktops{" "}
              </li>
              <li className="text-gray-600 tracking-wide text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                {" "}
                Buy LCD/LED/TFT Monitors{" "}
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                {" "}
                Buy Accessories
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold mb-6 text-sm text-gray-900 tracking-wide">
              Company
            </p>
            <ul>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                About Us
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Careers
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Articles
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Press Releases
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Corporate Information
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold mb-6 text-sm text-gray-900 tracking-wide">
              Help & Support
            </p>
            <ul>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                FAQs
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Contact Us
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Warranty Policy
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Refund Policy
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-semibold mb-6 text-sm text-gray-900 tracking-wide">
              More Info
            </p>
            <ul>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Terms of Use
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                E-Waste Policy
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Cookie Policy
              </li>
              <li className="text-gray-500 font-medium text-sm py-2 hover:text-orange-600 transition-all duration-300 cursor-pointer">
                Why Refurbished?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
