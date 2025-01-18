import React from 'react'

export default function Skill() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <h1 className='text-[30px] font-semibold underline'>Skills</h1>
      <div
        className='w-full h-screen pt-12 pl-10 flex flex-col gap-5 justify-center items-center sm:grid sm:grid-cols-3 sm:gap-0'
        id='skill'
      >
        <div className='skill-div'>HTML</div>
        <div className='skill-div'>Tailwind CSS</div>
        <div className='skill-div'>Javascript</div>
        <div className='skill-div'>React js</div>
        <div className='skill-div'>Next js</div>
        <div className='skill-div'>Node js</div>
      </div>
    </div>
  )
}
