import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const QuickView = ({ closePopup, laptopDetails }) => {
  const [isActive, setIsctive] = useState(false);
  const [indexImg, setIndexImg] = useState(0);
  const handleClose = () => {
    closePopup();
  };
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const handleSmallImg = (e, index) => {
    //console.log(index);
    setIndexImg(index);
  };
  console.log(
    Array.isArray(laptopDetails.images) &&
      laptopDetails.images.length >= 0 &&
      laptopDetails?.images[0]
  );
  return (
    <div className="fixed z-[999] top-0 left-0 w-screen h-screen bg-black/30 flex justify-center items-center overflow-hidden">
      <div className="w-[850px] h-[650px] bg-white rounded shadow">
        <div className="flex justify-between items-center px-6 py-3">
          <p>Quickview</p>
          <IoClose onClick={handleClose} />
        </div>
        <div className="flex justify-start items-start gap-4 p-6">
          <div className="flex-shrink-0 w-1/2 h-[450px] bg-gray-100 rounded relative flex justify-center items-center p-2">
            <Image
              src={
                Array.isArray(laptopDetails.images) &&
                laptopDetails.images.length >= 0 &&
                laptopDetails?.images[indexImg]
              }
              sizes="30vw"
              className="img-fluid"
              width={450}
              height={300}
              priority
              alt="img"
              style={{ objectFit: "contain", mixBlendMode: "multiply " }}
            />
          </div>
          <div className="">
            <p>{laptopDetails.product_title}</p>
            <div className="flex justify-start items-center gap-10">
              <div className="flex gap-1 text-green-600">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm text-gray-500">4 Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 px-6">
          {Array.isArray(laptopDetails.images) &&
            laptopDetails.images.length > 0 &&
            laptopDetails.images.map((img, i) => {
              return (
                <div key={i} onClick={(e) => handleSmallImg(e, i)}>
                  <Image
                    src={img}
                    alt={img}
                    width={50}
                    height={30}
                    className="img-fluid"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default QuickView;
