import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import { Pagination } from "swiper";
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

export default function TeamSlider() {
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
      name: "Caroline Eriksson",
      position: "Account Manager",
      phone: "0680-5987275",
      email: "Caroline@GR8solutions.se",
      image: Img9,
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        // spaceBetween={30}
        // loop={true}
        // centeredSlides={true}
        breakpoints={{
          440: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="teamHome"
      >
        {listTeam.map((item, index) => (
          <SwiperSlide key={index}>
            <TeamCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
