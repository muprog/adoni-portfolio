import React from 'react'
import Portfolio from './Portfolio'

export default function MainPortfolio() {
  return (
    <div id='portfolio'>
      <Portfolio
        image='car_showcase.png'
        name='Car Showcase'
        project='Website'
        framework='Next js'
        live='https://car-showcase-git-master-mus-projects-b80e04f8.vercel.app/'
        github='https://github.com/muprog/car_showcase'
      />
    </div>
  )
}
