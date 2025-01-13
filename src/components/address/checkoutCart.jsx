import { getAuthData } from "@/redux/auth/auth.selector";
import { getCartData } from "@/redux/cart/cart.selector";
import Image from "next/image";
import { BiRupee } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { useSelector } from "react-redux";

const CheckoutCart = () => {
  const auth = useSelector(getAuthData);
  const cart = useSelector(getCartData);

  return (
    <>
      <div className="border bg-gray-100 rounded">
        <div className="py-2 px-4 border-b">
          <p className="text-gray-800 font-semibold">
            In your cart <span>{cart.cartCount}</span>
          </p>
        </div>
        <div className="cart-checkout-content bg-gray-50">
          {cart &&
            cart.cartItemsData?.map((item) => {
              return (
                <div
                  key={item.product_sku_id}
                  className="flex justify-between items-center border-b last:border-0"
                >
                  <div className="py-3 px-4 flex items-center justify-start gap-3">
                    <div className="w-10 h-7 p-10 bg-gray-200 relative rounded">
                      <Image
                        src={item.product_icon}
                        fill
                        sizes="30vw"
                        style={{
                          objectFit: "contain",
                          mixBlendMode: "multiply",
                        }}
                        alt={item.product_make}
                        className="p-2 img-fluid border"
                      />
                    </div>
                    <div className="">
                      <p className="text-sm text-gray-900 font-semibold">
                        {item.product_title.split("|")[0]}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.product_title.split("|")[1]}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.product_title.split("|")[2]}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.product_title.split("|")[3]}
                      </p>
                    </div>
                  </div>
                  <div className="pr-4">
                    <p className="text-gray-900 font-semibold flex items-center">
                      <span>
                        <BiRupee />
                      </span>
                      {item.amount}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;
