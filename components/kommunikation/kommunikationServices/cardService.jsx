import React from "react";

const CardService = ({ icon, bigTitle, title, description }) => {
  return (
    <div className="w-full flex items-stretch justify-center bg-lightblue rounded-[20px] 3xl:p-20 md:p-12 p-5">
      <div className="w-full h-full flex items-start justify-start flex-col">
        <div className="mb-7">{icon}</div>
        <h2 className="3xl:text-xl md:text-lg text-base font-semibold text-black">
          {bigTitle}
        </h2>
        <h3 className="3xl:text-lg md:text-base text-sm font-medium text-black mb-4">
          {title}
        </h3>
        <p className="3xl:text-base text-sm text-black font-light leading-6">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardService;
