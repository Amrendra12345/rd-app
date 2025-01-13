import AsideFilter from "@/components/asideFilter";
import Breadcrumd from "@/components/breadcrumd";
import QuickView from "@/components/carts/QuickView";
import CartSidebar from "@/components/cartSidebar";
import { authActions } from "@/redux/auth/auth.reducer";
import { getAuthData } from "@/redux/auth/auth.selector";
import { cartActions } from "@/redux/cart/cart.reducer";
import { getCartData } from "@/redux/cart/cart.selector";
import { getCommonData } from "@/servers/lib-rd/ravi1";
import { withSessionSsr } from "@/servers/lib-rd/session";
import { config_urlencoded } from "@/servers/lib-reown/constants";
import {
  createSlug,
  getLaptopDetails,
  getProductsList,
} from "@/servers/lib-reown/lib";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCart2, BsEye } from "react-icons/bs";
import { FaRupeeSign, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const ProductList = (props) => {
  const { products } = props;
  const [isActive, setIsctive] = useState(false);
  const [isCartAdded, setIsCartAdded] = useState(false);
  const cart = useSelector(getCartData);
  const auth = useSelector(getAuthData);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  // console.log(cart);
  const handleCartIcon = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    if (auth && auth.currentUser === null) {
      dispatch(authActions.openSidebar("login"));
    }

    if (cart.cartItems && !cart.cartItems.includes(id)) {
      dispatch(
        cartActions.addToCart({
          product_sku_id: id,
          quantity: 1,
          custom_ram: null,
          custom_hdd: null,
        })
      );
    }
  };
  const handleQuickView = async (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setIsctive(true);
    const result = await getLaptopDetails(id);
    setProduct(result.data.product);
  };
  const closePopup = () => setIsctive(false);

  return (
    <>
      <Breadcrumd />
      <div className="container pt-16">
        <div className="flex justify-start items-start gap-8">
          <div className="w-[400px]">
            <AsideFilter />
          </div>
          <div className="w-full">
            <h1 className="text-xl font-semibold">Product </h1>
            <div className="mt-4 grid grid-cols-4 gap-8">
              {Array.isArray(products.models) &&
                products.models.map((el) => {
                  return (
                    <div className="product-img" key={el.product_sku_id}>
                      <Link
                        href={`/product/${createSlug(
                          el.product_title,
                          el.product_sku_id
                        )}`}
                      >
                        <div className="relative p-4 bg-gray-100 h-[300px]">
                          <div className="w-[275x] h-[200px] relative">
                            <Image
                              src={el.product_icon}
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
                          <div className="flex justify-center items-center gap-4 caption_product">
                            <span
                              className="bg-sky-600 h-10 w-10 rounded-full flex justify-center items-center"
                              onClick={(e) =>
                                handleCartIcon(e, el.product_sku_id)
                              }
                            >
                              <BsCart2 className="text-white text-xl" />
                            </span>
                            <span
                              className="bg-sky-600 h-10 w-10 rounded-full flex justify-center items-center"
                              onClick={(e) =>
                                handleQuickView(e, el.product_sku_id)
                              }
                            >
                              <BsEye className="text-white text-xl" />
                            </span>
                            <span className="bg-sky-600 h-10 w-10 rounded-full flex justify-center items-center">
                              <FiHeart className="text-white text-xl" />
                            </span>
                          </div>
                        </div>
                      </Link>
                      <div className="flex justify-center items-center gap-2 my-4">
                        <FaStar className="text-gray-200" />
                        <FaStar className="text-gray-200" />
                        <FaStar className="text-gray-200" />
                        <FaStar className="text-gray-200" />
                        <FaStar className="text-gray-200" />
                      </div>
                      <div className="flex justify-center items-center flex-col gap-2">
                        <p className="text-[16px] text-gray-600 text-wrap overflow-hidden text-ellipsis">
                          {el.product_title.split("|")[0]}
                        </p>
                        <p className="text-xl font-semibold flex justify-center items-center">
                          <FaRupeeSign className="text-[15px]" />{" "}
                          {el.sell_price}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      {isActive && (
        <QuickView closePopup={closePopup} laptopDetails={product} />
      )}
    </>
  );
};

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req, query }) {
    const data = [];
    const result = await getCommonData(req, data);
    const { page, search } = query;
    const make_id = query["make_id[]"];
    const processors = query["processors[]"];
    if (result.success) {
      let limit = 20;
      let offset = 0;
      if (page != undefined) {
        offset = (parseInt(page) - 1) * limit;
      }
      const product_res = await getProductsList(
        search,
        make_id,
        processors,
        offset,
        limit
      );
      // console.log(product_res.data, 'pro')
      return {
        props: { products: product_res.data },
      };
    }
    return {
      props: {},
    };
  }
);

export default ProductList;
