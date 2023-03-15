import React, { Fragment } from "react";
import Head from "next/head";
// Components
import TeamCard from "@/components/ui/teamCard";
// images
import Img1 from "@/public/assets/images/team/team1.png";
import Img2 from "@/public/assets/images/team/team2.png";
import Img3 from "@/public/assets/images/team/team3.png";
import Img4 from "@/public/assets/images/team/team4.png";
import Img5 from "@/public/assets/images/team/team5.png";
import Img6 from "@/public/assets/images/team/team6.png";
import Img7 from "@/public/assets/images/team/team7.png";
import Img8 from "@/public/assets/images/team/team8.png";
import Img9 from "@/public/assets/images/team/team10.png";
import Img10 from "@/public/assets/images/team/team9.png";
import Img11 from "@/public/assets/images/team/team11.png";
import Img12 from "@/public/assets/images/team/team12.png";
import Img13 from "@/public/assets/images/team/team13.png";
import Img14 from "@/public/assets/images/team/team14.png";
import Img15 from "@/public/assets/images/team/team15.png";
import Img16 from "@/public/assets/images/team/team16.png";

const Team = () => {
  const listTeam = [
    {
      name: "Emil Söderström",
      position: "VD",
      phone: "0693-2487624",
      email: "Emil@GR8solutions.se",
      image: Img1,
    },
    {
      name: "Caroline Eriksson",
      position: "VD-assistent",
      phone: "0680-5987275",
      email: "Caroline@GR8solutions.se",
      image: Img2,
    },
    {
      name: "Rayan Björklund",
      position: "CTO",
      phone: "023-9287419",
      email: "Rayan@GR8solutions.se",
      image: Img3,
    },
    {
      name: "Maya Gustafsson",
      position: "HR-Chef",
      phone: "0642-4313558",
      email: "Maya@GR8solutions.se",
      image: Img4,
    },
    {
      name: "Emil Söderström",
      position: "Konsult",
      phone: "0693-2487624",
      email: "Emil@GR8solutions.se",
      image: Img5,
    },
    {
      name: "Caroline Eriksson",
      position: "Säljchef",
      phone: "0680-5987275",
      email: "Caroline@GR8solutions.se",
      image: Img6,
    },
    {
      name: "Rayan Björklund",
      position: "Team Leader",
      phone: "023-9287419",
      email: "Rayan@GR8solutions.se",
      image: Img7,
    },
    {
      name: "Maya Gustafsson",
      position: "Team Leader",
      phone: "0642-4313558",
      email: "Maya@GR8solutions.se",
      image: Img8,
    },
    {
      name: "Emil Söderström",
      position: "Account Manager",
      phone: "0693-2487624",
      email: "Emil@GR8solutions.se",
      image: Img10,
    },
    {
      name: "Caroline Eriksson",
      position: "Account Manager",
      phone: "0680-5987275",
      email: "Caroline@GR8solutions.se",
      image: Img9,
    },
    {
      name: "Rayan Björklund",
      position: "Account Manager",
      phone: "023-9287419",
      email: "Rayan@GR8solutions.se",
      image: Img11,
    },
    {
      name: "Maya Gustafsson",
      position: "Account Manager",
      phone: "0642-4313558",
      email: "Maya@GR8solutions.se",
      image: Img12,
    },
    {
      name: "Emil Söderström",
      position: "Account Manager",
      phone: "0693-2487624",
      email: "Emil@GR8solutions.se",
      image: Img13,
    },
    {
      name: "Caroline Eriksson",
      position: "Account Manager",
      phone: "0680-5987275",
      email: "Caroline@GR8solutions.se",
      image: Img14,
    },
    {
      name: "Rayan Björklund",
      position: "Account Manager",
      phone: "023-9287419",
      email: "Rayan@GR8solutions.se",
      image: Img15,
    },
    {
      name: "Maya Gustafsson",
      position: "IT-ansvarig",
      phone: "0642-4313558",
      email: "Maya@GR8solutions.se",
      image: Img16,
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Team | GR8 Solutions</title>
        <meta
          name="description"
          content="Vårt team är vår viktigaste tillgång. Kontakta oss idag!"
        />
      </Head>
      <div className="w-full flex items-center justify-start flex-col 3xl:mt-[120px] md:mt-16 mt-12 3xl:gap-20 md:gap-16 gap-9">
        <div className="w-full flex items-start justify-center flex-col">
          <h4 className="3xl:text-6xl md:text-4xl text-xl font-medium text-black lg:block hidden 3xl:mb-7 mb-5">
            TEAM
          </h4>
          <p className="3xl:text-2xl md:text-xl text-lg font-light text-gray80">
            Kontakta oss idag vid frågor.
          </p>
        </div>

        <div className="w-full grid 3xl:grid-cols-4 grid-cols-21 gap-5 place-items-center">
          {listTeam?.map((item, index) => (
            <TeamCard key={index} data={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Team;

Team.layout = "L1";
