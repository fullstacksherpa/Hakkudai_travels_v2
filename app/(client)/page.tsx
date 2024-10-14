import AboutOne from "@/components/Home/Aboutus";
import Category from "@/components/Home/Category";
import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero";
import HeroBulletin from "@/components/Home/HeroBulletin";

import { Bblog } from "@/components/sections/Bblog";
import { Customize } from "@/components/sections/Customize";
import { TourSection } from "@/components/sections/Tour";
import { client } from "@/sanity/lib/client";

// import { Blog } from "@/utils/interface";

export default async function Home() {
  const query = `*[_type == "video"][0]{
  title,
  "videoUrl": videoFile.asset->url
}`;
  const videoData = await client.fetch(query);
  const videoUrl = videoData.videoUrl;
  return (
    <>
      <Hero videoUrl={videoUrl} />
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
