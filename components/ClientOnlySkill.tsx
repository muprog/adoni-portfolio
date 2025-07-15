import dynamic from 'next/dynamic'

const Skill = dynamic(() => import('./Skill'), { ssr: false })

export default Skill
