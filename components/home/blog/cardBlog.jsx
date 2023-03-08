import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from 'react-icons/hi';

const CardBlog = ({ data, index }) => {
  return (
    <div className="w-full max-w-[30.8rem] flex items-center justify-start flex-col">
      <div className="w-full 3xl:h-96 h-72 flex items-start justify-center 3xl:rounded-3xl rounded-2xl overflow-hidden mb-14">
        <Image src={data?.image} alt={data?.title} className="w-full h-full !object-cover" />
      </div>
      <div className="w-full flex items-start justify-center flex-col">
        <h4 className="3xl:text-base text-sm font-light text-gray80 mb-4">
          {data?.title}
        </h4>
        <p className="3xl:text-lg md:text-base text-sm font-medium text-black mb-10 text-justify">
          {data?.description}
        </p>
        <Link href={`${index}`}>
          <button className="flex items-center justify-center gap-2">Läs mer <HiArrowRight /></button>
        </Link>
      </div>
    </div>
  );
};

export default CardBlog;
