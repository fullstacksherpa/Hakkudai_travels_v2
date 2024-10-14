"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { IoClose } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { links } from "@/constants/index";
import { GiHamburgerMenu } from "react-icons/gi";

const Links = () => {
  const date = new Date();
  const year = date.getFullYear();
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="hidden items-center gap-7 md:inline-flex">
        <ul className="flex gap-7 text-lg">
          {links.map((link, index) => (
            <NavLink key={index} title={link.title} path={link.path} />
          ))}
        </ul>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer hover:scale-110 md:hidden text-2xl">
        {open ? (
          <IoClose className="text-4xl text-white" />
        ) : (
          <GiHamburgerMenu className="text-white" />
        )}
      </div>
      {open && (
        <div
          className="fixed right-0  flex h-screen w-full flex-col items-end backdrop-blur-lg md:hidden z-[5999] overflow-y-hidden "
          onClick={toggleMenu}>
          <div className="bg-[#022c22] fixed  flex h-full w-[90%] flex-col items-center px-4 pt-[50px]">
            <div className="flex flex-col items-center gap-7 pt-[10px]">
              <ul className="mt-[20px] flex flex-col gap-4 text-lg">
                {links.map((link, index) => (
                  <NavLink key={index} title={link.title} path={link.path} />
                ))}
              </ul>
            </div>

            <footer className="flex flex-col text-center text-black mt-5">
              <div className="mx-auto my-2 pt-9 flex flex-row items-center gap-4">
                <a href="https://www.facebook.com/profile.php?id=61556339705698" target="_blank">
                  <span className="hover:text-orange-500 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-xl transition-all duration-300 hover:-translate-y-2">
                    <SlSocialFacebook />
                  </span>
                </a>
                <a href="https://www.instagram.com/hakkudaitoursandtravel/" target="_blank">
                  <span className="hover:text-orange-500 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-xl transition-all duration-300 hover:-translate-y-2">
                    <SlSocialInstagram />
                  </span>
                </a>
                <a href="https://www.tiktok.com/@hakkudaitoursandtravel" target="_blank">
                  <span className="hover:text-orange-500 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-xl transition-all duration-300 hover:-translate-y-2">
                    <FaTiktok />
                  </span>
                </a>
              </div>
              <div className="mx-auto my-6 h-1 w-[98%] bg-white/80" />
              <h3 className="text-white/90">Copyright © {year} &#124; Hakkudai Tours & Travels</h3>
              <h3 className="text-white/90">
                website by{" "}
                <a
                  href="https://fullstacksherpa.tech"
                  className="hover:text-purple-500"
                  target="_blank">
                  fullstacksherpa
                </a>
              </h3>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Links;
