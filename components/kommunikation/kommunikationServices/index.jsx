import React from "react";
import Image from "next/image";
// Components
import CardService from "./cardService";
// images
import Img1 from "@/public/assets/images/kommunikation/kommunikation1.png";
import Img2 from "@/public/assets/images/kommunikation/kommunikation2.png";
// icons
import MeetingIcon from "@/components/ui/icons/kommunikation/meetingIcon";
import SwitcheIcon from "@/components/ui/icons/kommunikation/switcheIcon";
import MobileIcon from "@/components/ui/icons/kommunikation/mobileIcon";
import SolutionsIcon from "@/components/ui/icons/kommunikation/solutionsIcon";

const ITServices = () => {
  return (
    <div className="w-full flex items-start justify-start flex-col">
      <h3 className="3xl:text-2xl md:text-xl text-lg text-black font-medium">
        TJÄNSTER INOM IT
      </h3>

      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 3xl:mt-24 md:mt-20 mt-14">
        <div className="w-full rounded-[20px] overflow-hidden lg:block hidden col-span-2">
          <Image
            src={Img1}
            alt="telefoni"
            className="w-full h-full object-cover"
          />
        </div>
        <CardService
          icon={<MeetingIcon />}
          bigTitle="MÖTESLÖSNINGAR"
          title="Smidiga och professionella möten med hjälp av teknik"
          description="GR8 Solutions erbjuder möteslösningar för ditt företag. Vi hjälper dig att skapa smidiga och professionella möten med hjälp av teknik som videokonferens och digitala whiteboard. Detta gör det möjligt för ditt företag att hålla kontakten med kunder och medarbetare, oavsett var de befinner sig."
        />
        <CardService
          icon={<SwitcheIcon />}
          bigTitle="VÄXLAR OCH KOMMUNIKATION"
          title="Enkel och effektiv kommunikation för ditt företag"
          description="GR8 Solutions erbjuder installation och drift av växlar för ditt företag. Vi ser till att växeln är anpassad efter dina specifika behov och att den fungerar exakt som önskat. Vi samarbetar även med ledande operatörer för att erbjuda dig ett brett utbud av telefonitjänster, inklusive fasta och mobiltelefoni. Detta gör det enkelt för ditt företag att kommunicera med kunder och medarbetare."
        />
        <CardService
          icon={<MobileIcon />}
          bigTitle="MOBILKOMMUNIKATION"
          title="Flexibilitet och tillgänglighet för ditt företag"
          description="GR8 Solutions erbjuder mobilkommunikationstjänster för ditt företag. Vi samarbetar med ledande operatörer för att erbjuda dig ett brett utbud av tjänster, inklusive mobiltelefoni, mobila data- och molnbaserade tjänster. Detta ger ditt företag flexibilitet och tillgänglighet, så att du kan kommunicera med dina kunder och medarbetare när som helst och var som helst."
        />
        <CardService
          icon={<SolutionsIcon />}
          bigTitle="KOMMUNIKATIONSLÖSNINGAR"
          title="Integrerade lösningar för effektiv kommunikation"
          description="GR8 Solutions erbjuder integrerade kommunikationslösningar för ditt företag. Vi hjälper dig att sammankoppla olika kommunikationskanaler som telefoni, e-post, chatt och videokonferens, för att skapa en enkel och effektiv kommunikationsmiljö. Detta gör det lättare för ditt företag att kommunicera med kunder och medarbetare, oavsett var de befinner sig."
        />
        <div className="w-full rounded-[20px] overflow-hidden col-span-3 lg:block hidden">
          <Image
            src={Img2}
            alt="telefoni"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ITServices;
