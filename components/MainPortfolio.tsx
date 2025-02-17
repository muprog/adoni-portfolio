import React from 'react'
import Portfolio from './Portfolio'

const portfolios = [
  {
    id: '0',
    image: 'car_showcase.png',
    name: 'Car Showcase',
    project: 'Website',
    framework: 'Next.js',
    live: 'https://car-showcase-git-master-mus-projects-b80e04f8.vercel.app/',
    github: 'https://github.com/muprog/car_showcase',
    before: '',
    after: '1',
  },
  {
    id: '1',
    image: 'next_amazon.png',
    name: 'Next Amazon',
    project: 'Website',
    framework: 'Next.js',
    live: 'https://next-amazon-ten.vercel.app/',
    github: 'https://github.com/muprog/next-amazon',
    before: '0',
    after: '',
  },
]

export default function MainPortfolio() {
  return (
    <div className='sm:flex sm:flex-col'>
      {portfolios.map((portfolio, index) => (
        <div id={`${index}`} key={index}>
          <Portfolio
            image={portfolio.image}
            name={portfolio.name}
            project={portfolio.project}
            framework={portfolio.framework}
            live={portfolio.live}
            github={portfolio.github}
            before={portfolio.before}
            after={portfolio.after}
            currentIndex={index}
          />
        </div>
      ))}
    </div>
  )
}
