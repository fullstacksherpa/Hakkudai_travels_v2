import Link from "next/link";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="fixed top-0 h-[9%] flex w-[100%] items-center justify-between px-12 bg-transparent backdrop-blur-2xl z-999">
      <Link href="/">
        <div className="from-[#d04529] flex flex-col bg-gradient-to-r via-[#f1ab5f] to-[#e9731f] bg-clip-text font-bold text-transparent text-lg md:text-5xl">
          <p>HAKKUDAI</p>
          <p>TRAVELS </p>
        </div>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
