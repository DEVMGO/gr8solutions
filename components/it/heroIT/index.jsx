import React from "react";
import Image from "next/image";
// Components
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
// images
import Img from "@/public/assets/images/it/it.png";

const HeroIT = () => {
  return (
    <div className="w-full flex items-stretch justify-center lg:flex-row flex-col lg:gap-16 gap-0 3xl:mb-44 md:mb-36 mb-24 3xl:mt-32 md:mt-20 mt-12">
      <div className="lg:w-1/2 w-full h-auto flex items-end justify-start flex-col lg:mb-0 mb-4">
        <div className="3xl:w-[46.8rem] w-full md:h-full h-64 rounded-[20px] overflow-hidden">
          <Image
            src={Img}
            alt="gr8-solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-auto flex items-start justify-between flex-col 3xl:gap-0 gap-12">
        <div className="flex items-start justify-start flex-col">
          <h1 className="3xl:text-6xl md:text-4xl text-2xl font-medium text-black lg:block hidden 3xl:mb-7 mb-5">
            IT
          </h1>
          <p className="max-w-[40rem] 3xl:text-2xl text-lg font-light text-gray80 3xl:mb-12 mb-6">
            Vi har ett brett utbud av IT-tjänster, inklusive installation och
            drift av växlar, molnbaserad IT, IT-support och säkerhet. Vårt mål
            är att hjälpa företag att effektivisera deras IT-miljö, samt att
            skydda deras data och verksamhet mot cyberhot. Vår erfarna personal
            arbetar tätt med våra kunder för att säkerställa att deras IT-behov
            är tillfredsställda och att deras verksamhet kan köras så smidigt
            och säkert som möjligt.
          </p>
        </div>

        <div className="w-full flex items-center justify-start gap-5">
          <ButtonBlack link="/kontakta-oss" className="3xl:max-w-[14.8rem] md:max-w-[11rem] w-full 3xl:h-[4.5rem] lg:h-14 h-12 lg:rounded-2xl rounded-3xl 3xl:text-lg text-sm">
            KONTAKTA OSS
          </ButtonBlack>
        </div>
      </div>
    </div>
  );
};

export default HeroIT;
