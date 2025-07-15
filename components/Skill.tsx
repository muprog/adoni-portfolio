'use client'

// import React from 'react'

// export default function Skill() {
//   return (
//     <div className='w-full h-screen flex flex-col justify-center items-center'>
//       <h1 className='text-[30px] font-semibold underline'>Skills</h1>
//       <div
//         className='w-full h-screen pt-12 pl-10 flex flex-col gap-5 justify-center items-center'
//         id='skill'
//       >
//         <div className='skill-div'>HTML</div>
//         <div className='skill-div'>Tailwind CSS</div>
//         <div className='skill-div'>Javascript</div>
//         <div className='skill-div'>React js</div>
//         <div className='skill-div'>Next js</div>
//         <div className='skill-div'>Node js</div>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'

const skills = [
  { name: 'HTML5', icon: '/html.svg' },
  { name: 'CSS', icon: '/css.svg' },
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'React.js', icon: '/react.svg' },
  { name: 'Next.js', icon: '/next1.svg' },
  { name: 'Tailwind CSS', icon: '/tailwind.svg' },
  { name: 'Node.js', icon: '/node.svg' },
  { name: 'Express.js', icon: '/express.svg' },
  { name: 'MongoDB', icon: '/mongodb.svg' },
  { name: 'Git', icon: '/git.svg' },
  { name: 'VS Code', icon: '/visual_studio.svg' },
]

export default function Skill() {
  return (
    <div
      className='min-h-screen w-full bg-gradient-to-b from-gray-900 to-black py-20 px-4'
      id='skill'
    >
      <motion.div
        {...({
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: 'max-w-6xl mx-auto relative',
        } as HTMLMotionProps<'div'>)}
      >
        {/* Section Header */}
        <div className='text-center mb-10'>
          <h2 className='text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight font-sans drop-shadow-lg'>
            My <span className='text-blue-400'>Skills</span>
          </h2>
        </div>
        {/* Skills Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8 sm:gap-10 md:gap-14 px-2 sm:px-0'>
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.12,
                rotate: 2,
                boxShadow:
                  '0 0 32px 8px #26d0ce55, 0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                borderColor: '#26d0ce',
                background: 'rgba(255,255,255,0.18)',
              }}
              style={{
                width: '8rem',
                height: '8rem',
                background: 'rgba(255,255,255,0.13)',
                backdropFilter: 'blur(18px)',
                borderRadius: '1.5rem',
                boxShadow: '0 4px 32px 0 rgba(31,38,135,0.18)',
                border: '2px solid rgba(255,255,255,0.18)',
                transition: 'all 0.4s cubic-bezier(.4,2,.6,1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                // For sm and md screens, use 5rem
                ...(typeof window !== 'undefined' &&
                window.innerWidth >= 640 &&
                window.innerWidth < 1024
                  ? { width: '5rem', height: '5rem' }
                  : {}),
              }}
            >
              <motion.div
                animate={{ y: [0, -8, 0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.1,
                }}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className='mb-3 drop-shadow-xl'
                  style={{
                    width:
                      typeof window !== 'undefined' &&
                      window.innerWidth >= 640 &&
                      window.innerWidth < 1024
                        ? '2.5rem'
                        : '5rem',
                    height:
                      typeof window !== 'undefined' &&
                      window.innerWidth >= 640 &&
                      window.innerWidth < 1024
                        ? '2.5rem'
                        : '5rem',
                    filter: 'drop-shadow(0 0 12px #26d0ce88)',
                  }}
                />
              </motion.div>
              <span className='text-cyan-100 text-base font-semibold tracking-wide font-sans mt-1 drop-shadow-md'>
                {skill.name}
              </span>
              <div className='absolute inset-0 pointer-events-none rounded-2xl border border-white/10' />
            </motion.div>
          ))}
        </div>
        <style jsx>{`
          @media (max-width: 639px) {
            .skill-card {
              width: 8rem !important;
              height: 8rem !important;
            }
          }
          @media (min-width: 640px) and (max-width: 1023px) {
            .skill-card {
              width: 5rem !important;
              height: 5rem !important;
            }
          }
          @media (min-width: 1024px) {
            .skill-card {
              width: 8rem !important;
              height: 8rem !important;
            }
          }
          .animate-gradient {
            background-size: 400% 400%;
            animation: gradientBG 16s ease infinite;
          }
          @keyframes gradientBG {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}</style>
      </motion.div>
    </div>
  )
}
