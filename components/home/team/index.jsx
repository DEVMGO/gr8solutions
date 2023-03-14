import React from "react";
// icons
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
import TeamCard from "@/components/ui/teamCard";
import TeamSlider from "./sliderTeam";
import { Slide } from "react-awesome-reveal";

const Team = () => {
  return (
    <div className="w-full flex items-start justify-center flex-col 3xl:mb-60 md:mb-40 mb-24 3xl:gap-24 md:gap-16 gap-8">
      <div className="w-full flex items-start justify-between 3xl:mb-24 md:mb-16 mb-14">
        <Slide triggerOnce>
          <div className="w-full flex items-start justify-start flex-col gap-7">
            <h4 className="3xl:text-6xl text-4xl font-medium text-blue44">
              TEAM
            </h4>
            <p className="3xl:text-2xl text-lg font-light max-w-2xl text-gray80">
              Kontakta oss idag så hjälper vi dig komma fram till en
              skräddarsydd lösning.
            </p>
          </div>
        </Slide>
        <Slide triggerOnce direction="right" delay={300}>
          <ButtonBlack className="3xl:max-w-[16rem] 3xl:min-w-[16rem] max-w-[12rem] min-w-[12rem] md:block hidden 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm">
            SE VÅRT TEAM
          </ButtonBlack>
        </Slide>
      </div>

      <div className="w-full flex items-center justify-start relative">
        <TeamSlider />
      </div>

      <ButtonBlack className="w-full md:hidden block h-12 text-lg rounded-3xl mt-12">
        SE VÅRT TEAM
      </ButtonBlack>
    </div>
  );
};

export default Team;
