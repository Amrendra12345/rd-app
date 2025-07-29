import PincodeCheck from "@/components/pincodeCheck";
import { getAuthData } from "@/redux/auth/auth.selector";
import { cartActions } from "@/redux/cart/cart.reducer";
import { getCartData } from "@/redux/cart/cart.selector";
import { getCommonData } from "@/servers/lib-rd/ravi1";
import { withSessionSsr } from "@/servers/lib-rd/session";
import { getLaptopDetails } from "@/servers/lib-reown/lib";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRupeeSign, FaStar } from "react-icons/fa";
import { PiVanThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { IoMdTime } from "react-icons/io";
import RelatedProducts from "@/components/relatedProducts";

const ProductList = (props) => {
  const [open, setOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);
  const [customRam, setCustomRam] = useState(null);
  const [customHdd, setCustomHdd] = useState(null);
  const [isIncludeCart, setIsIncludeCart] = useState([]);
  const dispatch = useDispatch();
  const [pincodeEnabled, setPincodeEnabled] = useState(false);

  const handleSmallImg = (e, i) => {
    setImgIndex(i);
  };
  const pincodeCheckCallback = (pincodeServiceable) => {
    setPincodeEnabled(pincodeServiceable);
  };
  const handleAddtoCart = () => {
    dispatch(
      cartActions.addToCart({
        product_sku_id: props.productDetails.product.product_sku_id,
        quantity: 1,
        custom_ram: customRam,
        custom_hdd: customHdd,
      })
    )
      .unwrap()
      .then((data) => {
        // console.log(data);
        //handle success or errors
      });
  };

  return (
    <>
      <div className="container px-4 md:px-0 mt-4">
        <div className="flex flex-col md:flex-row justify-start gap-10">
          <div className="w-full lg:w-2/5 min-h-72 md:min-h-96  flex-shrink-0 relative">
            <div
              className="flex bg-gray-100 p-4 rounded  border-gray-200 w-full border min-h-72 md:min-h-96"
              onClick={() => setOpen(true)}
            >
              <Image
                src={props.productDetails.product.images[imgIndex]}
                sizes="30vw"
                className="img-fluid"
                width={450}
                height={300}
                priority
                alt="img"
                style={{ objectFit: "contain", mixBlendMode: "multiply " }}
              />
            </div>
            <div className="flex justify-start items-center gap-1 p-1 rounded-sm mt-2">
              {props.productDetails.product.images &&
              Array.isArray(props.productDetails.product.images)
                ? props.productDetails.product.images.map((image, index) => {
                    return (
                      <div
                        className="w-24  h-20 p-2 border rounded-sm cursor-pointer flex justify-center items-center"
                        key={index}
                        onClick={(e) => handleSmallImg(e, index)}
                      >
                        <Image
                          src={image}
                          width={100}
                          height={90}
                          className="img-fluid"
                          alt="small img"
                        />
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          <div className="w-full relative">
            <div className="flex justify-start items-center gap-10">
              <div className="flex gap-1 text-green-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm text-gray-500">4 Reviews</p>
            </div>
            <p className="text-gray-800 mt-4 font-semibold">
              {props.productDetails.product.product_title}
            </p>
            <p className="text-gray-400 mt-2">
              {props.productDetails.product.processor}
            </p>
            <p className="text-gray-400 mt-2">
              {props.productDetails.product.hdd}
            </p>
            <p className="text-gray-400 mt-2">
              {props.productDetails.product.ram}
            </p>
            <p className="text-green-700 flex justify-start items-center font-bold gap-1 mt-2">
              <span className="text-[14px]">
                <FaRupeeSign />
              </span>
              <span className="text-[18px]">
                {props.productDetails.product.sell_price}.00{" "}
              </span>
            </p>
            <div className="mt-2 w-3/4 md:w-1/2">
              <p className="text-gray-400 mb-2">
                Enter pincode to see product availablity
              </p>
              <PincodeCheck pincodeCheckCallback={pincodeCheckCallback} />
            </div>
            <div className="mt-2 w-full md:w-1/2 flex justify-between items-center">
              <p className="mt-1 flex justify-start items-center gap-4">
                <PiVanThin className="text-blue-800 text-3xl" />
                <span className="text-gray-400">Free delivery</span>
              </p>
              <p className="mt-1 flex justify-start items-center gap-4">
                <IoMdTime className="text-blue-800 text-2xl" />
                <span className="text-gray-400">3 Months Warranty</span>
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              {!cart?.cartItems.includes(
                props.productDetails.product.product_sku_id
              ) ? (
                <button
                  type="button"
                  className="bg-teal-600 w-[250px] rounded py-3 px-10 text-white uppercase"
                  onClick={handleAddtoCart}
                >
                  Add to cart
                </button>
              ) : (
                ""
              )}
              <button
                type="button"
                className="bg-orange-700 w-[250px] rounded py-3 px-10 text-white uppercase"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* <div className="">
            <button
              type="button"
              className="bg-teal-600 w-[250px] rounded py-3 px-10 text-white uppercase"
              onClick={handleAddtoCart}
            >
              Add to cart
            </button>
          </div> */}
      </div>
      <RelatedProducts relatedProduct={props.productDetails.related_items} />
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imgIndex}
        slides={
          props.productDetails.product.images &&
          Array.isArray(props.productDetails.product.images)
            ? props.productDetails.product.images.map((image) => {
                return { src: image };
              })
            : ""
        }
      />
    </>
  );
};

export default ProductList;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, query }) {
    const { product_slug } = query;
    const product_sku_id = product_slug.split("-").pop();
    const data = [];
    const result = await getCommonData(req, data);
    if (result.success == true) {
      const models_res = await getLaptopDetails(product_sku_id);
      if (models_res.status == 200) {
        return {
          props: {
            ...result.data,
            productDetails: models_res.data,
          },
        };
      } else if (
        models_res.status == 400 &&
        models_res.message.search(/does not exist/gi) != -1
      ) {
        return {
          notFound: true,
        };
      } else {
        return {
          props: {
            ...result.data,
          },
        };
      }
    }
    return {
      props: {},
    };
  }
);
