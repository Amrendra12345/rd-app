import Breadcrumd from "@/components/breadcrumd";
import FaqDemo from "@/components/faq";
import SkeltonStaticPages from "@/components/skeltonStaticPages";
import React, { useEffect, useState } from "react";
const Faqs = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading ? (
        <SkeltonStaticPages />
      ) : (
        <section className="w-full my-8 terms">
          <Breadcrumd pageName={"Faqs"} />
          <div className="container mt-5">
            <div className="flex justify-center my-8">
              <h1 className="font-bold text-xl text-gray-800">
                Frequently Asked Questions{" "}
              </h1>
            </div>
            <div className="cards">
              <div className="card">
                <FaqDemo />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Faqs;
