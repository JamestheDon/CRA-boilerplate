import React from "react";
import Social from "../secondary/Social";

export default () => {
  return (
    <footer className=" text-white mb-2 p-2 text-center">
      <span>Copyright &copy; {new Date().getFullYear()} Jamesdon.io</span>
      <Social />
    </footer>
  );
};
