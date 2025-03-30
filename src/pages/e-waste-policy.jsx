import Breadcrumd from "@/components/breadcrumd";
import SkeltonStaticPages from "@/components/skeltonStaticPages";
import EWastePolicyInfo from "@/components/staticPages/eWastePolicyInfo";

import React, { useEffect, useState } from "react";

const EwastePolicy = () => {
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
          <Breadcrumd pageName={"E-Waste Policy"} />
          <EWastePolicyInfo />
        </>
      )}
    </>
  );
};

export default EwastePolicy;
