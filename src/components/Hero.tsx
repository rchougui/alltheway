import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row min-h-[640px] bg-black text-white rounded-b-4xl">
      <div className="flex-[2.60] flex flex-col  items-start px-8 md:px-18 py-10 space-y-4 lg:border-r-[23px] lg:border-yellow-400 ">
        <div className="text-sm flex mt-13 ">
          <Image src="/stars.svg" alt="Alltheway" width={82} height={16} />{" "}
          <span className="ml-1.5">Trustpilot</span>
        </div>

        <h1 className="text-4xl md:text-[52px] font-bold leading-tight">
          Fly stress-free,
          <br />
          We handle your bags
          <br />
          From <span className="text-yellow-400">Hotel.</span>
        </h1>

        <p className="text-gray-300 max-w-md text-sm md:text-[15px]">
          Bag check-in & delivery on a 10-minute slot everywhere in the Greater
          Paris region.
        </p>

        <Button className="bg-yellow-400 flex text-black font-bold hover:bg-yellow-300 px-6 my-9 py-2 text-lg h-15 w-48">
          Book now <Image src="/arrow.svg" width={34} height={34} alt="arrow" />
        </Button>

        <p className=" text-gray-400 font-bold mt-2">
          Starting from <span className="text-white font-semibold">$25</span>
        </p>
      </div>

      <div className="flex-[2] relative bg-right bg-cover bg-[url('/bg.png')] pointer-events-none lg:rounded-br-4xl "></div>
      <div className="absolute top-1/2 left-[59.5%] -translate-x-1/2 -translate-y-[64%] z-20 hidden lg:block pointer-events-none">
        <Image
          src="/bag.png"
          alt="Luggage"
          width={280}
          height={330}
          className=""
        />
      </div>
    </section>
  );
}
