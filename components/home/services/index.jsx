import React from "react";
// Components
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
import CardServices from "./cardServices";
import UtökadTelefoni from "@/components/ui/icons/utökadTelefoni";
import Kommunikation from "@/components/ui/icons/kommunikation";
import ITTjänster from "@/components/ui/icons/iTTjänster";
import OfficeTjänster from "@/components/ui/icons/officeTjänster";
import Skrivarelösningar from "@/components/ui/icons/skrivarelösningar";
import GpsAndKörjournal from "@/components/ui/icons/gpsAndKörjournal";

import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <div className="w-full flex items-center justify-start flex-col 3xl:mb-80 md:mb-56 mb-24">
      <div className="w-full flex items-start justify-between 3xl:mb-24 md:mb-16 mb-14">
        <Fade triggerOnce>
          <div className="w-full flex items-start justify-center flex-col gap-7">
            <h4 className="3xl:text-6xl text-4xl font-medium text-blue44">
              TJÄNSTER
            </h4>
            <p className="3xl:text-2xl text-lg font-light max-w-2xl text-gray80">
              Med våra skräddarsydda och behovsanpassade lösningar gör vi det
              enkelt för dig att kommunicera på jobbet.
            </p>
          </div>
        </Fade>
        <Fade triggerOnce delay={250} direction="right">
          <ButtonBlack
            link="/tjanster"
            className="3xl:max-w-[16rem] 3xl:min-w-[16rem] max-w-[12rem] min-w-[12rem] md:flex hidden 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm"
          >
            SE VÅRA TJÄNSTER
          </ButtonBlack>
        </Fade>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        <Fade triggerOnce delay={500} className="h-full w-full">
          <CardServices
            icon={
              <UtökadTelefoni className="3xl:w-14 w-10 3xl:h-auto h-12 [&>path]:fill-blueCF" />
            }
            url="/telefoni"
            title="Utökad Telefoni"
            description="i erbjuder växlar och telefonilösningar för företag i alla storlekar. Vi ser till att växeln driftsätts, underhålls och fungerar exakt som önskat."
          />
        </Fade>
        <Fade triggerOnce delay={500} className="h-full w-full">
          <CardServices
            icon={
              <Kommunikation className="3xl:w-14 w-10 [&>path]:fill-blueCF" />
            }
            url="/kommunikation"
            title="Kommunikation"
            description="Vi arbetar med några av de ledande operatörerna i Sverige för att erbjuda det bästa alternativet för våra kunder."
          />
        </Fade>
        <Fade triggerOnce delay={500} className="h-full w-full">
          <CardServices
            icon={<ITTjänster className="3xl:w-14 w-10 [&>path]:fill-blueCF" />}
            url="/it"
            title="IT-tjänster"
            description="Vi samarbetar med företag som ser till att kundens IT är uppdaterad, molnbaserad och framför allt – säker!"
          />
        </Fade>
        <Fade triggerOnce delay={1000} className="h-full w-full">
          <CardServices
            icon={
              <OfficeTjänster className="3xl:w-14 w-10 [&>path]:fill-blueCF" />
            }
            url="/office-tjanster"
            title="Office-tjänster"
            description="Vi hjälper dig med allt som har med officepaketet att göra, så att din kommunikation fungerar på ett sammanhållande och effektivt sätt."
          />
        </Fade>
        <Fade triggerOnce delay={1000} className="h-full w-full">
          <CardServices
            icon={
              <Skrivarelösningar className="3xl:w-14 w-10 [&>path]:fill-blueCF" />
            }
            url="/office-tjanster"
            title="Skrivarelösningar"
            description="Vi byter ut, installerar och underhåller era maskiner, allt för att hitta den bästa lösningen till era behov."
          />
        </Fade>
        <Fade triggerOnce delay={1000} className="h-full w-full">
          <CardServices
            icon={
              <GpsAndKörjournal className="3xl:w-14 w-10 [&>path]:fill-blueCF" />
            }
            url="/office-tjanster"
            title="GPS & Körjournal"
            description="Öka effektiviteten med elektroniska körjournaler. Uppfyll skatteverkets dokumentationskrav, samtidigt som ni sparar både tid och pengar!"
          />
        </Fade>
      </div>
      <ButtonBlack
        link="/tjanster"
        className="w-full md:hidden flex h-12 text-lg rounded-3xl mt-12"
      >
        SE VÅRA TJÄNSTER
      </ButtonBlack>
    </div>
  );
};

export default Services;
