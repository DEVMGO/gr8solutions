import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const CardService = ({ data, index }) => {
  return (
    <div className="w-full flex items-stretch justify-center bg-lightblue rounded-[20px] 3xl:p-10 md:p-8 p-5 3xl:gap-10 gap-8">
      <div className="w-full h-full rounded-[20px] overflow-hidden lg:block hidden">
        <Image src={data?.image} alt={data?.title} className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full flex items-start justify-between flex-col">
        <div className="mb-7">{data?.icon}</div>
        <h3 className="3xl:text-2xl md:text-lg text-base font-medium text-black mb-4">
          {data?.title}
        </h3>
        <p className="3xl:text-base text-sm text-black font-light leading-6 md:mb-16 mb-12">
          {data?.description}
        </p>
        <Link href={data?.url ? data?.url : "#"}>
          <button className="3xl:text-lg text-base text-blueCF font-light flex items-center justify-center gap-4">
            Läs mer <HiArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardService;
