import About from '@/components/About'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import MainPortfolio from '@/components/MainPortfolio'
import Portfolio from '@/components/Portfolio'
import Image from 'next/image'

export default function page() {
  return (
    <div className=''>
      <Home />
      <About />
      <MainPortfolio />
      <Contact />
    </div>
  )
}
