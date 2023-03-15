import React from "react";
import Image from "next/image";
// images
import Img from "@/public/assets/images/omoss/omoss1.png";
import ButtonBlack from "@/components/ui/buttons/buttonBlack";

const Hero = () => {
  return (
    <div className="w-full flex items-stretch justify-center lg:flex-row flex-col gap-4 3xl:mb-60 md:mb-48 mb-24 3xl:mt-32 md:mt-20 mt-12">
      <div className="lg:w-1/2 w-full lg:order-1 order-2 h-auto flex items-start justify-between flex-col">
        <div className="flex items-start justify-start flex-col 3xl:gap-7 gap-5">
          <h1 className="3xl:text-9xl text-7xl font-bold text-black lg:block hidden">OM OSS</h1>
          <p className="max-w-[40rem] 3xl:text-2xl text-lg font-light text-gray80 mb-12">
            På GR8 Solutions är vi mer än bara en leverantör av IT och
            telekomlösningar. Vi är en partner för företag som vill skapa ett
            starkt och konkurrenskraftigt företag.
          </p>
        </div>

        <div className="w-full flex items-center justify-start gap-5">
          <ButtonBlack link="/kontakta-oss" className="3xl:max-w-[14.8rem] lg:max-w-[11rem] w-full 3xl:h-[4.5rem] lg:h-14 h-12 lg:rounded-2xl rounded-3xl 3xl:text-lg text-sm">
            KONTAKTA OSS
          </ButtonBlack>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:order-2 order-1 h-auto flex items-end justify-start flex-col">
        <div className="3xl:w-[46.8rem] w-full 3xl:h-[23.6rem] md:h-[20rem] h-64 rounded-[20px] overflow-hidden">
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
