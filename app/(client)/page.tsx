import Blog from "@/components/Blog/Blog";
import AboutOne from "@/components/Home/Aboutus";
import Category from "@/components/Home/Category";
import Clients from "@/components/Home/Clients";
import HeroBulletin from "@/components/Home/HeroBulletin";
import Package from "@/components/Home/Package";
import { ModeToggle } from "@/components/mode-toggle";
import { getBlogs, getTours } from "@/sanityQueries";
// import { Blog } from "@/utils/interface";

export default async function Home() {
  const tours = await getTours();
  const blogs = await getBlogs();
  return (
    <>
      <div className="mt-9 items-center justify-center">
        <ModeToggle />
        <Blog blogs={blogs} />
        <HeroBulletin />
        <Category />
        <Package tours={tours} />
        <Clients />
        <AboutOne />
      </div>
    </>
  );
}
