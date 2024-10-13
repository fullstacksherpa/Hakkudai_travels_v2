import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";

// Fetch data based on tour ID
async function getData(slug: string) {
  const query = `
     *[_type == "tour" && slug.current == '${slug}']{
     title, price, day, tourImage, body
     }[0]
  `;
  //output
  // {
  //     price:3999
  //   day:2
  //   tourImage:{…} 2 properties
  //   _type:image
  //   asset:{…} 2 properties
  //   _ref:image-5df3edad76be1295bd5b074886584ac974b40411-719x583-webp
  //   _type:reference
  //   body:null
  //   title:Sukute Beach
  // }
  const data = await client.fetch(query);
  return data;
}

export default async function PackageDetail({ params }: { params: { slug: string } }) {
  console.log(params);
  const data = await getData(params.slug);

  // Handle case where no data is returned
  if (!data) {
    return (
      <div className="mt-12 text-center">
        <h1 className="text-3xl font-bold">Package Not Found</h1>
        <p>We could not find the package you are looking for.</p>
      </div>
    );
  }

  return (
    <div className="mt-[12%] pt-7">
      <h1>
        <span className="mt-2 block text-3xl text-center leading-10 font-bold tracking-tight sm:text-2xl">
          {data.title}
        </span>
      </h1>

      {/* Render image with optimized size */}
      {data.tourImage && (
        <Image
          src={urlFor(data.tourImage).width(1200).height(1000).url()} // Request smaller image from Sanity
          width={1200}
          height={1000}
          alt={data.title}
          priority
          className="rounded-lg mt-8 border mx-auto"
        />
      )}

      {/* Render body text using PortableText */}
      <div className="mt-16 prose prose-lg md:prose-2xl dark:prose-invert w-[90%] mx-auto">
        {data.body ? <PortableText value={data.body} /> : <p>No description available.</p>}
      </div>
    </div>
  );
}
