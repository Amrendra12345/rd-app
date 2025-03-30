import React, { useState } from "react";

const Tooltip = ({ message, children }, props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="relative flex flex-col items-center group">
      <span
        className="flex justify-center"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </span>
      <div
        className={`absolute whitespace-nowrap bottom-[45px] transition-all duration-300 flex flex-col items-center  group-hover:flex ${
          !show ? "hidden" : null
        }`}
      >
        <span className="relative z-10 p-2  text-xs leading-none text-white whitespace-no-wrap bg-gray-900 shadow-[-10px_1px_23px_4px_rgba(0,_0,_0,_0.1)] rounded-0">
          {message}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-gray-900" />
      </div>
    </div>
  );
};

export default Tooltip;
