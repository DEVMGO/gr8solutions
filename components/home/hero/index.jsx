import React from "react";
import Image from "next/image";
// images
import Img from "@/public/assets/images/home/cover.png";
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
import ButtonWhite from "@/components/ui/buttons/buttonWhite";

import { Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="w-full flex items-stretch justify-center lg:flex-row flex-col 3xl:mb-60 lg:mb-40 mb-24 3xl:gap-36 lg:gap-28">
      <div className="lg:w-1/2 w-full lg:order-1 order-2 h-auto flex items-start justify-between flex-col">
        <Slide triggerOnce className="w-full">
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

          <div className="w-full flex items-center md:justify-start justify-center gap-5">
            <ButtonBlack
              link="kontakta-oss"
              className="3xl:max-w-[14.8rem] max-w-[11rem] 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm 3xl:min-w-[14.8rem] md:min-w-[11rem] min-w-[9rem]"
            >
              KONTAKTA OSS
            </ButtonBlack>
            <ButtonWhite
              link="om-oss"
              className="3xl:max-w-[14.8rem] max-w-[11rem] 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm 3xl:min-w-[14.8rem] md:min-w-[11rem] min-w-[9rem]"
            >
              OM OSS
            </ButtonWhite>
          </div>
        </Slide>
      </div>

      <div className="lg:w-1/2 w-full lg:order-2 order-1 h-auto flex items-end justify-start flex-col">
        <Slide direction="right" delay={350} triggerOnce className="w-full">
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
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
