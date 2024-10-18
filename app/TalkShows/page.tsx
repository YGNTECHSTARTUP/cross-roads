import React from 'react'
import { Events} from '../comp/Events'
import MobEvent from '../comp/MobEvent'

const page = () => {
  return (
    <div>
      <div className='hidden lg:block'>
      <Events/>
      </div>
      <div className='lg:hidden mt-20'>
<MobEvent/>
      </div>
       
    </div>
  )
}

export default page