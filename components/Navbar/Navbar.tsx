"use client";
import { useState, useEffect } from "react";
import throttle from "lodash/throttle";
import Link from "next/link";
import Links from "./Links";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = throttle(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  }, 200); // Throttle the scroll handler to fire every 200ms

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 h-[9%] w-[100%] flex items-center justify-between px-12 z-999 transition-transform duration-300 ease-in-out 
      ${showNavbar ? "translate-y-0" : "-translate-y-full"} bg-transparent backdrop-blur-2xl`}>
      <Link href="/">
        <div className="from-[#d04529] flex flex-col bg-gradient-to-r via-[#f1ab5f] to-[#e9731f] bg-clip-text font-bold text-transparent text-lg md:text-5xl">
          <p>HAKKUDAI</p>
          <p>TRAVELS</p>
        </div>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
