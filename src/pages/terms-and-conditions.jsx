import Breadcrumd from "@/components/breadcrumd";
import SkeltonStaticPages from "@/components/skeltonStaticPages";
import TermsInfo from "@/components/staticPages/termsInfo";
import { useEffect, useState } from "react";

const TermsAndConditions = () => {
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
          <TermsInfo />
        </>
      )}
    </>
  );
};

export default TermsAndConditions;
