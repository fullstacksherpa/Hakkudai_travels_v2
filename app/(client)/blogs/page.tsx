/* eslint-disable @typescript-eslint/no-explicit-any */
export const revalidate = 0;

import { Container } from "@/components/layouts/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/layouts/Section";
import { urlFor } from "@/sanity/lib/image";
import { getBlogCardData } from "@/sanityQueries";
import Image from "next/image";
import Link from "next/link";
import { Customize } from "@/components/sections/Customize";

const BlogPage = async () => {
  const data = await getBlogCardData();

  return (
    <Section className="bg-[#022c22]">
      <Container>
        <div className="text-white">
          <Heading as="h1" className="text-4xl leading-none">
            Our Latest Posts
          </Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12 mt-24">
          {data.map((blog: any) => {
            return (
              <div key={blog._id} className="flex group flex-col gap-8 px-2 md:px-4">
                <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
                  <Link href={`/blogs/${blog.slug.current}`}>
                    <Image
                      src={urlFor(blog.blogCardImage).url()}
                      alt={blog.title}
                      width={330}
                      height={330}
                      className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                    />
                  </Link>
                </div>
                <div>
                  <div>
                    <h3 className="text-white  text-sub-title mb-4">
                      <Link href={`/blogs/${blog.slug.current}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-neutral-400 line-clamp-2">{blog.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={urlFor(blog.author.image).url()}
                        alt="Bruno"
                        height={40}
                        width={40}
                        className="h-[40px] object-cover rounded-full"
                      />
                      <span className="text-white">{blog.author.name}</span>
                    </div>
                    <span className="text-white">9 min read</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <div className="pt-24">
        <Customize />
      </div>
    </Section>
  );
};

export default BlogPage;
