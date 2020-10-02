import React from "react";
import Social from "../secondary/Social";

export default () => {
  return (
    <footer className=" text-black mb-2 p-2 text-center">
      <span>
        Copyright &copy; {new Date().getFullYear()} Pixel and Processor, llc.
        All rights reserved.
      </span>
      <Social />
    </footer>
  );
};
