import React from 'react'
import { episodes } from '../constant'
import PodcastTemplate from './Podcast'
const MobEvent = () => {
  return (
    <div>
{
    episodes.map((episode) => (
        <div key={episode.episodeno}>
            <div className='colgra text-2xl container underline decoration-white font-extrabold'>Cross Roads Episode {episode.episodeno}</div>
<PodcastTemplate 
          
          date={episode.date} 
          episodeTopic={episode.episodeTopic} 
          guestImage={episode.guestImage} 
          guestSpeaker={episode.guestSpeaker} 
          highlights={episode.highlights} 
          occupation={episode.occupation} 
          title={episode.title}/>
        </div>
        
    ))
}
<div className='h-40'>

</div>
    </div>
  )
}

export default MobEvent