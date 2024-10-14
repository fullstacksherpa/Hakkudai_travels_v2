import { client } from "@/sanity/lib/client"; // Sanity client
// Sanity image URL builder
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Section } from "../layouts/Section";

// The component is a server component (Next.js 13+)
export default async function ClientsPage() {
  // Correct Sanity query to fetch the images array from "gallery"
  const query = `*[_type == "gallery"] {
    "images": images[] {
      asset->{
        _id,
        url
      },
      alt
    }
  }`;

  // Fetch the image gallery data
  const galleries = await client.fetch(query);

  return (
    <Section className="bg-[#022c22]">
      <div className="w-full col-span-2 h-1/2">
        <Marquee autoFill>
          <div className="flex justify-center gap-6 items-start mx-3">
            {galleries.map((gallery, galleryIndex) =>
              gallery.images.map((image, imageIndex) => (
                <div key={`${galleryIndex}-${imageIndex}`}>
                  <Image
                    src={image.asset.url} // Using the image URL directly from the Sanity response
                    alt={image.alt || "gallery image"} // Alt text fallback
                    height={250}
                    width={450}
                    className="object-cover"
                  />
                </div>
              ))
            )}
          </div>
        </Marquee>
      </div>
    </Section>
  );
}
