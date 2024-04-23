import React from "react";
import Logo from "../img/logo.png";

export default function Navbar() {
  return (
    <div className="bg-[#101416]">
      <div className="container flex justify-between items-center py-3">
        <img src={Logo} alt="" />
        <ul className="flex items-center gap-x-20 text-[#fff] text-xs uppercase ">
          <li>
            <a href="#">products</a>
          </li>
          <li>
            <a href="#">solutions</a>
          </li>
          <li>
            <a href="#">pricing</a>
          </li>
          <li>
            <a href="#">resources</a>
          </li>
          <li>
            <a href="#">company</a>
          </li>
        </ul>
        <div className="flex items-center gap-x-10 text-[#fff] text-sm ">
          <button className="uppercase">login</button>
          <button className="bg-[#7D33FF] py-2 px-5 rounded uppercase">
            book a call
          </button>
        </div>
      </div>
    </div>
  );
}
