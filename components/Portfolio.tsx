// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { PortfolioProps } from '@/types'
// export default function Portfolio({
//   image,
//   name,
//   project,
//   framework,
//   live,
//   github,
//   before,
//   after,
//   currentIndex,
// }: PortfolioProps) {
//   return (
//     <div
//       className='w-full h-screen flex justify-center items-center'
//       id='portfolio'
//     >
//       <div className='sm:flex sm:w-full sm:h-screen sm:justify-start sm:items-center'>
//         <div className='w-full sm:w-[50%] sm:h-[150px] h-[250px] relative hover:opacity-75 transition-all duration-500 -z-10'>
//           <Image
//             src={`/image/${image}`}
//             alt='car showcase'
//             fill
//             className='object-contain rounded-3xl'
//           />
//         </div>

//         <div>
//           <div>
//             <div className='text-[30px] font-bold'>{name}</div>
//             <table className=''>
//               <tbody className='flex flex-col gap-3'>
//                 <tr className='w-[200px] flex gap-3'>
//                   <td className='w-[30px] relative -z-10'>
//                     <Image
//                       src={'/image/doc.png'}
//                       alt='doc'
//                       fill
//                       className='object-contain'
//                     />
//                   </td>
//                   <td>
//                     <span className='text-slate-400'>Project : </span>
//                     <span>{project}</span>
//                   </td>
//                 </tr>
//                 <tr className='w-[200px] flex gap-3'>
//                   <td className='w-[30px] relative -z-10'>
//                     <Image
//                       src={'/image/framework.png'}
//                       alt='frame'
//                       fill
//                       className='object-contain '
//                     />
//                   </td>
//                   <td>
//                     <span className='text-slate-400'>Framework : </span>
//                     <span>{framework}</span>
//                   </td>
//                 </tr>
//                 <tr className='w-[200px] flex gap-3'>
//                   <td className='w-full'>
//                     <button className=' group p-1 bg-slate-600 w-full rounded-full hover:bg-orange-400 text-[14px] font-semibold transition-all duration-500'>
//                       <Link
//                         href={`${live}`}
//                         className='w-full h-full group-hover:underline'
//                       >
//                         Live
//                       </Link>
//                     </button>
//                   </td>
//                   <td className='w-full'>
//                     <button className=' group p-1 bg-slate-600 w-full rounded-full hover:bg-orange-400 text-[14px] font-semibold transition-all duration-500'>
//                       <Link
//                         href={`${github}`}
//                         className='w-full h-full group-hover:underline'
//                       >
//                         Github
//                       </Link>
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className='flex flex-col gap-3'>
//           <button className='sm:block hidden'>
//             <Image
//               src='/image/up-arrow.png'
//               alt='up-arrow'
//               height={40}
//               width={40}
//               className='bg-orange-500 rounded-full p-2'
//               onClick={() =>
//                 before === ''
//                   ? {}
//                   : document
//                       .getElementById(`${before}`)
//                       ?.scrollIntoView({ behavior: 'smooth' })
//               }
//             />
//           </button>
//           <button className='sm:block hidden'>
//             <Image
//               src='/image/down-arrow.png'
//               alt='down-arrow'
//               height={40}
//               width={40}
//               className='bg-orange-500 rounded-full p-2'
//               onClick={() =>
//                 after === ''
//                   ? {}
//                   : document
//                       .getElementById(`${after}`)
//                       ?.scrollIntoView({ behavior: 'smooth' })
//               }
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// 'use client'
// import React, { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { PortfolioProps } from '@/types'

// export default function Portfolio({
//   image,
//   name,
//   project,
//   framework,
//   live,
//   github,
//   before,
//   after,
//   currentIndex,
// }: PortfolioProps) {
//   const [isBouncing, setIsBouncing] = useState(false)

//   const handleBounceEffect = () => {
//     if (before === '' || after === '') {
//       setIsBouncing(true)
//       setTimeout(() => setIsBouncing(false), 1000) // Reset bounce after 1 second
//     }
//   }

//   return (
//     <div
//       className={`w-full h-screen flex justify-center items-center ${
//         isBouncing ? 'bounce' : ''
//       }`}
//       id='portfolio'
//     >
//       <div className='sm:flex sm:w-full sm:h-screen sm:justify-start sm:items-center'>
//         <div className='w-full sm:w-[50%] sm:h-[150px] h-[250px] relative hover:opacity-75 transition-all duration-500 -z-10'>
//           <Image
//             src={`/image/${image}`}
//             alt='car showcase'
//             fill
//             className='object-contain rounded-3xl'
//           />
//         </div>

