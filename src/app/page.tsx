"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header } from "../components/layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col-reverse lg:flex-row min-h-screen bg-black text-white ">
        <div className="flex-1 flex flex-col justify-center items-start px-6 md:px-16 py-12 space-y-6 border-r-24 border-yellow-400">
          <div className=" text-sm flex font-bold">
            <Image src="/stars.svg" alt="Alltheway" width={82} height={16} />{" "}
            Trustpilot
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fly stress-free,
            <br />
            We handle your bags
            <br />
            From <span className="text-yellow-400">Hotel.</span>
          </h1>

          <p className="text-gray-300 max-w-md text-sm md:text-base">
            Bag check-in & delivery on a 10-minute slot everywhere in the
            Greater Paris region.
          </p>

          <Button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-2 text-lg">
            Book now →
          </Button>

          <p className="text-sm text-gray-400">
            Starting from <span className="text-white font-semibold">$25</span>
          </p>
        </div>

        <div className="relative flex-1 w-full h-96 lg:h-auto">
          <Image
            src="/bg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute right-4 bottom-4 z-20 w-32 md:w-48">
            <Image
              src="/bag.png"
              alt="Luggage"
              width={300}
              height={300}
              className="w-full h-auto bg-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
