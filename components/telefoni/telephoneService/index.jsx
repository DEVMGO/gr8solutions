import React from "react";
import Image from "next/image";
// Components
import CardService from "./cardService";
// images
import Img2 from "@/public/assets/images/telefoni/telefoni2.png";
import Img3 from "@/public/assets/images/telefoni/telefoni3.png";
// icons
import VerifiIcon from "@/components/ui/icons/telefoni/verifiIcon";
import RemoteIcon from "@/components/ui/icons/telefoni/remoteIcon";
import InternationalIcon from "@/components/ui/icons/telefoni/internationalIcon";
import CloudBasedIcon from "@/components/ui/icons/telefoni/cloudBasedIcon";
import TeleohoneServiceIcon from "@/components/ui/icons/telefoni/teleohoneServiceIcon";

const TelephoneService = () => {
  return (
    <div className="w-full flex items-start justify-start flex-col">
      <h3 className="3xl:text-2xl md:text-xl text-lg text-black font-medium">
        TJÄNSTER INOM TELEFONI
      </h3>

      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 3xl:mt-24 md:mt-20 mt-14">
        <CardService
          icon={<VerifiIcon className="[&>path]:fill-blueCF" />}
          title="BankID-verifiering"
          description="BankID-verifiering gör det möjligt för dig att verifiera identiteten hos dina kunder och medarbetare via ett enkelt samtal. Detta gör det enklare att hålla kontakten med dina kunder och samarbeta med dina medarbetare på ett säkert sätt. Vår tjänst är integrerad med BankID, så det går att verifiera identiteten via ett samtal. Det gör det enkelt och säkert för dig och dina kunder, och det förhindrar obehöriga personer att få tillgång till dina känsliga uppgifter."
        />
        <CardService
          icon={<RemoteIcon className="[&>path]:fill-blueCF" />}
          title="FJÄRRSTYRNING AV TELEFONER"
          description="Fjärrstyrning av telefoner gör det möjligt för oss att hjälpa dig med felsökning och support på distans. Vi kan även erbjuda integrering med dina befintliga verktyg som CRM och e-post för att förenkla din kommunikation och samarbete."
        />
        <CardService
          icon={<InternationalIcon className="[&>path]:fill-blueCF" />}
          title="INTERNATIONELLA NUMMER"
          description="Vi erbjuder professionella telefonnummer med olika landskoder för att göra det enkelt för kunder att nå dig oavsett var de befinner sig i världen. Detta ökar möjligheten för dig att nå ut till nya marknader och expandera din verksamhet."
        />

        <div className="w-full rounded-[20px] overflow-hidden col-span-3 lg:block hidden">
          <Image
            src={Img2}
            alt="telefoni"
            className="w-full h-full object-cover"
          />
        </div>

        <CardService
          icon={<CloudBasedIcon className="[&>path]:fill-blueCF" />}
          title="MOLNBASERAD TELEFONVÄXEL"
          description="Vårt molnbaserade telefonväxelsystem gör det enkelt för dig att hantera samtal, överföringar och konferenssamtal från vilken enhet som helst. Med vår mobilapp kan du även ta emot och göra samtal när du inte är på kontoret. Vår automatiska köhantering låter dig hantera flera samtal samtidigt utan att någon går miste om ett samtal."
        />
        <div className="w-full rounded-[20px] overflow-hidden">
          <Image
            src={Img3}
            alt="telefoni"
            className="w-full h-full object-cover lg:block hidden"
          />
        </div>
        <CardService
          icon={<TeleohoneServiceIcon className="[&>path]:fill-blueCF" />}
          title="TELEFONSVARARTJÄNSTER"
          description="Med telefonsvarstjänst kan du skapa professionella hälsningsmeddelanden och ange olika röstmeddelanden för olika tider på dagen och veckodagar. Detta gör det möjligt för dig att svara på samtal när du inte är tillgänglig och hålla kontakten med dina kunder även utanför kontorstid."
        />
      </div>
    </div>
  );
};

export default TelephoneService;
