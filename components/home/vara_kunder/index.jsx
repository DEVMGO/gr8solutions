import React from "react";
import SliderCustomers from "./sliderCustomers";
import { Zoom } from "react-awesome-reveal";

const VaraKunder = () => {
  return (
    <div className="w-full flex items-center justify-start flex-col md:mb-0 mb-24">
      <Zoom triggerOnce className="w-full flex md:items-center items-start justify-start flex-col lg:gap-7 gap-4">
        <h5 className="md:text-2xl text-lg font-medium text-black">
          Våra kunder
        </h5>
        <h5 className="3xl:text-[40px] md:text-3xl text-2xl lg:font-semibold font-medium text-black">
          Vad våra kunder säger
        </h5>
      </Zoom>

      <div className="w-full relative 3xl:mt-44 md:mt-32 mt-24">
        <SliderCustomers />
      </div>
    </div>
  );
};

export default VaraKunder;
