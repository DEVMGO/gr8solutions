import React from "react";
import Image from "next/image";
// Components
import CardService from "./cardService";
// images
import Img1 from "@/public/assets/images/it/it1.png";
import Img2 from "@/public/assets/images/it/it2.png";
import Img3 from "@/public/assets/images/it/it3.png";
// icons
import SecurityIcon from "@/components/ui/icons/it/securityIcon";
import CloudBasedIcon from "@/components/ui/icons/it/cloudBasedIcon";
import SupportIcon from "@/components/ui/icons/it/supportIcon";
import SwitcheIcon from "@/components/ui/icons/it/switcheIcon";

const ITServices = () => {
  return (
    <div className="w-full flex items-start justify-start flex-col">
      <h3 className="3xl:text-2xl md:text-xl text-lg text-black font-medium">
        TJÄNSTER INOM IT
      </h3>

      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 3xl:mt-24 md:mt-20 mt-14">
        <CardService
          icon={<SecurityIcon className="[&>path]:fill-blueCF" />}
          bigTitle="SÄKERHET"
          title="Skydda din data och ditt företag mot cyberhot"
          description="Våra branschkunniga partners hjälper dig att sätta upp brandväggar och antivirusprogram, samt att utbilda dina anställda i säkerhet och goda datavetenskapsvanor. Vi ser till att ditt företag är skyddat mot olika typer av cyberhot, så att du kan känna dig trygg i att dina data är säkra."
        />
        <div className="w-full rounded-[20px] overflow-hidden lg:block hidden">
          <Image
            src={Img1}
            alt="telefoni"
            className="w-full h-full object-cover"
          />
        </div>
        <CardService
          icon={<CloudBasedIcon className="[&>path]:fill-blueCF" />}
          bigTitle="MOLNBASERAD IT"
          title="Uppdaterad, säker och tillgänglig IT för ditt företag"
          description="GR8 Solutions hjälper dig att migrera till en molnbaserad IT-miljö. Det innebär att dina data och program lagras och körs på externa servrar som är lättåtkomliga från alla dina enheter. Detta ger dig en högre flexibilitet och tillgänglighet, samtidigt som det gör din IT mer säker och enkel att hantera."
        />
        <div className="w-full rounded-[20px] overflow-hidden col-span-2 lg:block hidden">
          <Image
            src={Img2}
            alt="telefoni"
            className="w-full h-full object-cover"
          />
        </div>
        <CardService
          icon={<SupportIcon className="[&>path]:fill-blueCF" />}
          bigTitle="IT-SUPPORT"
          title="Snabb och professionell hjälp när det behövs"
          description="GR8 Solutions erbjuder IT-support för ditt företag. Vi har ett team av erfarna tekniker som kan hjälpa dig med allt från enkla problemlösningar till mer avancerade frågor. Vårt mål är att hjälpa dig att hålla din IT igång så att du kan fokusera på att driva ditt företag."
        />
        <div className="w-full rounded-[20px] overflow-hidden col-span-2 lg:block hidden">
          <Image
            src={Img3}
            alt="telefoni"
            className="w-full h-full object-cover"
          />
        </div>
        <CardService
          icon={<SwitcheIcon className="[&>path]:fill-blueCF" />}
          bigTitle="VÄXLAR OCH TELEFONI"
          title="Enkel och effektiv kommunikation för ditt företag"
          description="GR8 Solutions erbjuder installation och drift av växlar för ditt företag. Vi ser till att växeln är anpassad efter dina specifika behov och att den fungerar exakt som önskat. Vi samarbetar även med ledande operatörer för att erbjuda dig ett brett utbud av telefonitjänster."
        />
      </div>
    </div>
  );
};

export default ITServices;
