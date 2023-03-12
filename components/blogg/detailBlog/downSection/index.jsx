import React from "react";
import Image from "next/image";
import CardBlogTwo from "../../cardBlogtwo";
import Img from "@/public/assets/images/blog/img7.png";
import Img2 from "@/public/assets/images/blog/img8.png";
import { HiArrowRight } from "react-icons/hi";

const DownSection = () => {
  const listBlog = [
    {
      image: Img,
      title: "Teknologi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
    },
    {
      image: Img,
      title: "Informations",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
    },
    {
      image: Img,
      title: "Programmering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
    },
    {
      image: Img,
      title: "Programmering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
    },
  ];
  return (
    <div className="w-full flex items-start justify-between">
      <div className="w-full flex items-start justify-start flex-col 3xl:pr-16 lg:pr-12 pr-0 3xl:gap-6 gap-4">
        <h4 className="3xl:text-2xl md:text-xl text-lg text-black font-medium">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h4>
        <p className="3xl:text-2xl md:text-xl text-base text-gray80 font-light">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <Image src={Img2} alt="test2" className="3xl:my-24 my-16 rounded-2xl w-full 3xl:h-96 md:h-72 h-64" />
      </div>

      <div className="w-1/2 lg:flex hidden items-start justify-start flex-col border-l border-gray-400 3xl:pl-16 pl-12 gap-4">
        <h5 className="3xl:text-4xl text-2xl font-semibold text-black 3xl:mb-12 mb-9">
          Andra blogginlägg
        </h5>
        <div className="w-full flex items-start justify-center flex-col">
          <Image
            src={Img}
            alt="test"
            className="w-full 3xl:h-56 h-44 rounded-2xl"
          />
          <h4 className="text-base font-light text-gray80 3xl:mt-14 mt-10">
            Informations
          </h4>
          <p className="text-lg text-black font-medium line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi.
          </p>
          <button className="flex items-center justify-center gap-2 text-blueCF 3xl:text-lg md:text-base text-sm font-light">
            Läs mer <HiArrowRight />
          </button>
        </div>
        {listBlog?.map((item, index) => (
          <CardBlogTwo key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default DownSection;
