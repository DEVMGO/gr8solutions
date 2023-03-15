import React, { Fragment } from "react";
import Head from "next/head";
// Components
import HeroServices from "@/components/tjanster/heroServices";
import ListServices from "@/components/tjanster/listSevices";

const tjanster = () => {
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

export default tjanster;

tjanster.layout = "L1";
