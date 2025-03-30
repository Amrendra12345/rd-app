import Breadcrumd from "@/components/breadcrumd";
import SkeltonStaticPages from "@/components/skeltonStaticPages";
import CookiePolicyInfo from "@/components/staticPages/cookiePolicyInfo";

import React, { useEffect, useState } from "react";

const CookiePolicy = () => {
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
          <Breadcrumd pageName={"Cookie Policy"} />
          <CookiePolicyInfo />
        </>
      )}
    </>
  );
};

export default CookiePolicy;
