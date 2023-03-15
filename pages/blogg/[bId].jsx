import React, { Fragment } from "react";
import Head from "next/head";
// Components
import HeroDetailBlog from "@/components/blogg/detailBlog/heroDetailBlog";
import DownSection from "@/components/blogg/detailBlog/downSection";

const DetailBlog = () => {
  return (
    <Fragment>
      <Head>
        <title>Blogg | GR8 Solutions</title>
      </Head>
      <HeroDetailBlog />
      <DownSection />
    </Fragment>
  );
};

export default DetailBlog;
DetailBlog.layout = "L1";
