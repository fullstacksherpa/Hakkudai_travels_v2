"use client";
import { useState, useEffect, useCallback } from "react";
import throttle from "lodash/throttle";
import Link from "next/link";
import Links from "./Links";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("transparent"); // Track background color

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      // Change the background color after scrolling
      if (currentScrollY > 50) {
        setBgColor("bg-[#022c22]"); // Set bg color when user scrolls down
      } else {
        setBgColor("bg-transparent"); // Keep it transparent when at the top
      }

      setLastScrollY(currentScrollY);
    }, 200), // Throttle the scroll handler to fire every 200ms
    [lastScrollY] // Only re-create handleScroll when `lastScrollY` changes
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Now handleScroll is correctly listed as a dependency

  return (
    <div
      className={`fixed top-0 h-[7%] w-[100%] flex items-center justify-between px-12 z-50 transition-all duration-300 ease-in-out 
      ${showNavbar ? "translate-y-0" : "-translate-y-full"} ${bgColor} `}>
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
