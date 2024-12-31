import Link from "next/link";
import React from "react";

const Breadcrumd = (prop) => {
  return (
    <div
      className="flex items-center justify-start w-full h-28 bg-no-repeat bg-center  bg-cover before:content-[''] before:absolute before:bg-black/30 before:h-28 before:w-full"
      style={{ backgroundImage: `url("/img/breadcrumb.jpg" )` }}
    >
      <div className="container">
        <ul className="flex justify-start items-center gap-4">
          <li>
            <Link href={"/"} className="text-white text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/product-list"} className="text-white text-xl">
              {prop.pageName}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumd;
