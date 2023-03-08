import React from "react";
import Image from "next/image";
// images
import Img from "@/public/assets/images/home/cover.png";
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
import ButtonWhite from "@/components/ui/buttons/buttonWhite";

const Hero = () => {
  return (
    <div className="w-full flex items-stretch justify-center mb-60">
      <div className="w-1/2 h-auto flex items-start justify-between flex-col">
        <p className="3xl:text-2xl text-lg font-medium text-black 3xl:mb-16 mb-10">
          DIN HELHETSPARTNER INOM TELEFONI & IT
        </p>
        <div className="flex items-start justify-start flex-col 3xl:my-11 my-7">
          <div className="flex items-start justify-start flex-col mb-5">
            <h1 className="3xl:text-9xl text-7xl font-bold text-black">GR8</h1>
            <h1 className="3xl:text-9xl text-7xl font-bold text-black">Solutions</h1>
          </div>
          <p className="max-w-[40rem] 3xl:text-2xl text-lg font-light text-gray80">
            Välkommen till GR8 Solutions, din lokala leverantör av IT och
            telekom. Vi är din dedikerade partner som levererar inom IT- &
            telefonitjänster.
          </p>
        </div>

        <div className="w-full flex items-center justify-start gap-5">
          <ButtonBlack className="3xl:max-w-[14.8rem] max-w-[11rem] 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm">KONTAKTA OSS</ButtonBlack>
          <ButtonWhite className="3xl:max-w-[14.8rem] max-w-[11rem] 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm">OM OSS</ButtonWhite>
        </div>
      </div>
      <div className="w-1/2 h-auto flex items-end justify-start flex-col">
        <div className="3xl:w-[46.8rem] w-[34.8rem] 3xl:h-[43rem] h-[31rem] rounded-[24px] overflow-hidden">
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
