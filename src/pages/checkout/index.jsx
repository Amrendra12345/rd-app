import BillingAddress from "@/components/address/billingAddress";
import CheckoutCart from "@/components/address/checkoutCart";
import ChexkoutPrices from "@/components/address/chexkoutPrices";
import Breadcrumd from "@/components/breadcrumd";

const Checkout = () => {
  return (
    <>
      <Breadcrumd pageName="Checkout" />
      <section className="w-full mt-10">
        <div className="container">
          <div className="w-full flex justify-start items-start gap-5">
            <div className="w-[70%]">
              <BillingAddress />
            </div>
            <div className="w-[30%] flex-shrink-0">
              <CheckoutCart />
              <ChexkoutPrices />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
