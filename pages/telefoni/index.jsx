import React, { Fragment } from "react";
// Components
import HeroTelefoni from "@/components/telefoni/heroTelefoni";
import TelephoneService from "@/components/telefoni/telephoneService";

const Telefoni = () => {
  return (
    <Fragment>
      <HeroTelefoni />
      <TelephoneService />
      <div className="w-full flex items-center justify-start 3xl:mt-24 md:mt-16 mt-14">
        <p className="max-w-5xl 3xl:text-2xl sm:text-xl text-lg text-gray80 font-light">
          Vi strävar efter att leverera personlig service och vi arbetar tätt
          med våra kunder för att förstå deras unika behov och utveckla
          lösningar som passar dem perfekt. Kontakta oss idag för att höra mer
          om våra tjänster inom företagstelefoni och hur vi kan hjälpa dig att
          hålla kontakten med dina kunder och samarbeta med dina medarbetare.
        </p>
      </div>
    </Fragment>
  );
};

export default Telefoni;

Telefoni.layout = "L1";
