import React from "react";
// Components
import CardService from "./cardService";
// images
import Img2 from "@/public/assets/images/services/services2.png";
import Img3 from "@/public/assets/images/services/services3.png";
import Img4 from "@/public/assets/images/services/services4.png";
import Img5 from "@/public/assets/images/services/services5.png";
import Img6 from "@/public/assets/images/services/services6.png";
import Img7 from "@/public/assets/images/services/services7.png";
// icons
import TelefoniIcon from "@/components/ui/icons/services/telefoniIcon";
import ConnectIcon from "@/components/ui/icons/services/connectIcon";
import ItIcon from "@/components/ui/icons/services/itIcon";
import OfficeIcon from "@/components/ui/icons/services/officeIcon";
import PrinterIcon from "@/components/ui/icons/services/printerIcon";
import GpsIcon from "@/components/ui/icons/services/gpsIcon";

const ListServices = () => {
  const listItems = [
    {
      image: Img2,
      icon: <TelefoniIcon className="[&>path]:fill-blueCF" />,
      title: "Telefoni",
      description:
        "Vi erbjuder växlar och telefonilösningar för företag av alla storlekar. Vi ser till att växeln är på plats och fungerar exakt som önskat.",
      url: "#",
    },
    {
      image: Img3,
      icon: <ConnectIcon className="[&>path]:fill-blueCF" />,
      title: "Kommunikation",
      description:
        "Vi arbetar med några av de ledande operatörerna i Sverige för att erbjuda det bästa alternativet för våra kunder.",
      url: "#",
    },
    {
      image: Img4,
      icon: <ItIcon className="[&>path]:fill-blueCF" />,
      title: "IT-tjänster",
      description:
        "Vi samarbetar med företag som ser till att kundens IT är uppdaterad, molnbaserad och framförallt säker.",
      url: "#",
    },
    {
      image: Img5,
      icon: <OfficeIcon className="[&>path]:fill-blueCF" />,
      title: "Office-tjänster",
      description:
        "Vi hjälper dig med allt som har med officepaketet att göra, så att din kommunikation fungerar på ett sammanhållande och effektivt sätt.",
      url: "#",
    },
    {
      image: Img6,
      icon: <PrinterIcon className="[&>path]:fill-blueCF" />,
      title: "Skrivarelösningar",
      description:
        "Skrivarelösningar: Vi byter ut, installerar och underhåller era maskiner, allt för att hitta den bästa lösningen till era behov.",
      url: "#",
    },
    {
      image: Img7,
      icon: <GpsIcon className="[&>path]:fill-blueCF" />,
      title: "GPS & Körjournal",
      description:
        "GPS & Körjournal: Öka effektiviteten med elektroniska körjournaler. Uppfyll skatteverkets dokumentationskrav, samtidigt som ni sparar både tid och pengar!",
      url: "#",
    },
  ];
  return (
    <div className="w-full flex items-start justify-start flex-col">
      <h3 className="3xl:text-2xl md:text-xl text-lg text-black font-medium">
        Våra tjänster inkluderar
      </h3>

      <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-5 3xl:mt-24 md:mt-20 mt-14">
        {listItems?.map((item, index) => (
          <CardService data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ListServices;
