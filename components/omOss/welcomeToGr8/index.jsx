import React from "react";
import Image from "next/image";
// images
import Img from "@/public/assets/images/omoss/omoss2.png";
// icon
import IconWelcome from "@/components/ui/icons/omoss/welcome";

const WelcomeToGr8 = () => {
  return (
    <div className="w-full flex items-stretch justify-between lg:flex-row flex-col gap-4 3xl:mb-60 md:mb-48 mb-24">
      <div className="lg:w-1/2 w-full h-auto flex items-start justify-start flex-col">
        <div className="3xl:w-[43.8rem] lg:w-11/12 w-full md:h-full h-64 rounded-[20px] overflow-hidden lg:mb-0 mb-14">
          <Image
            src={Img}
            alt="gr8-solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="lg:w-1/2 w-full h-auto flex items-start justify-between flex-col">
        <div className="flex items-start justify-start flex-col 3xl:gap-7 gap-4">
          <IconWelcome className="[&>path]:fill-blueCF" />
          <h1 className="3xl:text-2xl text-lg font-medium text-black">
            VÄLKOMMEN TILL GR8 SOLUTIONS
          </h1>
          <p className="max-w-[40rem] 3xl:text-base  md:text-sm text-lg font-light text-gray80 leading-7">
            På GR8 Solutions är vi mer än bara en leverantör av IT och
            telekomlösningar. Vårt erfarna och passionerade team arbetar nära
            med varje kund för att förstå deras unika behov och skräddarsy
            lösningar som hjälper dem att växa och utvecklas. Vi är stolta över
            att arbeta med några av de ledande operatörerna i Sverige för att
            erbjuda det bästa alternativet för våra kunder.
          </p>
          <p className="max-w-[40rem] 3xl:text-base  md:text-sm text-lg font-light text-gray80 leading-7">
            Vi vet att kommunikation och teknologi är avgörande för att skapa en
            framgångsrik verksamhet. Så vi strävar efter att erbjuda det senaste
            och bästa inom telefoni och IT-tjänster. Vi erbjuder växlar och
            telefonilösningar för företag av alla storlekar och samarbetar med
            företag som ser till att kundens IT är uppdaterad, molnbaserad och
            framför allt säker. Vi är här för att hjälpa dig att hålla ditt
            företag uppkopplat och kommunicera effektivt, så du kan fokusera på
            att göra det du gör bäst - att driva ditt företag.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeToGr8;
