import React from "react";
// components
import ButtonBlue from "@/components/ui/buttons/buttonBlue";
// images
import Img from "@/public/assets/images/home/job.png";
// icons
import { FaLinkedinIn } from "react-icons/fa";
import InstagramIcon from "@/components/ui/icons/instagramIcon";
import FaceBookIcon from "@/components/ui/icons/faceBookIcon";
import LinkedinIcon from "@/components/ui/icons/linkedinIcon";
import { Slide } from "react-awesome-reveal";

const Professional = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col 3xl:mb-60 md:mb-40 mb-24">
      <Slide
        triggerOnce
        delay={300}
        className="w-full flex items-start justify-center flex-col"
      >
        <h4 className="3xl:text-6xl md:text-5xl text-4xl font-medium text-blue44 mb-7">
          KARRIÄR
        </h4>
        <p className="3xl:text-2xl md:text-xl text-lg font-light text-gray80 max-w-2xl 3xl:mb-24 md:mb-14 mb-4">
          Vi söker ständigt efter passionerade och ambitiösa säljare som vill
          ansluta till vårt team. Om du brinner för teknologi och kommunikation,
          och vill arbeta med företagsförsäljning, så är detta jobbet för dig!
        </p>
      </Slide>
      <Slide triggerOnce className="w-full">
        <div
          style={{ background: `url(${Img?.src})` }}
          className="w-full md:h-[426px] h-[510px] flex items-start justify-start flex-col !bg-no-repeat !bg-cover 3xl:p-10 md:p-8 p-6 rounded-3xl relative before:z-10 before:absolute before:bottom-0 before:left-0 before:w-full before:h-full before:bg-opacity-80 before:bg-gradient-to-r before:from-gray-800 overflow-hidden"
        >
          <div className="lg:w-1/2 w-full md:h-full h-auto max-w-2xl flex items-start justify-center flex-col mb-8 z-20 gap-4">
            <h4 className="3xl:text-6xl md:text-4xl text-2xl font-bold text-white">
              BLI EN DEL AV VÅRT FANTASTISKA TEAM
            </h4>
            <p className="3xl:text-2xl md:text-xl text-lg font-medium text-white 3xl:mb-14 md:mb-10">
              Vår största resurs är våra medarbetare och det är där vi
              investerar mest.
            </p>
          </div>
          <div className="w-full md:h-auto h-full flex md:items-center items-start justify-between md:flex-row flex-col-reverse z-20">
            <ButtonBlue className="md:max-w-[237px] 3xl:h-[72px] md:h-16 h-12">
              KARRIÄR
            </ButtonBlue>
            <div className="flex items-center justify-end gap-5">
              <div className="3xl:w-12 w-10 3xl:h-12 h-10 rounded-full overflow-hidden flex items-center justify-center">
                {/* <FaLinkedinIn className="text-transparent 3xl:text-2xl text-xl" /> */}
                <InstagramIcon />
              </div>
              <div className="3xl:w-12 w-10 3xl:h-12 h-10 rounded-full overflow-hidden flex items-center justify-center">
                {/* <FaLinkedinIn className="text-transparent 3xl:text-2xl text-xl" /> */}
                <FaceBookIcon />
              </div>
              <div className="3xl:w-12 w-10 3xl:h-12 h-10 rounded-full overflow-hidden flex items-center justify-center">
                {/* <FaLinkedinIn className="text-transparent 3xl:text-2xl text-xl" /> */}
                <LinkedinIcon />
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Professional;
