import AsideFilter from "@/components/asideFilter";
import Breadcrumd from "@/components/breadcrumd";
import QuickView from "@/components/carts/QuickView";
import { authActions } from "@/redux/auth/auth.reducer";
import { getAuthData } from "@/redux/auth/auth.selector";
import { cartActions } from "@/redux/cart/cart.reducer";
import { getCartData } from "@/redux/cart/cart.selector";
import { wishlistActions } from "@/redux/wishlist/wishlist.reducer";
import { getWishlistData } from "@/redux/wishlist/wishlist.selector";
import { getCommonData } from "@/servers/lib-rd/ravi1";
import { withSessionSsr } from "@/servers/lib-rd/session";
import { createUrlFromParams } from "@/servers/lib-reown/helpers";
import {
  createSlug,
  getLaptopDetails,
  getProductsList,
  updateWishlist,
} from "@/servers/lib-reown/lib";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsCart2, BsChevronLeft, BsChevronRight, BsEye } from "react-icons/bs";
import { FaRupeeSign, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import style from "./pagination.module.css";
import Tooltip from "@/components/tooltip2";
const ProductList = (props) => {
  const { products } = props;
  const router = useRouter();
  const [isActive, setIsctive] = useState(false);
  const [isCartAdded, setIsCartAdded] = useState(false);
  const cart = useSelector(getCartData);
  const auth = useSelector(getAuthData);
  const wishlist = useSelector(getWishlistData);
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredProcessors, setFilteredProcessors] = useState([]);
  const dispatch = useDispatch();
  const num_of_pages = Math.ceil(
    parseInt(products.result_count) / parseInt(products.limit)
  );

  const currentPage = parseInt(products.offset) / parseInt(products.limit);

  const notify = () => {
    toast.info("Allready added to Cart list", {
      position: "top-center",
      className: "py-2 px-4 w-[300px] bg-gray-500 text-white ",
    });
  };
  const wishlitNotiy = () => {
    toast.warning("Allready added to wishlist", {
      position: "top-center",
      className: "py-2 px-4 w-[300px] bg-black/80 text-white ",
    });
  };
  // console.log(cart);
  const handleCartIcon = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    if (cart.cartItems && !cart.cartItems.includes(id)) {
      dispatch(
        cartActions.addToCart({
          product_sku_id: id,
          quantity: 1,
          custom_ram: null,
          custom_hdd: null,
        })
      );
    } else {
      notify();
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
  const handleWishlist = async (e, id) => {
    e.preventDefault();
    if (wishlist.wishlistItems && !wishlist.wishlistItems.includes(id)) {
      dispatch(
        wishlistActions.addToWishlist({ action: "add", product_sku_id: id })
      );
    } else {
      wishlitNotiy();
    }
  };
  const handlePageClick = (event) => {
    if (event.nextSelectedPage != undefined) {
      router.push(
        "/product" +
          createUrlFromParams(
            parseInt(event.nextSelectedPage) + 1,
            router.query.search,
            router.query["make_id[]"],
            router.query["processor[]"]
          )
      );
    }
  };

  useEffect(() => {
    setSearch(router.query.search ?? "");
    if (router.query["make_id[]"]) {
      if (Array.isArray(router.query["make_id[]"]))
        setFilteredBrands(router.query["make_id[]"]);
      else setFilteredBrands([router.query["make_id[]"]]);
    } else {
      setFilteredBrands([]);
    }
    if (router.query["processors[]"]) {
      if (Array.isArray(router.query["processors[]"]))
        setFilteredProcessors(router.query["processors[]"]);
      else setFilteredProcessors([router.query["processors[]"]]);
    } else {
      setFilteredProcessors([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyBrandFilters = (brand, action) => {
    let brands = filteredBrands;
    if (action == "add") {
      if (!brands.includes(brand)) brands.push(brand);
    } else {
      brands = brands.filter((value) => {
        if (brand == value) return false;
        return true;
      });
    }
    setFilteredBrands(brands);
    router.push(
      "/product" +
        createUrlFromParams(
          undefined,
          router.query.search,
          brands,
          router.query["processors[]"]
        )
    );
  };
  const applyProcessorFilters = () => {};
  return (
    <>
      <Breadcrumd />
      <div className="container pt-16">
        <div className="flex justify-start items-start gap-8">
          <div className="w-[400px]">
            <AsideFilter
              applyBrandFilters={applyBrandFilters}
              selectedBrands={filteredBrands}
              applyProcessorFilters={applyProcessorFilters}
              selectedProcessors={filteredProcessors}
            />
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
                        <div className="relative p-4 bg-gray-100 h-[250px]">
                          {cart.cartItems.includes(el.product_sku_id) ? (
                            <div className="-ml-9 -mt-3 relative">
                              <span className="text-white bg-green-800 py-1 pl-3 pr-2 rounded-sm text-sm">
                                Added to Cart
                              </span>
                              <i className="arrowProduct"></i>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="w-[275x] h-[170px] relative">
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
                          <div className="flex justify-center items-center gap-4 -bottom-[20px] caption_product">
                            <Tooltip message={"Add to Cart"}>
                              <span
                                className="bg-sky-600 h-10 w-10 rounded-full flex justify-center items-center"
                                onClick={(e) =>
                                  handleCartIcon(e, el.product_sku_id)
                                }
                              >
                                <BsCart2 className="text-white text-xl" />
                              </span>
                            </Tooltip>
                            <Tooltip message={"Quickview"}>
                              <span
                                className="bg-sky-600 h-10 w-10 rounded-full flex justify-center items-center"
                                onClick={(e) =>
                                  handleQuickView(e, el.product_sku_id)
                                }
                              >
                                <BsEye className="text-white text-xl" />
                              </span>
                            </Tooltip>
                            <Tooltip
                              message={
                                wishlist.wishlistItems.includes(
                                  el.product_sku_id
                                )
                                  ? "Added to wishlist"
                                  : "Wishlist"
                              }
                            >
                              <span
                                className="bg-sky-600 h-10 w-10 rounded-full flex justify-center items-center"
                                onClick={(e) =>
                                  handleWishlist(e, el.product_sku_id)
                                }
                              >
                                <FiHeart className="text-white text-xl" />
                              </span>
                            </Tooltip>
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
            <div
              className={`${style.pagination} paginations flex w-full justify-end items-center mt-4`}
            >
              <ReactPaginate
                breakLabel="..."
                nextLabel={<BsChevronRight />}
                onClick={(event) => handlePageClick(event)}
                pageRangeDisplayed={5}
                pageCount={num_of_pages}
                previousLabel={<BsChevronLeft />}
                renderOnZeroPageCount={null}
                forcePage={currentPage}
              ></ReactPaginate>
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
