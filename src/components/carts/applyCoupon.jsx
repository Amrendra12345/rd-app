import { getAuthData } from "@/redux/auth/auth.selector";
import { cartActions } from "@/redux/cart/cart.reducer";
import { applyCoupon } from "@/servers/lib-reown/lib";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ApplyCoupon = () => {
  const auth = useSelector(getAuthData);
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState("");
  const [isApplyCoupon, setIsApplyCoupon] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleCouponApply = async () => {
    if (couponCode?.length > 3) {
      setIsError(null);
      const resp = await dispatch(
        cartActions.applyCouponAction(couponCode)
      ).unwrap();
      if (resp.status == 200) {
        setIsApplyCoupon(true);
        //  console.log(resp.data);
        setCouponCode("");
        setTimeout(() => {
          setIsApplyCoupon(false);
        }, 9000);
      } else {
        setIsError("Invalid coupon code");
      }
    } else {
      setIsError("Invalid coupon code");
      setTimeout(() => {
        setIsError(null);
      }, 3000);
    }
  };
  return (
    <>
      <div className="bg-gray-50 rounded border border-gray-200 w-full p-4">
        <p className="text-gray-700 mb-1">Have a Coupon Code ?</p>
        <div className="flex items-start">
          <input
            type="text"
            className="form-control"
            placeholder="Coupon Code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
          />
          <button
            type="button"
            className="bg-teal-600 py-[10px]  px-5 text-white rounded-r"
            onClick={handleCouponApply}
          >
            Apply
          </button>
        </div>
        {isError && (
          <p className="text-red-500 text-sm mt-[-8px] px-2">{isError}</p>
        )}
        {isApplyCoupon && (
          <p className="text-green-700 text-sm mt-[-8px] px-2">
            Coupon code applied successfully
          </p>
        )}
      </div>
    </>
  );
};

export default ApplyCoupon;
