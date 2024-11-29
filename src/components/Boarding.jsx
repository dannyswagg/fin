import React from "react";
import UserReg from "./Registration/UserReg";
import MerchantReg from "./Registration/MerchantReg";

const Boarding = () => {
  return (
    <>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Users"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <UserReg />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Merchants"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <MerchantReg />
        </div>
      </div>
    </>
  );
};

export default Boarding;
