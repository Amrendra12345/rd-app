import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FeatureProduct from "./feature-product";
import NewProduct from "./new-product";
import BestProduct from "./best-product";
const MuilTabs = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <section className="featureProduct pt-24 pb-10">
        <div className="container">
          <h3 className="text-2xl font-bold uppercase text-center mb-0">
            Feature Product
          </h3>
          <div className="text-center mb-4 flex justify-center">
            <Tabs
              value={value}
              onChange={(e, v) => setValue(v)}
              aria-label="example tabs"
            >
              <Tab label="New Products" />
              <Tab label="Feature Products" />
              <Tab label="Best Products" />
            </Tabs>
          </div>
          <div className="content">
            {value === 0 && <NewProduct />}
            {value === 1 && <FeatureProduct />}
            {value === 2 && <BestProduct />}
          </div>
        </div>
      </section>
    </>
  );
};
export default MuilTabs;
