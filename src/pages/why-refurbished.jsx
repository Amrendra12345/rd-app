import Breadcrumd from "@/components/breadcrumd";
import SkeltonStaticPages from "@/components/skeltonStaticPages";
import React, { useEffect, useState } from "react";

const WhyRefurbished = () => {
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
          <Breadcrumd pageName={"Why Choose Refurbished?"} />
          <div className="container p-2">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Why Choose Refurbished?
            </h1>
            <div className="cards">
              <div className="card">
                <p>
                  At <strong>REOWN</strong>, we believe smart tech doesn&#39;t
                  have to come with a hefty price tag. Refurbished gadgets offer
                  the perfect balance of quality, affordability, and
                  sustainability — and here&#39;s why they&#39;re worth it:
                </p>
                <p className="mt-4">
                  <strong className="text-gray-600">
                    1. Save Big Without Compromise
                  </strong>
                  <br />
                  Refurbished devices cost 20&#45;50% less than new ones —
                  without sacrificing performance. You get premium tech at a
                  fraction of the price.
                </p>
                <p className="mt-4">
                  <strong className="text-gray-600">
                    2. Professionally Tested & Certified
                  </strong>
                  <br />
                  Every product we sell is thoroughly inspected, repaired, and
                  tested by certified technicians. We ensure it meets high
                  standards for functionality and reliability.
                </p>
                <p className="mt-4">
                  <strong className="text-gray-600">
                    3. Eco-Friendly Choice
                  </strong>
                  <br />
                  Buying refurbished helps reduce electronic waste and carbon
                  emissions. It’s a small step toward a greener planet — and a
                  smarter way to shop.
                </p>
                <p className="mt-4">
                  <strong className="text-gray-600">
                    4. Warranty & Support Included
                  </strong>
                  <br />
                  All our products come with a minimum 6-month warranty and
                  dedicated customer support. You’re covered, just like with new
                  devices.
                </p>
                <p className="mt-4">
                  <strong className="text-gray-600">
                    5. Return-Friendly Shopping
                  </strong>
                  <br />
                  Changed your mind? No worries. We offer a 7-day return policy
                  so you can shop with confidence
                </p>
                <p className="mt-4">
                  <strong className="text-gray-600">
                    5. Same Tech, New Life
                  </strong>
                  <br />
                  From smartphones and laptops to tablets and wearables —
                  refurbished gadgets deliver the same great features at
                  unbeatable value.
                </p>
                <p className="mt-4">
                  <strong className="text-gray-600">6. Still Curious?</strong>
                  <br />
                  Check out our FAQ or reach out to our support team. We’re here
                  to help you make the switch to smarter, more sustainable tech.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WhyRefurbished;
