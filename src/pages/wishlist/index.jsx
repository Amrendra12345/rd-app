import Breadcrumd from "@/components/breadcrumd";
import { getAuthData } from "@/redux/auth/auth.selector";
import { getWishlistData } from "@/redux/wishlist/wishlist.selector";
import Image from "next/image";
import React from "react";
import { BiRupee } from "react-icons/bi";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const auth = useSelector(getAuthData);
  const wishlist = useSelector(getWishlistData);
  console.log(wishlist.wishlistItemsData);

  return (
    <>
      <Breadcrumd pageName="wishlist" />
      <div className="container px-20 mt-14 mb-10">
        <div className="border bg-gray-100 p-4 rounded">
          <div className="flex justify-between items-center border-gray-300 border-b pb-2">
            <p>My wishlist:</p>
          </div>
          {wishlist.wishlistItemsData.length > 1 &&
            wishlist.wishlistItemsData.map((el) => {
              return (
                <div
                  className="py-4 border-gray-300 border-b last:border-b-0 flex justify-between items-center"
                  key={el.product_sku_id}
                >
                  <div className="flex justify-start items-center gap-2 w-1/3">
                    <div className="w-20 h-20 relative bg-white border">
                      <Image
                        src={el.product_icon}
                        className="img-fluid object-contain mix-blend-multiply p-2"
                        sizes="30vw"
                        fill
                        alt={el.product_make}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {el.product_title.split("|")[0]}
                      </p>
                      <p className="text-sm  text-gray-600">
                        {el.product_title.split("|")[1]}
                      </p>
                      <p className="text-sm  text-gray-600">
                        {el.product_title.split("|")[2]}
                      </p>
                      <p className="text-sm  text-gray-600">
                        {el.product_title.split("|")[3]}
                      </p>
                    </div>
                  </div>
                  <div className="flex-col flex gap-2 w-1/3 justify-start items-center">
                    <button className="py-1 px-4 rounded border text-blue-600 ">
                      Add to cart
                    </button>
                    <button className="py-1 px-4 rounded border text-green-600">
                      Buy Now
                    </button>
                    <button className="py-1 px-4 rounded border text-red-700">
                      Remove
                    </button>
                  </div>
                  <div className="flex justify-end items-center pr-4">
                    <BiRupee />
                    <p>{el.sell_price}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
