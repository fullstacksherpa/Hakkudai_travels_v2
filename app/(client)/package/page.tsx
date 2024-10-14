export const revalidate = 0;

import { Container } from "@/components/layouts/Container";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/layouts/Section";
import { urlFor } from "@/sanity/lib/image";
import { getTourCardData } from "@/sanityQueries";
import Image from "next/image";
import Link from "next/link";
import { Customize } from "@/components/sections/Customize";
import { LuCalendarDays } from "react-icons/lu";

const Allpackages = async () => {
  const data = await getTourCardData();

  return (
    <Section className="bg-[#022c22]">
      <Container>
        <div className="text-white">
          <Heading as="h1" className="text-4xl leading-none">
            Our Tours and Packages
          </Heading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-12 mt-24">
          {data.map((tour) => {
            return (
              <div key={tour._id} className="flex group flex-col gap-8 px-2 md:px-4">
                <div className="aspect-video rounded-3xl overflow-hidden h-[360px] ">
                  <Link href={`/package/${tour.slug.current}`}>
                    <Image
                      src={urlFor(tour.tourImage).url()}
                      alt={tour.title}
                      width={330}
                      height={330}
                      className="w-full h-full group-hover:scale-110 duration-300 object-cover"
                    />
                  </Link>
                </div>
                <div>
                  <div>
                    <h3 className="text-white  text-sub-title mb-4">
                      <Link href={`/package/${tour.slug.current}`}>{tour.title}</Link>
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-3">
                      <LuCalendarDays />
                      <span className="text-white">{tour.day} Days </span>
                    </div>
                    <span className="text-white">Rs. {tour.price}</span>
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

export default Allpackages;
