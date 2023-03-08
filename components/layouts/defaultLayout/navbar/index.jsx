import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// components
// import Button from "@/components/ui/button";
// images
import Logo from "@/public/assets/images/logo.svg";
// icons
import { FiPhoneCall } from "react-icons/fi";
import { CiShoppingBasket } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { FiMenu, FiChevronDown } from "react-icons/fi";
import style from "@/styles/Home.module.css";

const Navbar = ({ objekts }) => {
  const [menu, setMenu] = useState(false);

  const menuItems = [
    {
      title: "HEM",
      url: "/",
      children: [],
    },
    {
      title: "TJÄNSTER",
      url: "/tjansetr",
      children: [
        {
          title: "item1",
          url: "#",
        },
        {
          title: "item2",
          url: "#",
        },
      ],
    },
    {
      title: "OM OSS",
      url: "/om-oss",
      children: [
        {
          title: "item1",
          url: "#",
        },
        {
          title: "item2",
          url: "#",
        },
      ],
    },
    {
      title: "BLOGG",
      url: "/blogg",
      children: [],
    },
    {
      title: "KONTAKTA OSS",
      url: "/kontakt-oss",
      children: [],
    },
  ];

  return (
    <>
      <div
        className={`${style.navbar} w-full flex items-center justify-center`}
      >
        <div className="w-4/5 h-28 md:flex hidden items-center justify-evenly bg-blue28 p-1 relative border-b border-gray-400">
          <div className="w-1/2 flex items-center justify-start z-30">
            <Link href="/">
              <Image src={Logo} alt="gr8 solutions" className="3xl:w-28 w-20 3xl:h-14 h-10" />
            </Link>
          </div>

          <ul className="w-1/2 flex items-center justify-end 3xl:gap-16 md:gap-8">
            {menuItems.map((item, index) => (
              <li key={index + "navitems"} className={`min-w-max`}>
                <Link href={item.url}>
                  <div>
                    <p className="3xl:text-lg text-base font-medium text-black flex items-center gap-2">
                      {item.title}{" "}
                      {item.children.length > 0 && <FiChevronDown />}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------------------- mobile menu --------------- */}

      <div className="w-full h-20 flex md:hidden items-center justify-evenly bg-blue28 p-2 px-4 relative z-40">
        <div className="w-full flex items-center justify-start">
          <Link href="/">
            <Image src={Logo} alt="gr8 solutions" className="w-16 h-16" />
          </Link>
        </div>

        <button
          onClick={() => setMenu(!menu)}
          className={`text-2xl text-white flex items-center justify-center relative p-4`}
        >
          <IoClose
            className={`${
              menu ? "rotate-90" : "opacity-0 rotate-90"
            } absolute transition-all duration-200 ease-in-out`}
          />
          <FiMenu
            className={`${
              !menu ? "rotate-0" : "opacity-0 rotate-180"
            } absolute transition-all duration-200 ease-in-out`}
          />
        </button>

        <ul
          className={`w-full absolute flex items-center justify-center flex-col top-full lg:gap-14 md:gap-8 ${
            menu ? "max-h-screen" : "max-h-0"
          } overflow-hidden bg-blue3D transition-all duration-300 ease-in-out`}
        >
          {menuItems.map((item, index) => (
            <li
              onClick={() => setMenu(false)}
              key={index + "navitems"}
              className={`w-full flex items-center justify-start border-b border-gray-50 border-opacity-10`}
            >
              <Link href={item.url}>
                <div>
                  <p className="text-lg font-medium text-black flex items-center gap-2">
                    {item.title} {item.children.length > 0 && <FiChevronDown />}
                  </p>
                </div>
              </Link>
            </li>
          ))}
          <li
            className={`w-full flex items-center justify-start text-sm text-white border-b border-gray-50 border-opacity-10 p-4`}
          >
            <CiShoppingBasket className="mr-2 text-xl" /> {objekts} objekt
          </li>
          <li
            className={`w-full flex items-center justify-start text-sm text-white border-b border-gray-50 border-opacity-10 p-4`}
          >
            <button link="tel:040185050" className="py-3">
              <FiPhoneCall className="mr-2" /> 040-18 50 50
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

Navbar.defaultProps = {
  objekts: 0,
};
