import React from "react";
import Link from "next/link";
import Image from "next/image";
// image
import Logo from "@/public/assets/images/logo.svg";
import ButtonBlack from "@/components/ui/buttons/buttonBlack";
import LocationIcon from "@/components/ui/icons/locationIcon";
import PhoneIcon from "@/components/ui/icons/phoneIcon";
import EmailIcon from "@/components/ui/icons/emailIcon";
// icons
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// style
import style from "@/styles/Home.module.css";

const Footer = () => {
  const pageItems = [
    {
      title: "Hem",
      url: "/",
    },
    {
      title: "Team",
      url: "/team",
    },
    {
      title: "Karriär",
      url: "#",
    },
    {
      title: "Blogg",
      url: "/blogg",
    },
    {
      title: "Integritetspolicy",
      url: "#",
    },
  ];

  const serviceItems = [
    {
      title: "Telefoni",
      url: "/telefoni",
    },
    {
      title: "Kommunikation",
      url: "/kommunikation",
    },
    {
      title: "IT",
      url: "it",
    },
    {
      title: "Office-tjänster",
      url: "/office-tjanster",
    },
    {
      title: "GPS & Körjournal",
      url: "/office-tjanster",
    },
  ];

  return (
    <div
      className={`${style.footer} relative w-full flex items-center justify-center flex-col bg-blue28 3xl:mt-52 md:mt-40 mt-28 after:absolute after:bottom-0 after:w-full after:h-full after:-z-10`}
    >
      <div className="w-4/5 flex items-center justify-end flex-col border-t border-black">
        <div className="w-full flex items-center justify-between 3xl:mt-36 md:mt-24 mt-12">
          <h5 className="3xl:text-6xl md:text-4xl text-2xl text-black font-medium">
            KONTAKTA OSS
          </h5>
          <div className="md:flex items-center justify-end 3xl:gap-4 gap-3 hidden min-w-max">
            <ButtonBlack
              link="/kontakta-oss"
              className="3xl:w-60 md:w-48 w-40 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm"
            >
              KONTAKTA OSS
            </ButtonBlack>
            <ButtonBlack
              link="/om-oss"
              className="3xl:w-60 md:w-48 w-40 3xl:h-[4.5rem] h-14 3xl:text-lg text-sm"
            >
              OM OSS
            </ButtonBlack>
          </div>
        </div>

        <div className="w-full flex items-start justify-between lg:flex-row flex-col 3xl:mt-24 md:mt-16 mt-14">
          <div className="w-full flex items-start justify-start flex-col lg:order-1 order-2">
            <div className="items-start justify-start flex-col lg:flex hidden">
              <Image
                src={Logo}
                alt="gr8 solution"
                className="3xl:w-28 md:w-20 w-12 3xl:mb-8 md:mb-6 mb-4"
              />
              <h4 className="text-2xl font-medium text-black">
                "When good is not enough"
              </h4>
            </div>
            <div className="flex items-start justify-start flex-col 3xl:mt-24 md:mt-16 mt-14 3xl:gap-5 gap-4">
              <div className="flex items-center justify-center 3xl:gap-5 gap-4">
                <LocationIcon className="[&>path]:stroke-black" />
                <p className="3xl:text-2xl md:text-xl text-base font-light text-black">
                  Terminalgatan 20, 235 39 Vellinge
                </p>
              </div>
              <div className="flex items-center justify-center 3xl:gap-5 gap-4">
                <PhoneIcon className="[&>path]:stroke-black" />
                <p className="3xl:text-2xl md:text-xl text-lg font-light text-black">
                  020-10 38 10
                </p>
              </div>
              <div className="flex items-center justify-center 3xl:gap-5 gap-4">
                <EmailIcon className="[&>path]:stroke-black" />
                <p className="3xl:text-2xl md:text-xl text-lg font-light text-black">
                  info@gr8solutions.se
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-start flex-col lg:order-2 order-1">
            <div className="flex items-start justify-start flex-col lg:hidden">
              <Image
                src={Logo}
                alt="gr8 solution"
                className="3xl:w-28 md:w-20 w-12 3xl:mb-8 md:mb-6 mb-4"
              />
              <h4 className="md:text-2xl text-xl font-medium text-black">
                "When good is not enough"
              </h4>
            </div>
            <div className="flex items-start justify-between md:gap-16 gap-14 lg:mt-0 mt-14">
              <div className="flex items-start justify-start flex-col 3xl:gap-7 md:gap-5 gap-4">
                <h4 className="3xl:text-2xl md:text-xl text-lg text-black font-medium">
                  SIDOR
                </h4>
                {pageItems?.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    className="3xl:text-2xl md:text-xl text-base text-black font-light min-w-max"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <div className="flex items-start justify-start flex-col 3xl:gap-7 md:gap-5 gap-4">
                <h4 className="3xl:text-2xl md:text-xl text-lg text-black font-medium">
                  TJÄNSTER
                </h4>
                {serviceItems?.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    className="3xl:text-2xl md:text-xl text-base text-black font-light min-w-max"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full min-h-28 border-t border-black flex md:items-center items-start justify-between md:flex-row flex-col 3xl:mt-36 md:mt-24 mt-14 gap-6 py-6">
          <p className="3xl:text-2xl md:text-xl text-lg text-black font-light md:order-1 order-2">
            © 2022-23. Alla rättigheter förbehållna
          </p>
          <div className="flex items-center justify-center 3xl:gap-5 gap-4 md:order-2 order-1">
            <a
              href="https://www.instagram.com/gr8_solutions/"
              className="w-12 h-12 bg-blue44 rounded-full text-2xl text-white flex items-center justify-center"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.facebook.com/GR8SolutionsAB"
              className="w-12 h-12 bg-blue44 rounded-full text-2xl text-white flex items-center justify-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/gr8-solutions-ab/"
              className="w-12 h-12 bg-blue44 rounded-full text-2xl text-white flex items-center justify-center"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
