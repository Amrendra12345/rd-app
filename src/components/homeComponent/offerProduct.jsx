import Image from "next/image";
const OfferProucts = () => {
  return (
    <section className="offser">
      <div className="container p-6 md:p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-14 w-full">
          <div className="img-thumani">
            <Image
              src={"/img/laptop-adv3.jpg"}
              alt="laptop ads2"
              sizes="100vw"
              width={300}
              height={300}
              className="img-fluid"
            />
          </div>
          <div className="img-thumani">
            <Image
              src={"/img/laptop-adv2.jpg"}
              alt="laptop ads"
              sizes="100vw"
              width={300}
              height={300}
              className="img-fluid"
            />
          </div>
          <div className="img-thumani">
            <Image
              src={"/img/laptop-adv.jpg"}
              alt="laptop ads2"
              sizes="100vw"
              width={300}
              height={300}
              className="img-fluid"
            />
          </div>
          <div className="img-thumani">
            <Image
              src={"/img/laptop-adv1.jpg"}
              alt="laptop ads2"
              sizes="100vw"
              width={300}
              height={300}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferProucts;
