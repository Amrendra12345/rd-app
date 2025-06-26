import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart2, BsEye } from "react-icons/bs";
import { FaRupeeSign, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { MdProductionQuantityLimits } from "react-icons/md";
import Tooltip from "../tooltip ";

const data = [
  {
    url: "/img/2.png",
    alt: "img",
  },
  {
    url: "/img/apple.png",
    alt: "img",
  },
  {
    url: "/img/3.jpg",
    alt: "img",
  },
  {
    url: "/img/4.jpg",
    alt: "img",
  },
  {
    url: "/img/5.jpg",
    alt: "img",
  },
  {
    url: "/img/7.jpg",
    alt: "img",
  },
  {
    url: "/img/9.jpg",
    alt: "img",
  },
  {
    url: "/img/10.jpg",
    alt: "img",
  },
];

const NewProduct = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-8 mt-8">
        {data.map((product, index) => {
          return (
            <div className="product-img" key={index}>
              <div className="relative p-4 bg-gray-100 h-[275px] mb-24">
                <Link href={`/product`}>
                  <Tooltip message="Go To Product Page">
                    <div className="w-[295px] h-[230px] relative">
                      <Image
                        src={product.url}
                        sizes="30vw"
                        fill
                        style={{
                          objectFit: "contain",
                          mixBlendMode: "multiply",
                        }}
                        className="img-fluid"
                        alt="img"
                        priority
                      />
                    </div>

                    <div className="flex justify-center items-center gap-4 -bottom-[53px] caption_product">
                      <span className="bg-sky-600 h-10 w-10 rounded-full flex justify-center items-center">
                        <MdProductionQuantityLimits className="text-white text-xl relative" />
                      </span>
                    </div>
                  </Tooltip>
                </Link>
                <div className="flex justify-center items-center gap-2 mb-4 mt-12">
                  <FaStar className="text-gray-200" />
                  <FaStar className="text-gray-200" />
                  <FaStar className="text-gray-200" />
                  <FaStar className="text-gray-200" />
                  <FaStar className="text-gray-200" />
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                  <p className="text-[16px] text-gray-600 text-wrap overflow-hidden text-ellipsis"></p>
                  {/* <p className="text-xl font-semibold flex justify-center items-center">
                            <FaRupeeSign className="text-[15px]" />{" "}
                            {product.sell_price}
                        </p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProduct;
