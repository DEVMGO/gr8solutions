import React, { Fragment } from "react";
import Head from "next/head";
// Components
import HeroServices from "@/components/tjanster/heroServices";
import ListServices from "@/components/tjanster/listSevices";

const Tjanster = () => {
  return (
    <Fragment>
      <Head>
        <title>Tjänster | GR8 Solutions</title>
        <meta name="description" content="GR8 Solutions erbjuder ett brett utbud av IT- och telekomtjänster för att hjälpa ditt företag att hålla sig uppkopplade och kommunicera effektivt." />
      </Head>
      <HeroServices />
      <ListServices />
    </Fragment>
  );
};

export default Tjanster;

Tjanster.layout = "L1";
