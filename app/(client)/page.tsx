import Blog from "@/components/Blog/Blog";
import AboutOne from "@/components/Home/Aboutus";
import Category from "@/components/Home/Category";
import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero";
import HeroBulletin from "@/components/Home/HeroBulletin";
import Package from "@/components/Home/Package";
import { getBlogs, getTours } from "@/sanityQueries";
// import { Blog } from "@/utils/interface";

export default async function Home() {
  const tours = await getTours();
  const blogs = await getBlogs();
  return (
    <>
      <Hero />
      <HeroBulletin />
      <div className="mt-9 mx-auto px-2 md:px-4 lg:max-w-screen-lg max-w-screen-sm md:max-w-screen-md">
        <Category />
      </div>
      <div className="mt-9 mx-auto px-2 md:px-4 lg:max-w-screen-lg max-w-screen-sm md:max-w-screen-md">
        <Package tours={tours} />
      </div>
      <Clients />
      <div className="mt-9 mx-auto px-2 md:px-4 lg:max-w-screen-lg max-w-screen-sm md:max-w-screen-md">
        <Blog blogs={blogs} />
      </div>

      <div className="mt-9 mx-auto px-2 md:px-4 lg:max-w-screen-lg max-w-screen-sm md:max-w-screen-md">
        <AboutOne />
      </div>
    </>
  );
}
