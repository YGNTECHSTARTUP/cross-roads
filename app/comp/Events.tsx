
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import PodcastTemplate from "./Podcast";
import { episodes } from "../constant";
export function Events() {
  const data = [
    {
      title: "Cross Roads Episode 9",
      content: (
        <PodcastTemplate 
          date={episodes[0].date} 
          episodeTopic={episodes[0].episodeTopic} 
          guestImage={episodes[0].guestImage} 
          guestSpeaker={episodes[0].guestSpeaker} 
          highlights={episodes[0].highlights} 
          occupation={episodes[0].occupation} 
          title={episodes[0].title} 
          spotifylink={episodes[0].spotifylink}
        />
      ),
    },
    {
      title: "Cross Roads Episode 8",
      content: (
        <PodcastTemplate 
          date={episodes[1].date} 
          episodeTopic={episodes[1].episodeTopic} 
          guestImage={episodes[1].guestImage} 
          guestSpeaker={episodes[1].guestSpeaker} 
          highlights={episodes[1].highlights} 
          occupation={episodes[1].occupation} 
          title={episodes[1].title} 
          spotifylink={episodes[1].spotifylink}
        />
      ),
    },
    {
      title: "Cross Roads Episode 7",
      content: (
        <PodcastTemplate 
          date={episodes[2].date} 
          episodeTopic={episodes[2].episodeTopic} 
          guestImage={episodes[2].guestImage} 
          guestSpeaker={episodes[2].guestSpeaker} 
          highlights={episodes[2].highlights} 
          occupation={episodes[2].occupation} 
          title={episodes[2].title} 
          spotifylink={episodes[2].spotifylink}
        />
      ),
    },
    {
      title: "Cross Roads Episode 6",
      content: (
        <PodcastTemplate 
          date={episodes[3].date} 
          episodeTopic={episodes[3].episodeTopic} 
          guestImage={episodes[3].guestImage} 
          guestSpeaker={episodes[3].guestSpeaker} 
          highlights={episodes[3].highlights} 
          occupation={episodes[3].occupation} 
          title={episodes[3].title} 
          spotifylink={episodes[3].spotifylink}
        />
      ),
    },
    {
      title: "Cross Roads Episode 5",
      content: (
        <PodcastTemplate 
          date={episodes[4].date} 
          episodeTopic={episodes[4].episodeTopic} 
          guestImage={episodes[4].guestImage} 
          guestSpeaker={episodes[4].guestSpeaker} 
          highlights={episodes[4].highlights} 
          occupation={episodes[4].occupation} 
          title={episodes[4].title} 
          spotifylink={episodes[4].spotifylink}
        />
      ),
    },
    {
      title: "Cross Roads Episode 4",
      content: (
        <PodcastTemplate 
          date={episodes[5].date} 
          episodeTopic={episodes[5].episodeTopic} 
          guestImage={episodes[5].guestImage} 
          guestSpeaker={episodes[5].guestSpeaker} 
          highlights={episodes[5].highlights} 
          occupation={episodes[5].occupation} 
          title={episodes[5].title} 
          spotifylink={episodes[5].spotifylink}
        />
      ),
    },
    {
      title: "Cross Roads Episode 3",
      content: (
        <PodcastTemplate 
          date={episodes[6].date} 
          episodeTopic={episodes[6].episodeTopic} 
          guestImage={episodes[6].guestImage} 
          guestSpeaker={episodes[6].guestSpeaker} 
          highlights={episodes[6].highlights} 
          occupation={episodes[6].occupation} 
          title={episodes[6].title} 
          spotifylink={episodes[6].spotifylink}
        />
      ),
    },
    {
      title: "Cross Roads Episode 2",
      content: (
        <PodcastTemplate 
          date={episodes[7].date} 
          episodeTopic={episodes[7].episodeTopic} 
          guestImage={episodes[7].guestImage} 
          guestSpeaker={episodes[7].guestSpeaker} 
          highlights={episodes[7].highlights} 
          occupation={episodes[7].occupation} 
          title={episodes[7].title} 
          spotifylink={episodes[7].spotifylink}
        />
      ),
    },
    {
      title: "Cross Roads Episode 1",
      content: (
        <PodcastTemplate 
          date={episodes[8].date} 
          episodeTopic={episodes[8].episodeTopic} 
          guestImage={episodes[8].guestImage} 
          guestSpeaker={episodes[8].guestSpeaker} 
          highlights={episodes[8].highlights} 
          occupation={episodes[8].occupation} 
          title={episodes[8].title} 
          spotifylink={episodes[8].spotifylink}
        />
      ),
    },
    
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
