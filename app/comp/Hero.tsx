import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


import Image from "next/image";
export function Hero() {
  return (
    <BackgroundBeamsWithCollision>
        <div>
            <Image src="/logo.png" alt="CrossRoads" width={200} height={200} className="rounded-full hover:border-teal-400 hover:border-2 hover:scale-125 size-20 lg:size-40 xl:size-60  mx-auto" />
            {/* <TfiMicrophone size={250} className="mx-auto h-20 w-20 md:size-40 "/> */}
        <h2 className="text-4xl relative z-20 font-bold md:text-4xl lg:text-7xl  text-center text-black dark:text-white font-sans tracking-tight">
      CrossRoads with{" "}<br/>
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute text-4xl lg:text-6xl left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-gray-500 via-gray-400 to-gray-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Shazin Hijazy.</span>
          </div>
          <div className="relative text-4xl colgra py-4 lg:text-6xl">
            <span className="">Shazin Hijazy.</span>
          </div>
        </div>
      </h2>
        </div>
      
    </BackgroundBeamsWithCollision>
  );
}
