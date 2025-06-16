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
  {
    category: 'Frontend Development',
    items: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 92 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Responsive Design', level: 88 },
      { name: 'UI/UX', level: 75 },
    ],
  },
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
          className: 'max-w-6xl mx-auto',
        } as HTMLMotionProps<'div'>)}
      >
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold text-white mb-4'>
            My <span className='text-orange-400'>Skills</span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              {...({
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: categoryIndex * 0.2 },
                viewport: { once: true },
                className: 'bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm',
              } as HTMLMotionProps<'div'>)}
            >
              <h3 className='text-xl font-semibold text-orange-400 mb-6'>
                {category.category}
              </h3>
              <div className='space-y-4'>
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className='flex justify-between mb-2'>
                      <span className='text-gray-300'>{skill.name}</span>
                      <span className='text-gray-400'>{skill.level}%</span>
                    </div>
                    <div className='h-2 bg-gray-700 rounded-full overflow-hidden'>
                      <motion.div
                        {...{
                          initial: { width: 0 },
                          whileInView: { width: `${skill.level}%` },
                          transition: { duration: 1, delay: 0.5 },
                          viewport: { once: true },
                          className: 'h-full bg-orange-400 rounded-full',
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
