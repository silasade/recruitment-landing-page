import React from "react";
import LimitedAccess from "./LimitedAccess";
import Benefits from "./Benefits";
import Form from "./Form";

function LimitedAvailabSectionindex() {
 
  return (
    <div
      className="flex flex-col gap-8 p-[20px] md:p-[60px] "
    >
        
      <h2 className="font-[400] text-[36px] md:text-[48px] text-[#E3E8F3]">
        Limited Availability - Register now to join wait List
      </h2>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="flex flex-col gap-6 w-full lg:w-2/4">
          <LimitedAccess />
          <Benefits />
        </div>
        <div className="w-full lg:w-2/4 ">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default LimitedAvailabSectionindex;
