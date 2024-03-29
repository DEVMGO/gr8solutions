import React, { Fragment } from "react";
import Head from "next/head";
// Components
import KommunikationServices from "@/components/kommunikation/kommunikationServices";
import HeroKommunikation from "@/components/kommunikation/herokommunikation";

const Kommunikation = () => {
  return (
    <Fragment>
      <Head>
        <title>Kommunikation | GR8 Solutions</title>
        <meta
          name="description"
          content="Vi erbjuder ett brett utbud av lösningar för att hjälpa dig hålla kontakten med dina kunder och kommunicera effektivt med dina medarbetare. Från telefoni till e-post, chatt och videokonferens, vi har det du behöver för att skapa en smidig och effektiv kommunikation."
        />
      </Head>
      <HeroKommunikation />
      <KommunikationServices />
      <div className="w-full flex items-center justify-start 3xl:mt-24 md:mt-16 mt-14">
        <p className="max-w-5xl 3xl:text-2xl sm:text-xl text-lg text-gray80 font-light">
          Vi strävar efter att leverera personlig service och vi arbetar tätt
          med våra kunder för att förstå deras unika behov och utveckla
          lösningar som passar dem perfekt. Kontakta oss idag för att höra mer
          om våra tjänster inom IT och hur vi kan hjälpa dig att hålla kontakten
          med dina kunder och samarbeta med dina medarbetare.
        </p>
      </div>
    </Fragment>
  );
};

export default Kommunikation;

Kommunikation.layout = "L1";
