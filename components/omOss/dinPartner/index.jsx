import React from "react";
import Image from "next/image";
// images
import Img from "@/public/assets/images/omoss/omoss3.png";
// icon
import PartnerIcon from "@/components/ui/icons/omoss/partnerIcon";

const DinPartner = () => {
  return (
    <div className="w-full flex items-stretch justify-between lg:flex-row flex-col gap-4 3xl:mb-60 md:mb-48 mb-24">
      <div className="lg:w-1/2 w-full lg:order-1 order-2 h-auto flex items-start justify-between flex-col">
        <div className="w-full 3xl:max-w-2xl max-w-xl flex items-start justify-start flex-col 3xl:gap-7 gap-4">
          <PartnerIcon />
          <h1 className="3xl:text-2xl text-lg font-medium text-black">
            DIN PARTNER FÖR SKRÄDDARSYDDA IT & TELEKOMLÖSNINGAR
          </h1>
          <p className="max-w-[40rem] 3xl:text-base md:text-sm text-lg font-light text-gray80 leading-7">
            Vårt team består av erfarna och passionerade individer som brinner
            för att hjälpa företag att växa med hjälp av våra tjänster. Vi är
            alltid angelägna om att hålla oss uppdaterade med de senaste
            teknologierna och trenderna i branschen för att kunna erbjuda
            konkurrenskraftiga lösningar. Vi är dedikerade till att leverera
            högsta kvalitet och personlig service för varje kund.
          </p>
          <p className="max-w-[40rem] 3xl:text-base md:text-sm text-lg font-light text-gray80 leading-7">
            GR8 Solutions är ett företag som startades med målet att erbjuda
            kvalitativa IT- och telekomtjänster till företag i Sverige. Vi är
            stolta över vårt arbete och våra resultat och vi ser fram emot att
            fortsätta att växa och utvecklas tillsammans med våra kunder. Låt
            oss vara din partner på din företagsresa och hjälpa dig att ta ditt
            företag till nästa nivå!
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:order-2 order-1 h-auto flex items-end justify-start flex-col">
        <div className="3xl:w-[46.8rem] w-full md:h-full h-64 rounded-[20px] overflow-hidden lg:mb-0 mb-14">
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

export default DinPartner;
