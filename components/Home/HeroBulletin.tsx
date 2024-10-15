import Link from "next/link";
import Marquee from "react-fast-marquee";

const HeroBulletin = () => {
  return (
    <div className="bg-dark-1 py-3 md:py-4 xl:mx-base md:mt-base">
      <Marquee className="lg:text-2md text-base text-white marquee__content" pauseOnHover={true}>
        <Link href="#">Fully Customize your trip by yourself.</Link>
        <Link href="#">10% discount for group of 8 members or more</Link>
        <Link href="#">Experience local events</Link>
        <Link href="#">
          Payment With <span className="underline">esewa, visa, mastercard, cash</span>
        </Link>
        <Link href="#">enjoy local cuisines with organic ingredients</Link>
      </Marquee>
    </div>
  );
};

export default HeroBulletin;
