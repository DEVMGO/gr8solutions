import React, { Fragment } from "react";
import Head from "next/head";
// Components
import Hero from "@/components/om-oss/hero";
import WelcomeToGr8 from "@/components/om-oss/welcomeToGr8";
import DinPartner from "@/components/om-oss/dinPartner";

const OmOssPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Om oss | GR8 Solutions</title>
        <meta
          name="description"
          content="På GR8 Solutions är vi mer än bara en leverantör av IT och telekomlösningar. Vi är en partner för företag som vill skapa ett starkt och konkurrenskraftigt företag."
        />
      </Head>
      <Hero />
      <WelcomeToGr8 />
      <DinPartner />
    </Fragment>
  );
};

export default OmOssPage;

OmOssPage.layout = "L1";
