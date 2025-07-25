import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="w-full h-[calc(100vh-120px)] flex gap-20 items-center bg-no-repeat bg-cover bg-center object-cover rounded"
            style={{ backgroundImage: `url('/img/slider_bg.jpg')` }}
          >
            <div className="h-24 w-1/2 flex justify-end items-center">
              <Image
                src={"/img/apple.png"}
                alt="apple-laptop"
                sizes="100vw"
                width={400}
                height={300}
                className="img-fluid"
                priority
              />
            </div>
            <div className="caption h-auto w-1/2 flex justify-start items-center flex-col">
              <h1 className="text-2xl font-bold uppercase text-slate-800">
                Power Meets Portability
              </h1>
              <h2 className="text-lg font-semibold  text-slate-800 my-4">
                Explore top-rated laptops for work, play, and everything in
                between.
              </h2>
              <Link
                href={"/product"}
                className="mt-3 uppercase text-white bg-teal-600 rounded-full py-3 px-8"
              >
                Shop Laptops
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[calc(100vh-120px)] flex gap-20 items-center bg-no-repeat bg-cover bg-center object-cover rounded"
            style={{ backgroundImage: `url('/img/slider_bg.jpg')` }}
          >
            <div className="h-24 w-1/2 flex justify-end items-center">
              <Image
                src={"/img/apple2.png"}
                alt="apple-laptop"
                sizes="100vw"
                width={400}
                height={300}
                className="img-fluid"
                priority
              />
            </div>
            <div className="caption h-auto w-1/2 flex justify-start items-center flex-col">
              <h1 className="text-2xl font-bold uppercase text-slate-800">
                Your Next Upgrade Awaits
              </h1>
              <h2 className="text-lg font-semibold  text-slate-800 my-4">
                Discover refurbished smartphones at unbeatable prices.
              </h2>
              <Link
                href={"/product"}
                className="mt-3 uppercase text-white bg-teal-600 rounded-full py-3 px-8"
              >
                Browse Mobiles
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[calc(100vh-120px)] flex gap-20 items-center bg-no-repeat bg-cover bg-center object-cover rounded"
            style={{ backgroundImage: `url('/img/slider_bg.jpg')` }}
          >
            <div className="h-24 w-1/2 flex justify-end items-center">
              <Image
                src={"/img/apple3.png"}
                alt="apple-laptop"
                sizes="100vw"
                width={400}
                height={300}
                className="img-fluid"
              />
            </div>
            <div className="caption h-auto w-1/2 flex justify-start items-center flex-col">
              <h1 className="text-2xl font-bold uppercase text-slate-800">
                Gear Up with the Best Tech
              </h1>
              <h2 className="text-lg font-semibold  text-slate-800 my-4">
                From smartwatches to earbuds — find the gadgets that fit your
                lifestyle.
              </h2>
              <Link
                href={"/product"}
                className="mt-3 uppercase text-white bg-teal-600 rounded-full py-3 px-8"
              >
                Explore Gadgets
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
