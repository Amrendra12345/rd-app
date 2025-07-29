import { getFilters } from "@/servers/lib-reown/lib";
import { useEffect, useState } from "react";
import { BsLaptop, BsXLg } from "react-icons/bs";
import { FaSlidersH } from "react-icons/fa";
import { SkeletonDemo } from "./SkeletonDemo";

const AsideFilter = (props) => {
  const [filters, setFilters] = useState([]);
  const [isLoding, setIsLoding] = useState(false);
  const [isAsideFilter, setIsAsideFilter] = useState(false);
  useEffect(() => {
    const getFiltersResp = async () => {
      setIsLoding(true);
      const filtersResp = await getFilters();
      if (filtersResp.status === 200) {
        setFilters(filtersResp.data.filters);
        setIsLoding(false);
      }
    };
    getFiltersResp();
  }, []);
  const handleBrandChange = (event, value) => {
    props.applyBrandFilters(value, event.target.checked ? "add" : "remove");
  };
  const handleProcessorChange = (event, value) => {
    props.applyProcessorFilters(value, event.target.checked ? "add" : "remove");
  };
  console.log(props.isAsideFilter, "");
  return (
    <>
      <div className="w-full bg-gray-100 rounded relative">
        <div className="px-6 py-4 border-b border-gray-300">
          <button
            onClick={() => props.handleFilterClick(false)}
            type="button"
            className="flex justify-between items-center w-full"
          >
            <span className="font-semibold text-gray-700 uppercase">
              Filter
            </span>
            <span className="hidden md:block">
              <FaSlidersH />
            </span>
            <span className="md:hidden hover:text-red-600 text-xl text-gray-700">
              <BsXLg />
            </span>
          </button>
        </div>
        <div className="px-6 py-4 relative asideBrand">
          <p className="flex justify-between items-center">
            <span className="text-[15px] text-gray-600">Brand</span>
            <span className="text-blue-900">
              <BsLaptop />
            </span>
          </p>
          <ul className="mt-2 asideBrand_ul">
            {isLoding
              ? "Please wait..."
              : Array.isArray(filters.brands) && filters.brands.length > 0
              ? filters.brands.map((brand) => {
                  return (
                    <li key={brand.product_make} className="py-2">
                      <div className="flex item- gap-2 center justify-start">
                        <input
                          className="w-[14px] h-[14px] mt-[3px] rounded-none border-gray-300 "
                          id={brand.product_make}
                          type="checkbox"
                          value=""
                          onChange={(e) =>
                            handleBrandChange(e, brand.product_make)
                          }
                        />
                        <label
                          className="leading-normal text-gray-600 text-sm"
                          htmlFor={brand.product_make}
                        >
                          {" "}
                          {brand.product_make}{" "}
                        </label>
                      </div>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
      <div className="w-full bg-gray-100 rounded mt-4 relative">
        <div className="px-6 py-4 relative asideBrand">
          <p className="flex justify-between items-center">
            <span className="text-[15px] text-gray-600">Processors</span>
            <span className="text-blue-900">
              <BsLaptop />
            </span>
          </p>
          <ul className="mt-2">
            {Array.isArray(filters.processors) && filters.processors.length > 0
              ? filters.processors.map((processor) => {
                  return (
                    <li key={processor.processor} className="py-2">
                      <div className="flex item- gap-2 center justify-start">
                        <input
                          className="w-[14px] h-[14px] mt-[3px] border-gray-300 "
                          id={processor.processor}
                          type="checkbox"
                          value=""
                          onChange={(e) =>
                            handleProcessorChange(e, processor.processor)
                          }
                        />
                        <label
                          className="leading-normal text-gray-500 text-[14px]"
                          htmlFor={processor.processor}
                        >
                          {" "}
                          {processor.processor}{" "}
                        </label>
                      </div>
                    </li>
                  );
                })
              : ""}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AsideFilter;
