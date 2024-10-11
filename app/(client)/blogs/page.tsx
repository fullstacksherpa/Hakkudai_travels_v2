import BlogCard from "@/components/Blog/BlogCard";
import Breadcrumb from "@/components/Blog/Breadcrumb";
import { BlogData } from "@/constants/index";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Travel Blogs | Nepal",
  description:
    "Embark on a mesmerizing journey through Nepal with our travel blog! Discover hidden gems, cultural treasures, and breathtaking landscapes as we guide you through the heart of the Himalayas. Immerse yourself in the rich tapestry of Nepal's vibrant traditions, explore ancient temples, and unravel the secrets of this enchanting destination. Join us on a virtual adventure as we share insider tips, local insights, and unforgettable experiences that will inspire your next travel expedition to Nepal.",

  keywords: [
    "Nepal tour",
    "Nepal travel",
    "Trip to Nepal booking",
    "Nepal guides",
    "Nepal Trekking",
    "Nepal himalayans",
  ],
};

const Allblogs = () => {
  return (
    <>
      <Breadcrumb page="" pageTitle="Read our Blogs" bgUrl="/assets/background/blogcrumb.webp" />

      {/*========== BLOG LIST STYLE START ==========*/}
      <div className="lg:pt-30 pt-24 relative z-1 bg-gradient-to-t to-[#FFF1EC] from-white">
        <div className="container">
          <div className="grid grid-cols-12 lg:gap-12 gap-base">
            <div className="lg:col-span-12 col-span-12">
              <div className="grid md:grid-cols-3 grid-cols-2 gap-base">
                {BlogData.blogs.map((item) => (
                  <BlogCard key={item.id} title={item.title} img={item.img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========== BLOG LIST STYLE END ==========*/}
    </>
  );
};

export default Allblogs;
