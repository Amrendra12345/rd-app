import { getAuthData } from "@/redux/auth/auth.selector";
import { getCartData } from "@/redux/cart/cart.selector";
import {
  getCheckoutDetails,
  getOrderDetails,
  getPaymentMethods,
} from "@/servers/lib-reown/lib";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { useSelector } from "react-redux";

const ChexkoutPrices = () => {
  const router = useRouter();
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);
  const { error, isLoading, Razorpay } = useRazorpay();
  const handlePlaceOrder = async () => {
    const res = await getCheckoutDetails(auth.token);
    if (res.status == 200) {
      console.log(res.data);
      const options = {
        // key: "rzp_test_vVBIqTtCqEXqYF",
        key: res.data.payment_gateway.API_KEY_ID,
        amount:
          (res.data.cart.total_amount - res.data.cart.total_discount) * 100,
        currency: "INR",
        name: "Reown",
        description: "Purchase Order",
        order_id: "",
        handler: async (response) => {
          checkAndBook(auth.token, response.razorpay_payment_id);
        },
        prefill: {
          name: res.data.user_detail.fullname,
          email: res.data.user_detail.email,
          contact: res.data.user_detail.mobile,
        },
        notes: {
          transaction_type: "wallet",
          account_id: res.data.user_detail.party_id,
        },
        theme: {
          color: "#F37254",
        },
      };
      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    }
  };
  let order_place_status = "repeat"; //success, error, repeat
  let do_booking_count = 0;

  const checkAndBook = (token, razorpay_payment_id) => {
    setInterval(() => doBookingInvoice(token, razorpay_payment_id), 7000);
  };
  const doBookingInvoice = async (token, razorpay_payment_id) => {
    if (do_booking_count >= 10) {
      order_place_status = "error";
      return;
    } else if (order_place_status == "repeat") {
      do_booking_count++;
      const res = await getPaymentMethods(token, razorpay_payment_id);
      console.log(res.data);
      //   if (res.status == 200) {
      //     router.push("/order-complete/");
      //   }
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
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default ChexkoutPrices;
