import React, { Fragment } from "react";
import Head from "next/head";
// Components
import Hero from "@/components/omOss/hero";
import WelcomeToGr8 from "@/components/omOss/welcomeToGr8";
import DinPartner from "@/components/omOss/dinPartner";

const OmOssPage = () => {
  return (
    <Fragment>
      <Head>
        <title>GR8 | OM OSS</title>
      </Head>
      <Hero />
      <WelcomeToGr8 />
      <DinPartner />
    </Fragment>
  );
};

export default OmOssPage;

OmOssPage.layout = "L1";
