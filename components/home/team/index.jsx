import React from "react";
// icons
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
import TeamCard from "@/components/ui/teamCard";
import TeamSlider from "./sliderTeam";

const Team = () => {
  return (
    <div className="w-full flex items-start justify-center flex-col 3xl:my-24  mb-14 3xl:gap-24 md:gap-16 gap-8">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-start justify-center flex-col gap-6">
          <h4 className="3xl:text-6xl text-4xl font-medium text-black">TEAM</h4>
          <p className="3xl:text-2xl md:text-lg text-base font-light text-gray80 max-w-xl">
            Kontakta oss idag så hjälper vi dig komma fram till en skräddarsydd
            lösning.
          </p>
        </div>
        <ButtonBlack className="3xl:max-w-[237px] md:max-w-[180px] w-full 3xl:h-[72px] h-[55px] 3xl:!text-lg !text-sm !font-medium md:flex hidden">
          SE VÅRT TEAM
        </ButtonBlack>
      </div>
      <div className="w-full flex items-center justify-start relative">
        {/* <TeamCard /> */}
        <TeamSlider />
      </div>

      <ButtonBlack className="3xl:max-w-[237px] md:max-w-[180px] w-full 3xl:h-[72px] h-[55px] 3xl:!text-lg !text-sm !font-medium md:hidden flex">
        SE VÅRT TEAM
      </ButtonBlack>
    </div>
  );
};

export default Team;
