import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";

const CardBlogTwo = ({ data, image, title, description, link, index }) => {
  return (
    <div className="w-full flex items-center justify-start gap-3">
      <div className="w-full max-w-[247px] min-w-[11rem] 3xl:h-60 md:h-52 h-44 flex items-start justify-center 3xl:rounded-3xl rounded-2xl overflow-hidden">
        <Image
          src={image ? image : data?.image}
          alt={title ? title : data?.title}
          className="w-full h-full !object-cover"
        />
      </div>
      <div className="w-full h-full flex items-start justify-start flex-col">
        <h4 className="text-base font-light text-gray80 mb-4">
          {title ? title : data?.title}
        </h4>
        <p className="3xl:text-lg md:text-base text-sm font-medium text-black mb-10 text-justify line-clamp-2">
          {description ? description : data?.description}
        </p>
        <Link href={`${link ? link : index}`}>
          <button className="flex items-center justify-center gap-2 text-blueCF 3xl:text-lg md:text-base text-sm font-light">
            Läs mer <HiArrowRight />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CardBlogTwo