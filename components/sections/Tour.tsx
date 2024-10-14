"use client";
import { LuCalendarDays } from "react-icons/lu";
import { urlFor } from "@/sanity/lib/image";
import { Container } from "../layouts/Container";
import { Section } from "../layouts/Section";
import { getTourCardData } from "@/sanityQueries";
import Image from "next/image";
import Link from "next/link";

export const TourSection = async () => {
  const data = await getTourCardData();
  const latestTours = data.slice(0, 4);

  return (
    <Section className=" bg-[#022c22] px-auto">
      <Container>
        <div>
          <div className="w-full flex justify-between items-center">
            <h3 className="text-white font-bold px-6 text-3xl md:text-5xl">Most Popular Tours</h3>
            <button className="border px-6 py-3 rounded-full text-white hover:bg-[#bef264] hover:text-[#022c22] font-semibold">
              <Link href="/package">See all</Link>
            </button>
          </div>
          <div className="grid mt-12 sm:mt-24 grid-cols-1 md:grid-cols-2 gap-8">
            {latestTours.map((tour) => {
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
        </div>
      </Container>
    </Section>
  );
};
