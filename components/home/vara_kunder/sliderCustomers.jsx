import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper";
import TeamCard from "@/components/ui/teamCard";

// images
import Img1 from "@/public/assets/images/home/customer1.png";
import Img2 from "@/public/assets/images/home/customer2.png";
import Img3 from "@/public/assets/images/home/customer3.png";

export default function SliderCustomers() {
  const listCustomers = [
    {
      logo: Img1,
      description:
        "”Vi är mycket nöjda med samarbetet med Gr8solutions. Sedan vi blivit kund hos Gr8solutions har hanteringen av telefoni och abonnemang blivit effektivare och tar inte lika mycket tid i anspråk, som tidigare. En stor fördel med Gr8solutions är att det alltid är enkelt att få kontakt och få snabb personlig hjälp. De är mycket lösningsorienterade och kan erbjuda olika lösningar för telefoni och växel, för att passa våra behov bäst. Jag kan rekommendera dem varmt!",
      name: "Karin Varverud",
      office: "Energifabriken AB",
    },
    {
      logo: Img2,
      description:
        "”Vi är mycket nöjda med samarbetet med Gr8solutions. Sedan vi blivit kund hos Gr8solutions har hanteringen av telefoni och abonnemang blivit effektivare och tar inte lika mycket tid i anspråk, som tidigare. En stor fördel med Gr8solutions är att det alltid är enkelt att få kontakt och få snabb personlig hjälp. De är mycket lösningsorienterade och kan erbjuda olika lösningar för telefoni och växel, för att passa våra behov bäst. Jag kan rekommendera dem varmt!",
      name: "Caroline Eriksson",
      office: "Fredersen",
    },
    {
      logo: Img3,
      description:
        "”Vi är mycket nöjda med samarbetet med Gr8solutions. Sedan vi blivit kund hos Gr8solutions har hanteringen av telefoni och abonnemang blivit effektivare och tar inte lika mycket tid i anspråk, som tidigare. En stor fördel med Gr8solutions är att det alltid är enkelt att få kontakt och få snabb personlig hjälp. De är mycket lösningsorienterade och kan erbjuda olika lösningar för telefoni och växel, för att passa våra behov bäst. Jag kan rekommendera dem varmt!",
      name: "Rayan Björklund",
      office: "ESS GROUP",
    },
    {
      logo: Img1,
      description:
        "”Vi är mycket nöjda med samarbetet med Gr8solutions. Sedan vi blivit kund hos Gr8solutions har hanteringen av telefoni och abonnemang blivit effektivare och tar inte lika mycket tid i anspråk, som tidigare. En stor fördel med Gr8solutions är att det alltid är enkelt att få kontakt och få snabb personlig hjälp. De är mycket lösningsorienterade och kan erbjuda olika lösningar för telefoni och växel, för att passa våra behov bäst. Jag kan rekommendera dem varmt!",
      name: "Karin Varverud",
      office: "Energifabriken AB",
    },
    {
      logo: Img2,
      description:
        "”Vi är mycket nöjda med samarbetet med Gr8solutions. Sedan vi blivit kund hos Gr8solutions har hanteringen av telefoni och abonnemang blivit effektivare och tar inte lika mycket tid i anspråk, som tidigare. En stor fördel med Gr8solutions är att det alltid är enkelt att få kontakt och få snabb personlig hjälp. De är mycket lösningsorienterade och kan erbjuda olika lösningar för telefoni och växel, för att passa våra behov bäst. Jag kan rekommendera dem varmt!",
      name: "Caroline Eriksson",
      office: "Fredersen",
    },
    {
      logo: Img3,
      description:
        "”Vi är mycket nöjda med samarbetet med Gr8solutions. Sedan vi blivit kund hos Gr8solutions har hanteringen av telefoni och abonnemang blivit effektivare och tar inte lika mycket tid i anspråk, som tidigare. En stor fördel med Gr8solutions är att det alltid är enkelt att få kontakt och få snabb personlig hjälp. De är mycket lösningsorienterade och kan erbjuda olika lösningar för telefoni och växel, för att passa våra behov bäst. Jag kan rekommendera dem varmt!",
      name: "Rayan Björklund",
      office: "ESS GROUP",
    },
  ];
  return (
    <>
      <Swiper
        // slidesPerView={"auto"}
        // spaceBetween={30}
        loop={true}
        navigation={true}
        centeredSlides={true}
        breakpoints={{
          440: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation]}
        className="customers"
      >
        {listCustomers.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex items-center justify-center flex-col">
              <Image src={item.logo} />
              <p className="text-center 3xl:text-2xl md:text-xl text-lg text-gray80 font-light 3xl:mt-20 md:mt-16 mt-14">
                {item.description}
              </p>
              <div className="w-full flex items-center justify-center flex-col md:gap-2 gap-3 md:mt-14 mt-24">
                <h5 className="text-2xl font-medium text-black">{item.name}</h5>
                <h5 className="text-lg font-medium text-black">
                  {item.office}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
