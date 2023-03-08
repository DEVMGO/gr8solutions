import React from "react";
import Link from "next/link";

const ButtonBlack = (props) => {
  if (props.link) {
    return (
      <Link
        href={props.link}
        className={`${
          props.className
        } w-full flex items-center justify-center p-2 bg-black border border-black hover:bg-gray80 hover:text-white hover:border-gray80 ${
          props.disabled && "bg-grayC0 opacity-30"
        } hover:text-black transition-all duration-500 font-medium text-white text-lg rounded-2xl`}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled ? props.disabled : false}
      className={`${
        props.className
      } w-full flex items-center justify-center p-2 bg-black border border-black hover:bg-gray80 hover:text-white hover:border-gray80 ${
        props.disabled && "bg-grayC0 opacity-30"
      } hover:text-black transition-all duration-500 font-medium text-white text-lg rounded-2xl`}
    >
      {props.children}
    </button>
  );
};

export default ButtonBlack;
