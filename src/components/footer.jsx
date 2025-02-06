import Link from "next/link";
import React from "react";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-gray-100 mt-auto">
      <div className="container">
        <div className="grid gap-1 grid-flow-col">
          <div className="">
            <p className="font-bold mb-4 text-[18px] text-gray-900 tracking-wide">
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
            <p className="font-semibold text-gray-800 mt-4">
              RelCube India Pvt. Ltd.{" "}
            </p>
            <p className="font-semibold text-gray-700 text-sm">
              {" "}
              CIN : U52609UP2017PTC094858{" "}
            </p>
            <p className="font-semibold text-gray-600 text-sm">
              Basement & 1st Floor,
              <br /> A-53, Sector-8,
              <br /> Noida - 201301, Uttar Pradesh, India
            </p>
          </div>
          <div className="">
            <p className="font-bold mb-4 text-[18px] text-gray-900 tracking-wide">
              Services
            </p>
            <ul>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                {" "}
                Buy Phone
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                {" "}
                Buy Laptops
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                {" "}
                Buy Desktops{" "}
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                {" "}
                Buy LCD/LED/TFT Monitors{" "}
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                {" "}
                Buy Accessories
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-bold mb-4 text-[18px] text-gray-900 tracking-wide">
              Company
            </p>
            <ul>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                About Us
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                Careers
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                Articles
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                Press Releases
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                Corporate Information
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-bold mb-4 text-[18px] text-gray-900 tracking-wide">
              Help & Support
            </p>
            <ul>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                FAQs
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                Contact Us
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                Warranty Policy
              </li>
              <li className="text-gray-700 font-medium py-1 hover:text-sky-800 transition-all duration-300 cursor-pointer">
                Refund Policy
              </li>
            </ul>
          </div>
          <div className="">
            <p className="font-bold mb-4 text-[18px] text-gray-900 tracking-wide">
              More Info
            </p>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>E-Waste Policy</li>
              <li>Cookie Policy</li>
              <li>Why Refurbished?</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
