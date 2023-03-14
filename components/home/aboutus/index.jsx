import React from "react";
import Image from "next/image";
// Components
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
import ButtonWhite from "@/components/ui/buttons/buttonWhite";
// images
import Img from "@/public/assets/images/home/aboutus.jpg";

import { Slide } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="w-full flex items-stretch justify-between lg:flex-row flex-col lg:gap-16 gap-0 3xl:mb-64 md:mb-48 mb-24">
      <Slide className="w-full" triggerOnce>
        <div className="lg:w-full w-full h-auto flex items-start justify-start flex-col lg:mb-0 mb-4">
          <div className="3xl:w-[46.8rem] w-full md:h-full h-64 rounded-[20px] overflow-hidden">
            <Image
              src={Img}
              alt="gr8-solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Slide>
      <Slide delay={300} direction="right" className="w-full" triggerOnce>
        <div className="lg:w-full w-full h-auto flex items-start justify-between flex-col 3xl:gap-0 gap-12">
          <div className="flex items-start justify-start flex-col">
            <h1 className="3xl:text-6xl md:text-4xl text-2xl font-medium text-black lg:block hidden 3xl:mb-7 mb-5">
              OM OSS
            </h1>
            <p className="max-w-[40rem] 3xl:text-2xl text-lg font-light text-gray80 3xl:mb-12 mb-6">
              På GR8 Solutions är vi mer än bara en återförsäljare av
              telekomlösningar och IT. Vi vet att kommunikation och teknologi är
              avgörande för att skapa en framgångsrik verksamhet. Så vi strävar
              efter att erbjuda det senaste och bästa inom telefoni och
              IT-tjänster. Vi är här för att hjälpa dig att hålla ditt företag
              uppkopplat och kommunicera effektivt, så du kan fokusera på att
              göra det du gör bäst - att driva ditt företag.
            </p>
          </div>

          <div className="w-full flex items-center justify-start gap-5">
            <ButtonBlack className="3xl:max-w-[14.8rem] md:max-w-[11rem] w-full 3xl:h-[4.5rem] lg:h-14 h-12 lg:rounded-2xl rounded-3xl 3xl:text-lg text-sm">
              LÄS MER
            </ButtonBlack>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default AboutUs;
