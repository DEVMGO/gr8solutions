import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Components
import CardBlog from "./cardBlog";

// images
import Img1 from "@/public/assets/images/blog/img1.png";
import Img2 from "@/public/assets/images/blog/img2.png";
import Img3 from "@/public/assets/images/blog/img3.png";
import Img4 from "@/public/assets/images/blog/img4.png";
import Img5 from "@/public/assets/images/blog/img5.png";
import Img6 from "@/public/assets/images/blog/img6.png";
import { Fade } from "react-awesome-reveal";

export default function BlogSlider() {
  const listBlog = [
    {
      title: "Informationsteknologi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Img2,
    },
    {
      title: "Teknologi",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Img3,
    },
    {
      title: "Programmering",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Img4,
    },
    {
      title: "Cloud",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Img5,
    },
    {
      title: "Teknik",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Img6,
    },
    {
      title: "Webbutveckling",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi.",
      image: Img1,
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        // spaceBetween={30}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          440: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
        className="teamHome"
      >
        {listBlog.map((item, index) => (
          <SwiperSlide key={index}>
            <Fade delay={`+${index + "0"}`} triggerOnce className="w-full">
              <CardBlog data={item} index={index} />
            </Fade>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
