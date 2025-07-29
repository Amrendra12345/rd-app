import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-gray-100 mt-auto">
      <div className="container">
        <giv className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div>
            <p className="font-bold px-1 text-sm mb-2">Services</p>
            <ul>
              <li className="p-1">
                <Link
                  href="/order"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Buy Phone
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="/profile"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  {" "}
                  Buy Laptop
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="/tickets"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Buy Tablets
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="address"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Buy Other Gadgets
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href=" "
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Buy Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold px-1 text-sm mb-2"> Company</p>
            <ul>
              <li className="p-1">
                <Link
                  href="/about-us"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  About Us
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="/order"
                  className="text-gray-600  text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold px-1 text-sm mb-2"> Help & Support</p>
            <ul>
              <li className="p-1">
                <Link
                  href="/profile"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  My Profile
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="/contact-us"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Contact Us
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="/order"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Track Order
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="/order"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  My Cart
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="/order"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  My Wishlist
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold px-1 text-sm mb-2"> More Info</p>
            <ul>
              <li className="p-1">
                <Link
                  href="terms-and-conditions"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li className="p-1">
                <Link
                  href="terms-of-use"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Terms of Use
                </Link>
              </li>

              <li className="p-1">
                <Link
                  href="why-refurbished"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Why Refurbished?
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="faqs"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Faqs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold px-1 text-sm mb-2">Policy</p>
            <ul>
              <li className="p-1">
                <Link
                  href="privacy-policy"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="warranty-policy"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Warranty Policy
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="refund-policy"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Refund Policy
                </Link>
              </li>

              <li className="p-1">
                <Link
                  href="e-waste-policy"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  E-Waste Policy
                </Link>
              </li>
              <li className="p-1">
                <Link
                  href="cookie-policy"
                  className="text-gray-600 text-sm transition-all duration-500 hover:text-blue-800"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </giv>
      </div>
    </footer>
  );
};

export default Footer;
