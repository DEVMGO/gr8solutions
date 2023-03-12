import React from "react";
import SliderCustomers from "./sliderCustomers";

const VaraKunder = () => {
  return (
    <div className="w-full flex items-center justify-start flex-col 3xl:mb-60 md:mb-40 mb-24">
      <div className="w-full flex items-center justify-start flex-col lg:gap-7 gap-4">
        <h5 className="md:text-2xl text-lg font-medium text-black">
          Våra kunder
        </h5>
        <h5 className="3xl:text-[40px] md:text-3xl text-2xl lg:font-semibold font-medium text-black">
          Vad våra kunder säger
        </h5>
      </div>

      <div className="w-full relative 3xl:mt-44 md:mt-32 mt-24">
        <SliderCustomers />
      </div>
    </div>
  );
};

export default VaraKunder;
