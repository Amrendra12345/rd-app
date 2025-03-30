import Breadcrumd from "@/components/breadcrumd";
import SkeltonStaticPages from "@/components/skeltonStaticPages";
import PrivacyPolicyInfo from "@/components/staticPages/privacyPolicyInfo";
import React, { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      {loading ? (
        <SkeltonStaticPages />
      ) : (
        <>
          <Breadcrumd pageName={"Terms And Conditions"} />
          <PrivacyPolicyInfo />
        </>
      )}
    </>
  );
};

export default PrivacyPolicy;
