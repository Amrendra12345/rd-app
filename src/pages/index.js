import Hero from "@/components/homeComponent/hero";
import MuilTabs from "@/components/homeComponent/muilTabs";
import OfferProucts from "@/components/homeComponent/offerProduct";
import PartnerBrand from "@/components/homeComponent/partnerbrand";
import Support from "@/components/homeComponent/support";
import WhyBuy from "@/components/homeComponent/whyBuy";
import { getCommonData } from "@/servers/lib-rd/ravi1";
import { withSessionSsr } from "@/servers/lib-rd/session";

export default function Home() {
  return (
    <>
      <Hero />
      <Support />
      <OfferProucts />
      <MuilTabs />
      <WhyBuy />
      <PartnerBrand />
    </>
  );
}
export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const data = [
      { data_name: "view-counter" },
      { data_name: "view-categories", city: "Noida" },
      { data_name: "view-categories", city: "Noida" },
    ];
    const result = await getCommonData(req, data);
    // console.log(result.data);
    return {
      props: {},
    };
  }
);
