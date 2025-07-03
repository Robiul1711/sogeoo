import React from 'react'
import ourclient from '../../assets/images/ourclient.png'
import qute from '../../assets/images/qute.png'
import Title from '../common/Title'
const WhatOurClient = () => {
  return (
    <div className='section-padding-x'>
      <div className='w-full flex justify-between gap-20'>
<div className='w-1/2'>
<img src={qute} alt="" />
<p className='text-lg text-Secondary py-4'>Client feedback</p>
<Title level="title48" className='text-Primary '>What Our Client say about the agency</Title>
<Title level="title24" className='py-10 '>Realtor Finder helped me find an agent to sell an out-of-state inherited property, they even negotiated the commission for me!</Title>
<Title level="title18" className='text-Primary '>Ashiq</Title>
</div>
<div className='w-1/2'>
<img src={ourclient}  alt="" />
</div>
      </div>
    </div>
  )
}

export default WhatOurClient
