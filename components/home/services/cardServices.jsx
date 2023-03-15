import React from "react";
import Link from "next/link";
// icons
import { HiOutlineArrowRight } from "react-icons/hi";
import UtökadTelefoni from "@/components/ui/icons/utökadTelefoni";

const CardServices = ({ icon, title, description }) => {
  return (
    <div className="w-full h-full bg-lightblue bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 rounded-3xl 3xl:px-12 px-6 3xl:py-11 py-7 flex items-start justify-between flex-col gap-4">
      <div className="flex items-end justify-center">{icon}</div>
      <h3 className="3xl:text-2xl text-base font-medium text-black">{title}</h3>
      <p className="3xl:text-base text-sm text-black font-light">{description}</p>

      <Link href="#">
        <button className="3xl:text-lg text-sm font-light text-blueCF flex items-center justify-center gap-2">
          Läs mer <HiOutlineArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default CardServices;

CardServices.defaultProps = {
  icon: <UtökadTelefoni />,
  title: "Utökad Telefoni",
  description:
    "i erbjuder växlar och telefonilösningar för företag i alla storlekar. Vi ser till att växeln driftsätts, underhålls och fungerar exakt som önskat.",
};
