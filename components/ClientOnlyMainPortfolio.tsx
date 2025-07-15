import dynamic from 'next/dynamic'

const MainPortfolio = dynamic(() => import('./MainPortfolio'), { ssr: false })

export default MainPortfolio