//         <div>
//           <div>
//             <div className='text-[30px] font-bold'>{name}</div>
//             <table className=''>
//               <tbody className='flex flex-col gap-3'>
//                 <tr className='w-[200px] flex gap-3'>
//                   <td className='w-[30px] relative -z-10'>
//                     <Image
//                       src={'/image/doc.png'}
//                       alt='doc'
//                       fill
//                       className='object-contain'
//                     />
//                   </td>
//                   <td>
//                     <span className='text-slate-400'>Project : </span>
//                     <span>{project}</span>
//                   </td>
//                 </tr>
//                 <tr className='w-[200px] flex gap-3'>
//                   <td className='w-[30px] relative -z-10'>
//                     <Image
//                       src={'/image/framework.png'}
//                       alt='frame'
//                       fill
//                       className='object-contain '
//                     />
//                   </td>
//                   <td>
//                     <span className='text-slate-400'>Framework : </span>
//                     <span>{framework}</span>
//                   </td>
//                 </tr>
//                 <tr className='w-[200px] flex gap-3'>
//                   <td className='w-full'>
//                     <button className=' group p-1 bg-slate-600 w-full rounded-full hover:bg-orange-400 text-[14px] font-semibold transition-all duration-500'>
//                       <Link
//                         href={`${live}`}
//                         className='w-full h-full group-hover:underline'
//                       >
//                         Live
//                       </Link>
//                     </button>
//                   </td>
//                   <td className='w-full'>
//                     <button className=' group p-1 bg-slate-600 w-full rounded-full hover:bg-orange-400 text-[14px] font-semibold transition-all duration-500'>
//                       <Link
//                         href={`${github}`}
//                         className='w-full h-full group-hover:underline'
//                       >
//                         Github
//                       </Link>
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <div className='flex flex-col gap-3'>
//           <button className='sm:block hidden'>
//             <Image
//               src='/image/up-arrow.png'
//               alt='up-arrow'
//               height={40}
//               width={40}
//               className='bg-orange-500 rounded-full p-2'
//               onClick={() => {
//                 handleBounceEffect()
//                 if (before !== '') {
//                   document
//                     .getElementById(`${before}`)
//                     ?.scrollIntoView({ behavior: 'smooth' })
//                 }
//               }}
//             />
//           </button>
//           <button className='sm:block hidden'>
//             <Image
//               src='/image/down-arrow.png'
//               alt='down-arrow'
//               height={40}
//               width={40}
//               className='bg-orange-500 rounded-full p-2'
//               onClick={() => {
//                 handleBounceEffect()
//                 if (after !== '') {
//                   document
//                     .getElementById(`${after}`)
//                     ?.scrollIntoView({ behavior: 'smooth' })
//                 }
//               }}
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PortfolioProps } from '@/types'

export default function Portfolio({
  image,
  name,
  project,
  framework,
  live,
  github,
  before,
  after,
  currentIndex,
}: PortfolioProps) {
  const [isBouncing, setIsBouncing] = useState(false)

  const handleBounceEffect = () => {
    if (before === '' || after === '') {
      setIsBouncing(true)
      setTimeout(() => setIsBouncing(false), 1000) // Reset bounce after 1 second
    }
  }

  return (
    <div
      className={`w-full h-[100vh] flex justify-center items-center ${
        isBouncing ? 'bounce' : ''
      }`}
      id='portfolio'
    >
      <div className='sm:flex sm:w-full sm:h-screen sm:justify-between sm:items-center gap-8 px-8'>
        {/* Image Section */}
        <div className='w-full sm:w-[50%] sm:h-[350px] h-[250px] relative rounded-xl shadow-lg overflow-hidden'>
          <Image
            src={`/image/${image}`}
            alt='project showcase'
            fill
            className='object-cover transform transition-transform duration-500 hover:scale-105'
          />
        </div>

        {/* Project Details Section */}
        <div className='flex flex-col justify-center items-center sm:items-start sm:w-[50%]'>
          <div className='text-3xl font-semibold text-indigo-600 mb-4'>
            {name}
          </div>

          <table className='text-lg'>
            <tbody className='flex flex-col gap-4'>
              <tr className='flex gap-4 items-center'>
                <td className='w-[30px]'>
                  <Image
                    src='/image/doc.png'
                    alt='doc'
                    height={20}
                    width={20}
                    className='object-contain'
                  />
                </td>
                <td className='text-gray-400 font-semibold'>
                  Project: <span className='text-white'>{project}</span>
                </td>
              </tr>
              <tr className='flex gap-4 items-center'>
                <td className='w-[30px]'>
                  <Image
                    src='/image/framework.png'
                    alt='framework'
                    height={20}
                    width={20}
                    className='object-contain'
                  />
                </td>
                <td className='text-gray-400 font-semibold'>
                  Framework: <span className='text-white'>{framework}</span>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className='mt-6 flex gap-6'>
            <button className='bg-gradient-to-r from-indigo-600 to-blue-500 hover:scale-105 p-2 rounded-full text-white transition-all duration-300'>
              <Link href={live} className='hover:underline'>
                Live
              </Link>
            </button>
            <button className='bg-gradient-to-r from-gray-700 to-gray-600 hover:scale-105 p-2 rounded-full text-white transition-all duration-300'>
              <Link href={github} className='hover:underline'>
                Github
              </Link>
            </button>
          </div>
        </div>

        {/* Scroll Buttons */}
        <div className='flex flex-col gap-6 mt-8'>
          <button
            className='p-3 bg-orange-500 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110'
            onClick={() => {
              handleBounceEffect()
              if (before !== '') {
                document
                  .getElementById(`${before}`)
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <Image
              src='/image/up-arrow.png'
              alt='up-arrow'
              height={40}
              width={40}
              className='object-contain'
            />
          </button>
          <button
            className='p-3 bg-orange-500 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110'
            onClick={() => {
              handleBounceEffect()
              if (after !== '') {
                document
                  .getElementById(`${after}`)
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <Image
              src='/image/down-arrow.png'
              alt='down-arrow'
              height={40}
              width={40}
              className='object-contain'
            />
          </button>
        </div>
      </div>
    </div>
  )
}
