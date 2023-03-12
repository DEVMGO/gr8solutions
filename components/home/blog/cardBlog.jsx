import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

const CardBlog = ({ data, image, title, description, link, index }) => {
  return (
    <div className="w-full max-w-[30.8rem] flex items-center justify-start flex-col">
      <div className="w-full 3xl:h-96 md:h-72 h-44 flex items-start justify-center 3xl:rounded-3xl rounded-2xl overflow-hidden md:mb-14 mb-12">
        <Image
          src={image ? image : data?.image}
          alt={title ? title : data?.title}
          className="w-full h-full !object-cover"
        />
      </div>
      <div className="w-full flex items-start justify-center flex-col">
        <h4 className="text-base font-light text-gray80 mb-4">
          {title ? title : data?.title}
        </h4>
        <p className="3xl:text-lg md:text-base text-sm font-medium text-black mb-10 text-justify line-clamp-2">
          {description ? description : data?.description}
          {/* {data?.description < 20 ? data?.description : `${data?.description.slice(0, 20)}...`} */}
        </p>
        <Link href={`${link ? link : index}`}>
          <button className="flex items-center justify-center gap-2 text-blueCF 3xl:text-lg md:text-base text-sm font-light">
            Läs mer <HiArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardBlog;
