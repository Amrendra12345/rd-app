import Breadcrumd from "@/components/breadcrumd";
import SkeltonStaticPages from "@/components/skeltonStaticPages";
import { useEffect, useState } from "react";

const WarrantyPolicy = () => {
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
          <Breadcrumd pageName={"Warranty Policy"} />
          <div className="container mt-5">
            <div className="flex justify-center my-8">
              <h1 className="font-bold text-xl text-gray-800">
                Warranty Policy
              </h1>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  At <strong>REOWN</strong>, we stand behind the quality of our
                  refurbished gadgets. Every product you purchase from us is
                  backed by a warranty to ensure your peace of mind.
                </p>
                <ol className="mt-4 list-inside list-disc">
                  <p className="mb-0">
                    <strong>Warranty Coverage</strong>
                  </p>
                  <p>
                    All refurbished products come with a standard 6-month
                    warranty from the date of delivery. This warranty covers:
                  </p>
                  <li>Hardware malfunctions</li>
                  <li>
                    Battery issues (if battery health is below acceptable
                    levels)
                  </li>
                  <li>Functional defects not caused by user damage</li>
                </ol>
                <p className="mb-0">
                  <strong> What&#39;s Not Covered </strong>
                </p>
                <ol className="mt-0 list-inside list-disc">
                  <p className="text-sm text-gray-600 mt-0">
                    The warranty does not cover:
                  </p>
                  <li className="py-0">
                    Accidental damage (drops, spills, cracks)
                  </li>
                  <li className="py-0">Water damage</li>
                  <li>Cosmetic wear and tear (scratches, dents)</li>
                  <li>Unauthorized repairs or modifications</li>
                  <li>Software issues not related to hardware</li>
                </ol>
                <ol className="mt-4 list-inside list-disc">
                  <p>
                    <strong> Replacement & Repair </strong>
                  </p>
                  <p>
                    If your product develops a fault within the warranty period:
                  </p>
                  <li>
                    Contact our support team with your order ID and issue
                    details.
                  </li>
                  <li>We’ll arrange for a free pickup and inspection.</li>
                  <p>If the issue is covered, we’ll either:</p>
                  <li>Repair the product at no cost, or</li>
                  <li>
                    Replace it with an equivalent model (subject to
                    availability)
                  </li>
                </ol>
                <ol className="mt-4 list-inside list-disc">
                  <p>
                    <strong> Return Shipping </strong>
                  </p>
                  <p>
                    We cover return shipping for warranty claims within the
                    first 6 months.
                  </p>
                  <p>
                    If the issue is not covered, return shipping and repair
                    costs may apply.
                  </p>
                </ol>
                <ol className="mt-4 list-inside list-disc">
                  <p>
                    <strong>Extended Warranty</strong>
                  </p>
                  <p>
                    Some products may be eligible for an extended warranty at
                    checkout. Details will be provided on the product page.
                  </p>
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WarrantyPolicy;
