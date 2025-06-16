import About from '@/components/About'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import MainPortfolio from '@/components/MainPortfolio'
// import Portfolio from '@/components/Portfolio'
import Skill from '@/components/Skill'
// import Image from 'next/image'
import { Suspense } from 'react'

export default function Page() {
  return (
    <div className='page'>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='page-div'>
          <Home />
        </div>
        <div className='page-div'>
          <About />
        </div>
        <div className='page-div'>
          <Skill />
        </div>
        <div className='page-div'>
          <MainPortfolio />
        </div>
        <div className='page-div'>
          <Contact />
        </div>
      </Suspense>
    </div>
  )
}
