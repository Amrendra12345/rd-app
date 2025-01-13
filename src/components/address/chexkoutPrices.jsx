import { getAuthData } from "@/redux/auth/auth.selector";
import { getCartData } from "@/redux/cart/cart.selector";
import { BiRupee } from "react-icons/bi";

import { useSelector } from "react-redux";

const ChexkoutPrices = () => {
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);
  return (
    <>
      <div className="my-6 border bg-gray-100 rounded ">
        <div className="py-2 px-4 border-b">
          <p className="text-gray-800 font-semibold">Your order</p>
        </div>
        <div className="cart-checkout-content bg-gray-50">
          <p className="text-gray-600 font-semibold text-sm px-4 py-3 border-b flex justify-between items-center">
            Total :{" "}
            <span className="text-gray-900 flex items-center">
              <BiRupee />
              {cart.cartTotal}
            </span>
          </p>
          <p className="text-gray-600 font-semibold text-sm px-4 py-3 border-b flex justify-between items-center">
            Coupon Discount :{" "}
            <span className="text-gray-900 flex items-center">
              {" "}
              <BiRupee />
              {cart.cartDiscount}
            </span>
          </p>
          <p className="text-gray-600 font-semibold text-sm px-4 py-3 border-b flex justify-between items-center">
            Delivery Charges : <span className="text-gray-900">Free</span>
          </p>
          <p className="text-gray-900 font-semibold  px-4 py-4 border-b flex justify-between items-center">
            Total :{" "}
            <span className="text-gray-900 flex items-center">
              <BiRupee />
              {cart.cartTotal}
            </span>
          </p>
          <button className="w-full py-3 uppercase px-4 text-white text-center bg-teal-800 hover:bg-teal-700 rounded">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default ChexkoutPrices;
