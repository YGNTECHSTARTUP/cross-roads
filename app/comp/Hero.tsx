import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
const ds = Dancing_Script({
  style:["normal"],
  subsets:["latin"]
});
export function Hero() {
  return (
    <BackgroundBeamsWithCollision className="opacity-100 bg-primary">
        <div >
            <Image src="/logo.png" alt="CrossRoads" width={200} height={200} className="rounded-full hover:border-teal-400 hover:border-2  size-20 lg:size-40 xl:size-60  mx-auto" />
            {/* <TfiMicrophone size={250} className="mx-auto h-20 w-20 md:size-40 "/> */}
        <h2 className="text-4xl  relative z-20 font-bold md:text-4xl lg:text-7xl  text-center text-black dark:text-white font-sans tracking-normal">
      <div className="tracking-tight">
      CrossRoads with{" "}
        </div>
        <div className="-mt-5">
        <div className="relative mx-auto  inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute text-4xl lg:text-6xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-gray-500 via-gray-400 to-gray-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className={`${ds.className} `}>Shazin Hijazy.</span>
          </div>
          <div className="relative text-4xl colgra py-4 lg:text-6xl">
            <span className={`${ds.className}`}>Shazin Hijazy.</span>
          </div>
        </div>
        </div>
        
      </h2>
      <div className="mx-auto text-center flex justify-center">
      <div className="flex mx-auto text-center">
            <Link href="#About">
            <button className="px-2 py-1 md:px-4 md:py-2 backdrop-blur-sm border bg-teal-300/10 border-teal-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Explore More →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-teal-500 to-transparent" />
        </button>
            </Link>
        &nbsp;
        <Link href={"mailto:crossroadswithshazinhijazy@gmail.com"}>
        <button className="px-2 py-1 md:px-4 md:py-2 backdrop-blur-sm border bg-teal-300/10 border-teal-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Get in Touch with Us →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-teal-500 to-transparent" />
        </button>
        </Link>
        
        </div>
      </div>
      
        </div>
      
    </BackgroundBeamsWithCollision>
  );
}
