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
    <div className="w-full flex items-center justify-start flex-col">
      <div className="w-full flex items-start justify-between mb-24">
        <div className="flex items-start justify-center flex-col gap-7">
          <h4 className="3xl:text-6xl text-4xl font-medium">TJÄNSTER</h4>
          <p className="3xl:text-2xl text-lg font-light max-w-2xl">
            Med våra skräddarsydda och behovsanpassade lösningar gör vi det
            enkelt för dig att kommunicera på jobbet.
          </p>
        </div>
        <ButtonBlack className="3xl:max-w-[16rem] max-w-[12rem] 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm">
          SE VÅRA TJÄNSTER
        </ButtonBlack>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        <CardServices icon={<UtökadTelefoni className="3xl:w-14 w-10 3xl:h-auto h-12 " />} />
        <CardServices icon={<Kommunikation className="3xl:w-14 w-10" />} />
        <CardServices icon={<ITTjänster className="3xl:w-14 w-10" />} />
        <CardServices icon={<OfficeTjänster className="3xl:w-14 w-10" />} />
        <CardServices icon={<Skrivarelösningar className="3xl:w-14 w-10" />} />
        <CardServices icon={<GpsAndKörjournal className="3xl:w-14 w-10" />} />
      </div>
    </div>
  );
};

export default Services;
