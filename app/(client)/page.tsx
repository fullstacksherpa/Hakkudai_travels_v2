import AboutOne from "@/components/Home/Aboutus";
import Category from "@/components/Home/Category";
import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero";
import HeroBulletin from "@/components/Home/HeroBulletin";

import { Bblog } from "@/components/sections/Bblog";
import { Customize } from "@/components/sections/Customize";
import { TourSection } from "@/components/sections/Tour";

// import { Blog } from "@/utils/interface";

export default async function Home() {
  return (
    <>
      <Hero />
      <HeroBulletin />
      <div className="mt-9 mx-auto px-2 md:px-4 lg:max-w-screen-lg max-w-screen-sm md:max-w-screen-md">
        <Category />
      </div>
      <TourSection />
      <div className="py-12">
        <Customize />
      </div>

      <Clients />
      <div className="px-auto items-center">
        <Bblog />
      </div>

      <div className="mt-9 mx-auto px-2 md:px-4 lg:max-w-screen-lg max-w-screen-sm md:max-w-screen-md">
        <AboutOne />
      </div>
    </>
  );
}
