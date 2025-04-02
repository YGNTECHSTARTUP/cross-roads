import React from "react";
import { Timeline } from "@/components/ui/timeline";
import PodcastTemplate from "./Podcast";
import { episodes } from "../constant";

// Helper function to generate timeline data
const generateTimelineData = (episodes: {
  title: string;
  guestSpeaker: string;
  occupation: string;
  date: string;
  episodeTopic: string;
  guestImage: string;
  episodeno: number;
  highlights: string[];
  spotifylink: string;
}[]) => {
  return episodes.map((episode, index) => ({
    title: `Cross Roads Episode ${episodes.length - index}`,
    content: <PodcastTemplate {...episode} />,
  }));
};

export function Events() {
  const data = generateTimelineData(episodes);
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
