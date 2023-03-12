import React from "react";
import Image from "next/image";
// images
import Img from "@/public/assets/images/blog/img1.png";
import ButtonBlack from "@/components/ui/buttons/buttonBlack";

const HeroDetailBlog = () => {
  return (
    <div className="w-full flex items-stretch justify-center lg:flex-row flex-col 3xl:gap-36 lg:gap-24 gap-12 3xl:mb-60 md:mb-48 mb-24 3xl:mt-32 md:mt-20 mt-12">
      <div className="lg:w-1/2 w-full lg:order-1 order-2 h-auto flex items-start justify-between flex-col">
        <div className="flex items-start justify-start flex-col 3xl:gap-7 gap-5">
          <h1 className="text-base font-light text-gray80">
            Informationsteknologi
          </h1>
          <p className="3xl:text-4xl md:text-2xl text-xl font-semibold text-black lg:mb-12 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="w-full flex items-center justify-start">
          <p className="3xl:text-2xl md:text-xl text-base text-gray80 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 w-full lg:order-2 order-1 h-auto flex items-end justify-start flex-col">
        <div className="3xl:w-[46.8rem] w-full 3xl:h-[23.6rem] md:h-[20rem] h-64 rounded-[20px] overflow-hidden">
          <Image
            src={Img}
            alt="gr8-solutions"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroDetailBlog;
