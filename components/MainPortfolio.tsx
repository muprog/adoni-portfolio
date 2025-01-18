import React from 'react'
import Portfolio from './Portfolio'

export default function MainPortfolio() {
  return (
    <div className='sm:flex sm:flex-col'>
      <div className='w-full h-screen flex-shrink-0' id='first'>
        <Portfolio
          image='car_showcase.png'
          name='Car Showcase'
          project='Website'
          framework='Next js'
          live='https://car-showcase-git-master-mus-projects-b80e04f8.vercel.app/'
          github='https://github.com/muprog/car_showcase'
          before='second'
          after='second'
        />
      </div>
      <div className='w-full h-screen flex-shrink-0' id='second'>
        <Portfolio
          image='car_showcase.png'
          name='Car Showcase'
          project='Website'
          framework='Next js'
          live='https://car-showcase-git-master-mus-projects-b80e04f8.vercel.app/'
          github='https://github.com/muprog/car_showcase'
          before='first'
          after='first'
        />
      </div>
    </div>
  )
}
