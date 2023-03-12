import React from "react";
import Image from "next/image";
// Components
import CardService from "./cardService";
// images
import Img1 from "@/public/assets/images/office_tjanster/office1.png";
import Img2 from "@/public/assets/images/office_tjanster/office2.png";
import Img3 from "@/public/assets/images/office_tjanster/office3.png";
// icons
import PrintingIcon from "@/components/ui/icons/office/printingIcon";
import DocumentIcon from "@/components/ui/icons/office/documentIcon";
import LogBookIcon from "@/components/ui/icons/office/logBookIcon";
import EmailIcon from "@/components/ui/icons/office/emailIcon";
import CalendarIcon from "@/components/ui/icons/office/calendarIcon";

const OfficeTjansterServices = () => {
  return (
    <div className="w-full flex items-start justify-start flex-col">
      <h3 className="3xl:text-2xl md:text-xl text-lg text-black font-medium">
        TJÄNSTER INOM OFFICE
      </h3>

      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 3xl:mt-24 md:mt-20 mt-14">
        <CardService
          icon={<PrintingIcon className="[&>path]:fill-blueCF" />}
          bigTitle="SKRIVARELÖSNINGAR"
          title="På det moderna, papperslösa kontoret, skrivs det ut mer än någonsin "
          description=" Det är kostsamt både för företaget och för miljön. Därför är det extra viktigt att ni på företaget tar kontroll över hur ni hanterar utskrifter. GR8 levererar inte bara den mest miljövänliga hårdvaran som sänker avfall och energiförbrukning, vi löser hela er skrivarstruktur, från behovsanalys till installation och support."
        />
        <CardService
          icon={<DocumentIcon className="[&>path]:fill-blueCF" />}
          bigTitle="DOKUMENTHANTERING "
          title="Effektiv hantering av dina viktiga dokument"
          description="Vi erbjuder professionella tjänster för dokumenthantering som hjälper dig att hålla ordning på dina dokument och data. Vi kan hjälpa dig med allt från skanning och indexering till lagring och säkerhetskopiering. Våra tjänster gör det enkelt för dig att hitta och dela information med dina medarbetare och kunder."
        />
        <div className="w-full rounded-[20px] overflow-hidden">
          <Image
            src={Img1}
            alt="telefoni"
            className="w-full h-full object-cover lg:block hidden"
          />
        </div>
        <div className="w-full rounded-[20px] overflow-hidden">
          <Image
            src={Img2}
            alt="telefoni"
            className="w-full h-full object-cover lg:block hidden"
          />
        </div>
        <CardService
          icon={<LogBookIcon className="[&>path]:fill-blueCF" />}
          bigTitle="ELEKTRONISKA KÖRJOURNALER"
          title="Öka effektiviteten med elektroniska körjournaler"
          description="Uppfyll skatteverkets dokumentationskrav, samtidigt som ni sparar både tid och pengar! Med elektroniska körjournaler registreras alla resor automatiskt med hjälp av en GPS-enhet installerat i fordonet. Automatisk tidsstyrning registrerar körningarna som tjänste- respektive privatresor.  Resans typ kan även ändras manuellt i efterhand."
        />
        <CardService
          icon={<EmailIcon className="[&>path]:fill-blueCF" />}
          bigTitle="E-POSTHANTERING"
          title="Säker lagring och enkel delning av information"
          description="Vår e-posthanteringstjänst hjälper dig att hålla kontroll över din inkorg och hantera e-postmeddelanden på ett effektivt sätt. Vi kan hjälpa dig med allt från konfigurering av e-postkonton till automatisk hantering av spam och skräppost."
        />
        <CardService
          icon={<CalendarIcon className="[&>path]:fill-blueCF" />}
          bigTitle="KALENDERHANTERING"
          title="Skanna och indexera för snabb återfinning"
          description="Vår kalenderhanteringstjänst hjälper dig att hålla koll på dina möten och schemaläggning på ett enkelt och smidigt sätt. Vi kan hjälpa dig med allt från att skapa och dela kalendrar till att hantera bokningar och påminnelser."
        />
        <div className="w-full rounded-[20px] overflow-hidden col-span-2 lg:block hidden">
          <Image
            src={Img3}
            alt="telefoni"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OfficeTjansterServices;
