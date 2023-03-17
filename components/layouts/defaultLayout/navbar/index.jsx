import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
// images
import Logo from "@/public/assets/images/logo.png";
import Logo2 from "@/public/assets/images/logo.svg";
// icons
import { IoClose } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import style from "@/styles/Home.module.css";

const Navbar = () => {
  const pathname = useRouter().pathname;
  const [menu, setMenu] = useState(false);
  const [showChildren, setShowChildren] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const handleChildren = (id) => {
    if (showChildren === id) {
      setShowChildren(null);
    } else {
      setShowChildren(id);
    }
  };
  const handleClose = () => {
    setTimeout(() => {
      setShowChildren(null);
    }, 400);
  };
  const title = pathname.split("/")[1];
  const upTitle = title?.replace("_", " ");

  const menuItems = [
    {
      title: "HEM",
      url: "/",
      children: [],
    },
    {
      title: "TJÄNSTER",
      url: "/tjanster",
      children: [
        {
          title: "Telefoni",
          url: "/telefoni",
        },
        {
          title: "IT-tjänster",
          url: "/it",
        },
        {
          title: "Kommunikation",
          url: "/kommunikation",
        },
        {
          title: "Office-tjänster",
          url: "/office-tjanster",
        },
      ],
    },
    {
      title: "OM OSS",
      url: "/om-oss",
      children: [
        {
          title: "Team",
          url: "/team",
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
      url: "/kontakta-oss",
      children: [],
    },
  ];

  // const text = "Hello, how are you?";
  const targetLanguage = "sv"; // "sv" is the language code for Swedish

  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(
    upTitle
  )}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const translatedText = data[0][0][0];
      // console.log(translatedText); // "Hej, hur mår du?"
      setNewTitle(translatedText);
    })
    .catch((error) => console.error(error));

  return (
    <div className="w-full">
      <div
        className={`${style.navbar} w-full flex items-center justify-center`}
      >
        <div className="w-4/5 3xl:h-28 h-20 lg:flex hidden items-center justify-evenly bg-blue28 px-1 relative border-b border-gray-400">
          <div className="w-1/2 flex items-center justify-start z-30">
            <Link href="/">
              <Image
                src={Logo2}
                alt="gr8 solutions"
                className="3xl:w-28 md:w-20 3xl:h-14 h-10"
              />
            </Link>
          </div>

          <ul className="w-1/2 h-full flex items-center justify-end 3xl:gap-16 md:gap-8">
            {menuItems.map((item, index) => (
              <li
                key={index + "navitems"}
                onMouseLeave={() => setShowChildren(null)}
                className={`h-full min-w-max flex items-center justify-center relative`}
              >
                <Link
                  href={item.url}
                  className="w-full h-full flex items-center justify-center"
                  onMouseEnter={() => handleChildren(index)}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="w-full h-full 3xl:text-lg text-base font-medium text-black flex items-center gap-2">
                      {item.title}{" "}
                      {item.children.length > 0 && (
                        <FiChevronDown
                          className={`${
                            showChildren === index ? "rotate-180" : "rotate-0"
                          } transition-all duration-200`}
                        />
                      )}
                    </p>
                  </div>
                </Link>

                {item.children.length > 0 && (
                  <ul
                    className={`absolute top-full w-full min-w-max z-40 bg-white flex items-start justify-center flex-col overflow-hidden ${
                      showChildren === index
                        ? "max-h-screen"
                        : " max-h-0 p-0 opacity-0"
                    }`}
                  >
                    {item.children.map((itm, idx) => (
                      <li
                        key={idx}
                        className="w-full flex items-center justify-start rounded hover:bg-blueCF hover:bg-opacity-40 p-3"
                      >
                        <Link
                          href={itm.url}
                          className="text-gray-900 text-lg font-light"
                        >
                          {itm.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------------------- mobile menu --------------- */}

      <div
        className={`w-full h-20 flex lg:hidden items-center justify-start bg-blue28 p-2 px-8 relative z-40 border-b border-gray-400" ${
          pathname === "/" ? "gap-7" : "gap-7"
        }`}
      >
        <button
          onClick={() => setMenu(!menu)}
          className={`text-2xl text-black flex items-center justify-center relative`}
        >
          <IoClose
            className={`${
              menu ? "rotate-90" : "opacity-0 rotate-90"
            } absolute transition-all duration-200 ease-in-out`}
          />
          <HiOutlineMenuAlt2
            className={`${
              !menu ? "rotate-0" : "opacity-0 rotate-180"
            } absolute transition-all duration-200 ease-in-out`}
          />
        </button>
        <div className="w-full flex items-center justify-start">
          {/* <Link href="/"> */}
          <p className="text-lg text-black font-medium uppercase">
            {pathname === "/" && "HEM"}
            {pathname === "/blogg" && "BLOGG"}
            {pathname === "/it" && "IT"}
            {pathname === "/kommunikation" && "KOMMUNIKATION"}
            {pathname === "/kontakta-oss" && "KONTAKTA OSS"}
            {pathname === "/office-tjanster" && "OFFICE-TJÄNSTER"}
            {pathname === "/om-oss" && "OM OSS"}
            {pathname === "/team" && "TEAM"}
            {pathname === "/telefoni" && "TELEFONI"}
            {pathname === "/tjanster" && "VÅRA TJÄNSTER"}
          </p>
          {/* </Link> */}
        </div>

        <div
          className={`w-full h-screen bg-black bg-opacity-60 fixed left-0 top-0 p-0 ${
            menu ? "max-w-full" : "max-w-0"
          } overflow-hidden transition-all duration-300 ease-in-out flex items-start justify-start flex-col`}
        >
          <div className="w-4/5 h-full bg-white rounded-r-3xl flex items-center justify-start flex-col lg:gap-14 md:gap-8 pl-4 p-12 overflow-auto">
            <div className="w-full flex items-center justify-between px-4">
              <Link href="/">
                <Image src={Logo2} alt="gr8 solutions" className="w-12 h-6" />
              </Link>

              <button
                onClick={() => setMenu(!menu)}
                className={`text-2xl text-black flex items-center justify-center relative`}
              >
                <IoIosCloseCircleOutline />
              </button>
            </div>
            <ul
              className={`w-full h-full bg-white rounded-r-3xl flex items-center justify-start flex-col gap-10 px-4 mt-20`}
            >
              {menuItems.map((item, index) => (
                <li
                  key={index + "navitems"}
                  className={`w-full flex items-start justify-center flex-col border-b border-gray-50 border-opacity-10 min-w-max`}
                >
                  <div className="w-full flex items-center justify-start gap-3">
                    <Link href={item.url} onClick={() => setMenu(!menu)}>
                      <p className="min-w-max text-lg font-medium text-black flex items-center">
                        {item.title}
                      </p>
                    </Link>
                    <p className="min-w-max text-lg font-medium text-black flex items-center">
                      {item.children.length > 0 && (
                        <FiChevronDown
                          onClick={() => handleChildren(index)}
                          className={`${
                            showChildren === index ? "rotate-180" : "rotate-0"
                          } transition-all duration-200`}
                        />
                      )}
                    </p>
                  </div>
                  {item.children.length > 0 && (
                    <ul
                      className={`w-full min-w-max z-40 flex items-start justify-center flex-col overflow-hidden ${
                        showChildren === index
                          ? "max-h-screen"
                          : " max-h-0 p-0 opacity-0"
                      } transition-all duration-300`}
                    >
                      {item.children.map((itm, idx) => (
                        <li
                          onClick={() => setMenu(!menu)}
                          key={idx}
                          className="w-full flex items-center justify-start rounded hover:bg-gray-100 p-3"
                        >
                          <Link
                            href={itm.url}
                            className="text-gray-900 text-lg font-light"
                          >
                            {itm.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

Navbar.defaultProps = {
  objekts: 0,
};
