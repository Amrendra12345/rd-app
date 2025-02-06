import { getAuthData } from "@/redux/auth/auth.selector";
import { getCartData } from "@/redux/cart/cart.selector";
import {
  getCheckoutDetails,
  getOrderDetails,
  getPaymentMethods,
} from "@/servers/lib-reown/lib";
import axios from "axios";
import { useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { useSelector } from "react-redux";

const ChexkoutPrices = () => {
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);
  const { error, isLoading, Razorpay } = useRazorpay();
  const handlePlaceOrder = async () => {
    const res = await getCheckoutDetails(auth.token);

    if (res.status == 200) {
      console.log(res.data);

      const options = {
        key: "rzp_test_vVBIqTtCqEXqYF",
        amount:
          (res.data.cart.total_amount - res.data.cart.total_discount) * 100,
        currency: "INR",
        name: "Reown",
        description: "",
        handler: async (response) => {
          if (response) {
            console.log(response.razorpay_payment_id);
            const resp = await getPaymentMethods(
              auth.token,
              response.razorpay_payment_id
            );
            console.log(resp);
          }
        },
        prefill: {
          name: res.data.user_detail.fullname,
          email: res.data.user_detail.email,
          contact: res.data.user_detail.mobile,
        },
        theme: {
          color: "#F37254",
        },
      };
      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    }
  };

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
          <button
            className="w-full py-3 uppercase px-4 text-white text-center bg-teal-800 hover:bg-teal-700 rounded"
            onClick={handlePlaceOrder}
          >
            {!isLoading ? "Please waite..." : "Place Order"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ChexkoutPrices;
