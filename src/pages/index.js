import FeatureProduct from "@/components/homeComponent/feature-product";
import Hero from "@/components/homeComponent/hero";
import OfferProucts from "@/components/homeComponent/offerProduct";
import Support from "@/components/homeComponent/support";
import { getCommonData } from "@/servers/lib-rd/ravi1";
import { withSessionSsr } from "@/servers/lib-rd/session";

export default function Home() {
  return (
    <>
      <Hero />
      <Support />
      <OfferProucts />
      <FeatureProduct />
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
