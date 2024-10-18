
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import PodcastTemplate from "./Podcast";
import { episodes } from "../constant";
export function Events() {
  const data = [
    {
      title: "Cross Roads Episode 9",
      content: (
      <PodcastTemplate/>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <PodcastTemplate/>
      ),
    },
    {
      title: "Changelog",
      content: (
   <PodcastTemplate/>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
