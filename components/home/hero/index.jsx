import React from "react";
import Image from "next/image";
// images
import Img from "@/public/assets/images/home/cover.png";
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
import ButtonWhite from "@/components/ui/buttons/buttonWhite";

const Hero = () => {
  return (
    <div className="w-full flex items-stretch justify-center lg:flex-row flex-col 3xl:mb-60 lg:mb-40 mb-24 3xl:gap-36 lg:gap-28">
      <div className="lg:w-1/2 w-full lg:order-1 order-2 h-auto flex items-start justify-between flex-col">
        <p className="text-2xl font-medium text-black 3xl:mb-16 mb-10 lg:block hidden">
          DIN HELHETSPARTNER INOM TELEFONI & IT
        </p>
        <div className="flex items-start justify-start flex-col 3xl:my-11 my-7">
          <div className="lg:flex items-start justify-start flex-col mb-5 hidden">
            <h1 className="3xl:text-9xl md:text-7xl text-4xl font-bold text-black">
              GR8
            </h1>
            <h1 className="3xl:text-9xl md:text-7xl text-4xl font-bold text-black">
              Solutions
            </h1>
          </div>
          <p className="max-w-[40rem] 3xl:text-2xl md:text-xl text-lg font-light text-gray80">
            Välkommen till GR8 Solutions, din lokala leverantör av IT och
            telekom. Vi är din dedikerade partner som levererar inom IT- &
            telefonitjänster.
          </p>
        </div>

        <div className="w-full flex items-center justify-start gap-5">
          <ButtonBlack className="3xl:max-w-[14.8rem] max-w-[11rem] 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm">
            KONTAKTA OSS
          </ButtonBlack>
          <ButtonWhite className="3xl:max-w-[14.8rem] max-w-[11rem] 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm">
            OM OSS
          </ButtonWhite>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:order-2 order-1 h-auto flex items-end justify-start flex-col">
        <div className="w-full flex items-start justify-center flex-col lg:hidden">
          <h1 className="3xl:text-9xl md:text-6xl text-4xl font-bold text-black">
            GR8 Solutions
          </h1>
          <p className="text-2xl font-medium text-black 3xl:mb-16 mb-10">
            DIN HELHETSPARTNER INOM TELEFONI & IT
          </p>
        </div>
        <div className="3xl:w-[43.1rem] w-full lg:h-full h-[16.3rem] rounded-[24px] overflow-hidden">
          <Image
            src={Img}
            alt="gr8-solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
