import React, { Fragment } from "react";
import Head from "next/head";
// Components
import CardBlog from "@/components/home/blog/cardBlog";
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
// images
import Img11 from "@/public/assets/images/blog/img1.png";
import Img12 from "@/public/assets/images/blog/img2.png";
import Img13 from "@/public/assets/images/blog/img3.png";
import Blog1 from "@/public/assets/images/blog/blog1.png";
import Blog2 from "@/public/assets/images/blog/blog2.png";
import Blog3 from "@/public/assets/images/blog/blog3.png";
import Blog4 from "@/public/assets/images/blog/blog4.png";
import Blog5 from "@/public/assets/images/blog/blog5.png";
import Blog6 from "@/public/assets/images/blog/blog6.png";
// icons
import { FiSearch } from "react-icons/fi";
import CardBlogTwo from "@/components/blogg/cardBlogtwo";

const Blogg = () => {
  const listBlog = [
    {
      title: "Webbutveckling",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Blog1,
    },
    {
      title: "Informationsteknologi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Blog2,
    },
    {
      title: "Teknologi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Blog3,
    },
    {
      title: "Programmering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Blog4,
    },
    {
      title: "Cloud",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Blog5,
    },
    {
      title: "Teknik",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Blog6,
    },
  ];
  return (
    <Fragment>
      <Head>
        <title>GR8 | Blogg</title>
      </Head>
      <div className="w-full flex items-center justify-between 3xl:mt-28 md:mt-16 mt-12">
        <h4 className="3xl:text-6xl md:text-4xl text-2xl text-black font-medium lg:block hidden">
          BLOGG
        </h4>
        <div className="lg:w-4/5 w-full flex items-center justify-end 3xl:gap-5 gap-3">
          <div className="w-full 3xl:max-w-[546px] max-w-md 3xl:h-[4.5rem] md:h-14 h-12 bg-lightblue rounded-[20px] flex items-center justify-start 3xl:gap-7 md:gap-5 gap-3 3xl:p-7 md:p-5 p-3">
            <FiSearch className="text-gray-400 md:text-2xl text-base" />
            <input
              type="text"
              placeholder="Skriv här ..."
              className="w-full h-full bg-transparent font-light 3xl:text-lg md:text-base text-sm text-gray-400 outline-none"
            />
          </div>
          <ButtonBlack className="3xl:max-w-[11.6rem] md:max-w-[9rem] max-w-[3rem] 3xl:h-[4.5rem] md:h-14 h-12 3xl:!text-lg !text-base">
            <span className="md:block hidden">SÖK</span>
            <FiSearch className="text-gray-400 md:text-2xl text-base md:hidden block" />
          </ButtonBlack>
        </div>
      </div>

      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 3xl:mt-24 mt-16">
        <CardBlog
          image={Img11}
          title="IT"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi."
          link="#"
        />
        <CardBlog
          image={Img12}
          title="Teknik"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi."
          link="#"
        />
        <CardBlog
          image={Img13}
          title="Programmering"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi."
          link="#"
        />
      </div>

      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4 3xl:mt-24 md:mt-16 mt-11">
        {listBlog?.map((item, index) => (
          <CardBlogTwo key={index} data={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default Blogg;

Blogg.layout = "L1";
