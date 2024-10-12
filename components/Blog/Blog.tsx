import { BlogData } from "@/constants/index";
import BlogCard from "./BlogCard";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

//this one for the home page only

const Blog = ({ blogs }) => {
  return (
    <div className="blog_style_one relative z-1 lg:pt-30 pt-24">
      <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
        <Image src="/assets/blogs/bird-illustration.png" alt="leaf" fill />
      </div>
      <div className="container">
        <div className="text-center lg:pb-[60px] pb-[40px]">
          <h5 className="section-sub-title-v1">{BlogData.sub_title}</h5>
          <h2 className="section-title-v1">{BlogData.title}</h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-base">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard
              slug={blog.slug}
              key={blog._id}
              title={blog.title}
              blogCardImage={urlFor(blog.blogCardImage).url()}
              publishedAt={blog.publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
