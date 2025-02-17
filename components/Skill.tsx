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

export default function Skill() {
  return (
    <div
      className='w-full h-[100vh] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white'
      id='skill'
    >
      {/* Section Header */}
      <div className='flex flex-col justify-center items-center pt-20'>
        <h1 className='text-4xl font-bold tracking-wide underline decoration-white'>
          My Skills
        </h1>
        <p className='mt-4 text-gray-400 text-sm sm:text-base'>
          A showcase of technologies I work with!
        </p>
      </div>

      {/* Skill Cards */}
      <div className='w-full flex justify-center items-center'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 mt-12 px-6 md:px-20'>
          {[
            'HTML',
            'Tailwind CSS',
            'JavaScript',
            'React.js',
            'Next.js',
            'Node.js',
          ].map((skill, index) => (
            <div
              key={index}
              className='skill-div flex justify-center items-center bg-gray-800 hover:bg-white hover:text-black hover:font-bold transition-all duration-300 ease-in-out text-lg sm:text-xl font-semibold py-4 rounded-lg shadow-lg hover:scale-105'
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
