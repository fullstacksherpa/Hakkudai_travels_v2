"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  path: string;
}

const NavLink = ({ title, path }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`min-w-[100] p-2 rounded-3xl font-medium text-center hover:text-orange-600 ${
        pathName === path ? "text-orange-600 font-bold tracking-wider" : "text-white"
      }`}>
      {title}
    </Link>
  );
};

export default NavLink;
