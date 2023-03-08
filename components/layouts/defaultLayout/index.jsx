import React, { Fragment } from "react";
// components
import Footer from "./footer";
import Navbar from "./navbar";
// style
import style from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const DefaultLayout = (props) => {
  const pathname = useRouter().pathname;
  return (
    <Fragment>
      <div
        className={`${
          pathname === "/" && style.home
        } w-full flex items-start justify-center`}
      >
        <div
          className={`w-full max-w-[3000px] flex items-center justify-start flex-col overflow-hidden`}
        >
          <Navbar />
          <main className="md:w-4/5 w-11/12 h-full min-h-[80vh] flex items-center justify-start flex-col z-10 overflow-hidden">
            {props.children}
          </main>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default DefaultLayout;
