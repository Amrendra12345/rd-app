import Breadcrumd from "@/components/breadcrumd";
import SkeltonStaticPages from "@/components/skeltonStaticPages";
import TermsOfUseInfo from "@/components/staticPages/termsOfUseInfo";
import React, { useEffect, useState } from "react";

const TermsOfUse = () => {
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
          <Breadcrumd pageName={"Terms of Use"} />
          <TermsOfUseInfo />
        </>
      )}
    </>
  );
};

export default TermsOfUse;
