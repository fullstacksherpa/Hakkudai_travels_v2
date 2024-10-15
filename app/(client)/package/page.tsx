/* eslint-disable @typescript-eslint/no-explicit-any */
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
                    <h3 className="text-white  lg:text-lg text-lg mb-2 leading-1.2 ">
                      <Link href={`/package/${tour.slug.current}`}>{tour.title}</Link>
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 justify-between mt-6 px-3">
                    <div className="flex items-center gap-2">
                      <LuCalendarDays className="text-white" />
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
