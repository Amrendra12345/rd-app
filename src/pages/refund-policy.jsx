import Breadcrumd from "@/components/breadcrumd";
import SkeltonStaticPages from "@/components/skeltonStaticPages";
import React, { useEffect, useState } from "react";

const RefundPolicy = () => {
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
          <Breadcrumd pageName={"Refund Policy"} />
          <div className="container mt-5">
            <div className="flex justify-center my-8">
              <h1 className="font-bold text-xl text-gray-800">Refund Policy</h1>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  At <strong> REOWN</strong>, customer satisfaction is our top
                  priority. If you&#39;re not completely happy with your
                  purchase, we’re here to help.
                </p>
                <ol className="mt-4 list-inside list-disc">
                  <p>
                    <strong>Eligibility for Refund</strong>
                  </p>
                  <p>You may request a refund if:</p>
                  <li>
                    The product is defective or not functioning as described.
                  </li>
                  <li>You received the wrong item.</li>
                  <li>The item was damaged during shipping.</li>
                  <li>You changed your mind within the return window.</li>
                </ol>
                <ol className="mt-4 list-inside list-disc">
                  <p>
                    <strong> Refund Window </strong>
                  </p>
                  <p>
                    You have 7 days from the date of delivery to request a
                    refund.
                  </p>
                </ol>
                <ol className="mt-4 list-inside list-disc">
                  <p>
                    <strong>Return Conditions</strong>
                  </p>
                  <p>To qualify for a refund, the item must be:</p>
                  <li>In its original packaging</li>
                  <li>In the same condition as received</li>
                  <li>
                    Accompanied by the original invoice or proof of purchase
                  </li>
                </ol>
                <ol className="mt-4 list-inside list-disc">
                  <p>
                    <strong>Return Process</strong>
                  </p>
                  <p>
                    Contact our support team at [support@email.com] with your
                    order ID and reason for return. We’ll guide you through the
                    return process and arrange pickup if applicable.
                  </p>
                  <p>
                    Once we receive and inspect the item, your refund will be
                    processed.
                  </p>
                </ol>
                <ol className="mt-4 list-inside list-disc">
                  <p>
                    <strong>Refund Method</strong>
                  </p>
                  <p>
                    Refunds will be issued to your original payment method
                    within 5–7 business days after approval.
                  </p>
                </ol>
                <ol className="mt-4 list-inside list-disc">
                  <p>
                    <strong>Non-Refundable Items</strong>
                  </p>
                  <li>Items returned after the 7-day window</li>
                  <li>
                    Products damaged due to misuse or unauthorized repairs
                  </li>
                  <li>
                    Accessories or freebies not returned with the main item
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RefundPolicy;
