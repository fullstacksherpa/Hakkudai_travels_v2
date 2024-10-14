"use client";

import { MailPlus, Phone } from "lucide-react";
import Link from "next/link";

export const Customize = () => {
  return (
    <section className="py-16 bg-[#bef264] rounded-3xl mx-3 md:mx-5">
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-3">
          <h2 className="text-3xl leading-none text-[#1f2e05]">
            Your dream destination awaits –{" "}
            <span className="from-[#d04529] bg-gradient-to-r via-[#f1ab5f] to-[#e9731f] bg-clip-text text-transparent">
              Let&apos;s customize it{" "}
            </span>
            together!
          </h2>

          <div className="flex sm:flex-row flex-col sm:gap-3 sm:items-center justify-center">
            <div className="flex gap-3 items-center justify-center">
              <button className="px-6 py-3 bg-[#1f2e05] rounded-full text-white">
                <Link href={`mailto:hakkudaitoursandtravel@gmail.com`}>
                  <MailPlus />
                </Link>
              </button>
              <button className="px-6 py-3 bg-[#1f2e05] rounded-full text-white">
                <Link href={`tel:+977 9851359964`}>
                  <Phone />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
