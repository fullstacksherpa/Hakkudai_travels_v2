import Image from "next/image";
import Link from "next/link";
import { BlogCardInterface } from "@/utils/interface";

const BlogCard = ({ slug, title, blogCardImage, publishedAt }: BlogCardInterface) => {
  // Check if blogCardImage and its asset exists
  return (
    <div className="blog_card__one group wow fadeInUp" data-wow-delay="0.2s">
      <div className="overflow-hidden">
        <Link href={`/blogs/${slug.current}`}>
          {/* Use the correct image URL using the builder */}
          <Image
            height={Math.round(445.95)}
            width={500}
            src={blogCardImage} // Correct image URL
            alt={title || "Blog Card"} // Fallback alt text
            className="w-full hover:scale-105 duration-300"
          />
        </Link>
      </div>
      <div className="mt-6">
        <ul className="flex items-center text-[13px] font-medium text-dark-2">
          <li className="flex items-center relative first:pl-0 pl-2 pr-2 before:content-[''] before:absolute before:h-2/3 before:w-[1px] before:bg-dark-2 before:-translate-y-1/2 before:top-1/2 before:left-0 first:before:hidden">
            <i className="bi bi-calendar-date text-[15px]" />
            <span className="ml-2">{new Date(publishedAt).toLocaleDateString()}</span>{" "}
            {/* Format date properly */}
          </li>
        </ul>
        <h3 className="card-title-alpha mt-4">
          <Link href={`/blogs/${slug.current}`}>{title}</Link>
        </h3>
        <Link
          href={`/blogs/${slug.current}`}
          className="group ease-in hover:text-primary-1 duration-200 inline-flex items-center mt-4 lg:text-base text-sm text-dark-1 font-medium">
          <span className="mr-2">Read More</span>
          <svg
            className="group-hover:translate-x-2 duration-200 max-w-[22px]"
            width={27}
            height={14}
            viewBox="0 0 27 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.217443 6.25H18.4827C18.6276 6.25 18.7001 6.30263 18.7001 6.40789V7.59211C18.7001 7.69737 18.6276 7.75 18.4827 7.75H0.217443C0.0724811 7.75 0 7.69737 0 7.59211V6.40789C0 6.30263 0.0724811 6.25 0.217443 6.25Z"
              fill="currentColor"
            />
            <path
              d="M20.7001 12.2802L25.0467 7.93355C25.5601 7.42021 25.5601 6.58021 25.0467 6.06688L20.7001 1.72021"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
