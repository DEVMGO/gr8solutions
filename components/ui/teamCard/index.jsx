import React from "react";
// import Image from "next/image";
// icons
import { FaLinkedinIn } from "react-icons/fa";
// image
import Img from "@/public/assets/images/team/team1.png";
import EmailIcon from "../icons/emailIcon";
import PhoneIcon from "../icons/phoneIcon";

const TeamCard = ({ data }) => {
  return (
    <div
      // style={{ background: `url(${image?.src})` }}
      className={`w-full 3xl:h-[538px] h-[448px] rounded-2xl overflow-hidden flex items-center justify-between flex-col relative ease-in-out transition-all duration-500 3xl:p-6 p-4 before:z-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/2 before:bg-opacity-60 before:bg-gradient-to-t before:from-gray-800 hover:before:from-white before:transition-all before:duration-500 before:ease-in-out group`}
    >
      <img src={data?.image?.src} alt={data?.name} className="absolute w-full h-full md:!object-cover !object-fill top-0 left-0" />
      <div className="w-full flex items-center justify-start z-20">
        <div className="3xl:w-12 w-10 3xl:h-12 h-10 rounded-full bg-black group-hover:bg-blueCF overflow-hidden flex items-center justify-center transition-all duration-300">
          <FaLinkedinIn className="text-white 3xl:text-2xl text-xl" />
        </div>
      </div>

      <div className="w-full flex items-start justify-center flex-col z-20">
        <h5 className="3xl:text-2xl md:text-xl text-sm text-white group-hover:text-blueCF font-medium transition-all duration-300">{data?.name}</h5>
        <h5 className="3xl:text-lg md:text-base text-sm text-white group-hover:text-blueCF font-medium transition-all duration-300">{data?.position}</h5>

        <div className="w-full flex items-start justify-center flex-col 3xl:mt-9 mt-7 gap-2 px-2">
            <div className="flex items-center justify-center 3xl:gap-5 gap-4">
                <PhoneIcon className="group-hover:[&>path]:stroke-blueCF transition-all duration-300 ease-in-out" /> <p className="3xl:text-lg text-base font-light text-white group-hover:text-blueCF transition-all duration-300">{data?.phone}</p>
            </div>
            <div className="flex items-center justify-center 3xl:gap-4 gap-3">
                <EmailIcon className="group-hover:[&>path]:stroke-blueCF transition-all duration-300 ease-in-out" /> <p className="3xl:text-lg text-base font-light text-white group-hover:text-blueCF transition-all duration-300">{data?.email}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

TeamCard.defaultProps = {
  name: "Emil Söderström",
  position: "VD-assistent",
  phone: "0693-2487624",
  email: "Emil@GR8solutions.se",
  image: Img,
};
