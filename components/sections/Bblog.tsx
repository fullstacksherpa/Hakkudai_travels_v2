/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { urlFor } from "@/sanity/lib/image";
import { Container } from "../layouts/Container";
import { Section } from "../layouts/Section";
import Image from "next/image";
import Link from "next/link";

export const Bblog = ({ latestBlog }) => {
  return (
    <Section className=" bg-[#022c22] px-auto">
      <Container>
        <div>
          <div className="w-full flex justify-between items-center">
            <h3 className="text-white font-bold px-6 text-3xl md:text-5xl">Blogs</h3>
            <button className="border px-6 py-3 rounded-full text-white hover:bg-[#bef264] hover:text-[#022c22] font-semibold">
              <Link href="/blogs">See all</Link>
            </button>
          </div>
          <div className="grid mt-12 sm:mt-24 grid-cols-1 md:grid-cols-2 gap-8">
            {latestBlog.map((blog): any => {
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
        </div>
      </Container>
    </Section>
  );
};
