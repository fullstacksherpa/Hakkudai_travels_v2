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
            <h3 className="text-white font-bold px-6 text-xl md:text-5xl">Popular Tours</h3>
            <button className="border md:px-6 px-3 py-3 rounded-full text-white hover:bg-[#bef264] hover:text-[#022c22] font-semibold">
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
                      <h3 className="text-white  lg:text-2xl text-lg mb-2 leading-1.2 ">
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
        </div>
      </Container>
    </Section>
  );
};
