import React, { Fragment } from "react";
import Head from "next/head";
// Components
import HeroServices from "@/components/Vara_Tjanster/heroServices";
import ListServices from "@/components/Vara_Tjanster/listSevices";

const Vara_Tjanster = () => {
  return (
    <Fragment>
      <Head>
        <title>GR8 | VÅRA TJÄNSTER</title>
      </Head>
      <HeroServices />
      <ListServices />
    </Fragment>
  );
};

export default Vara_Tjanster;

Vara_Tjanster.layout = "L1";
