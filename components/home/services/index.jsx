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

const Services = () => {
  return (
    <div className="w-full flex items-center justify-start flex-col 3xl:mb-80 md:mb-56 mb-24">
      <div className="w-full flex items-start justify-between 3xl:mb-24 md:mb-16 mb-14">
        <div className="w-full flex items-start justify-center flex-col gap-7">
          <h4 className="3xl:text-6xl text-4xl font-medium">TJÄNSTER</h4>
          <p className="3xl:text-2xl text-lg font-light max-w-2xl">
            Med våra skräddarsydda och behovsanpassade lösningar gör vi det
            enkelt för dig att kommunicera på jobbet.
          </p>
        </div>
        <ButtonBlack className="3xl:max-w-[16rem] max-w-[12rem] md:block hidden 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm">
          SE VÅRA TJÄNSTER
        </ButtonBlack>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        <CardServices
          icon={<UtökadTelefoni className="3xl:w-14 w-10 3xl:h-auto h-12 [&>path]:fill-blueCF" />}
        />
        <CardServices icon={<Kommunikation className="3xl:w-14 w-10 [&>path]:fill-blueCF" />} />
        <CardServices icon={<ITTjänster className="3xl:w-14 w-10 [&>path]:fill-blueCF" />} />
        <CardServices icon={<OfficeTjänster className="3xl:w-14 w-10 [&>path]:fill-blueCF" />} />
        <CardServices icon={<Skrivarelösningar className="3xl:w-14 w-10 [&>path]:fill-blueCF" />} />
        <CardServices icon={<GpsAndKörjournal className="3xl:w-14 w-10 [&>path]:fill-blueCF" />} />
      </div>
      <ButtonBlack className="w-full md:hidden block h-12 text-lg rounded-3xl mt-12">
        SE VÅRA TJÄNSTER
      </ButtonBlack>
    </div>
  );
};

export default Services;
