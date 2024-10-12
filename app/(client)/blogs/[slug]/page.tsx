import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
  const query = `
     *[_type == "blog" && slug.current == '${slug}']{
     title, publishedAt, blogCardImage, body, author
     }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  return (
    <div className="mt-12">
      <h1>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.blogCardImage).url()}
        width={800}
        height={800}
        alt={data.title}
        priority
        className="rounded-lg mt-8 border mx-auto"
      />

      <div className="mt-16 prose prose-lg md:prose-2xl dark:prose-invert w-[90%] mx-auto">
        <PortableText value={data.body} />
      </div>
    </div>
  );
}
