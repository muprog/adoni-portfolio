// import React from 'react'
// import Image from 'next/image'
// export default function About() {
//   return (
//     <div
//       className='transition-all duration-100 ease-in-out w-full h-screen sm:flex sm:justify-center sm:items-center'
//       id='about'
//     >
//       <div className='sm:w-[50%] sm:h-screen flex justify-center items-center p-5 transition-all duration-500 ease-in-out'>
//         <div className='sm:w-[80%] sm:h-[80%] relative w-[100px] h-[100px] rounded-full'>
//           <Image
//             src={'/image/adoni.JPG'}
//             alt='Adoniyas'
//             fill
//             className='object-left-top object-cover sm:object-contain rounded-full sm:rounded-3xl'
//           />
//         </div>
//       </div>

//       <div className='w-full flex flex-col justify-start'>
//         <div className='transition-all duration-100 ease-in-out w-full flex justify-center items-center sm:justify-start'>
//           <h2 className='text-xl font-bold flex flex-col'>
//             <span className='text-orange-400'>Adoniyas</span> <span>Seid</span>
//           </h2>
//         </div>
//         <div className='transition-all duration-100 ease-in-out w-full flex justify-center items-center sm:justify-start'>
//           <ul className='list-disc list-inside text-orange-400 text-[12px] sm:grid sm:grid-cols-2 sm:gap-5'>
//             <li className='font-semibold'>
//               <span className='text-slate-400'>Age : </span>
//               <span className='text-white'>24 Years</span>
//             </li>
//             <li>
//               <span className='text-slate-400'>Nationality : </span>
//               <span className='text-white'>Ethiopian</span>
//             </li>
//             <li>
//               <span className='text-slate-400'>Freelance : </span>
//               <span className='text-white'>Available</span>
//             </li>
//             <li>
//               <span className='text-slate-400'>Languages : </span>
//               <span className='text-white'>Amharic & English</span>
//             </li>
//             <li>
//               <span className='text-slate-400'>Education : </span>
//               <span className='text-white'>Bachelor of Computer Science.</span>
//             </li>
//             <li>
//               <span className='text-slate-400'>Studied At :</span>
//               <span className='text-white'> University of Gondor</span>
//             </li>
//             <li>
//               <span className='text-slate-400'>Phone : </span>
//               <span className='text-white'>09 89 13 04 78</span>
//             </li>
//             <li>
//               <span className='text-slate-400'>Email : </span>
//               <span className='text-white'>
//                 <a className=''>muprog4@gmail.com</a>
//               </span>
//             </li>
//             <li>
//               <span className='text-slate-400'>Address : </span>
//               <span className='text-white'>Addis Ababa, Ethiopia</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div
      className='transition-all duration-100 ease-in-out w-full h-screen sm:flex sm:justify-center sm:items-center bg-gray-900'
      id='about'
    >
      <div className='sm:w-[50%] sm:h-screen flex justify-center items-center p-6 transition-all duration-500 ease-in-out '>
        <div className='sm:w-[80%]  relative w-[120px] h-[120px]  sm:h-[80vh]  overflow-hidden'>
          <Image
            src={'/image/adoni.JPG'}
            alt='Adoniyas'
            fill
            className=' object-cover object-top sm:object-contain rounded-full  sm:rounded-none shadow-xl'
          />
        </div>
      </div>

      <div className='w-full sm:w-[50%] flex flex-col justify-center items-start p-6'>
        <div className='transition-all duration-100 ease-in-out w-full flex justify-center items-center sm:justify-start mb-5'>
          <h2 className='text-3xl font-bold text-white flex flex-col text-center sm:text-left'>
            <span className='text-orange-400'>Adoniyas</span> <span>Seid</span>
          </h2>
        </div>
        <div className='transition-all duration-100 ease-in-out w-full sm:justify-start'>
          <ul className='list-disc list-inside text-orange-400 text-[14px] sm:text-lg sm:grid sm:grid-cols-2 sm:gap-5'>
            <li className='font-semibold text-white'>
              <span className='text-slate-400'>Age : </span>
              <span>24 Years</span>
            </li>
            <li className='font-semibold text-white'>
              <span className='text-slate-400'>Nationality : </span>
              <span>Ethiopian</span>
            </li>
            <li className='font-semibold text-white'>
              <span className='text-slate-400'>Freelance : </span>
              <span>Available</span>
            </li>
            <li className='font-semibold text-white'>
              <span className='text-slate-400'>Languages : </span>
              <span>Amharic & English</span>
            </li>
            <li className='font-semibold text-white'>
              <span className='text-slate-400'>Education : </span>
              <span>Bachelor of Computer Science</span>
            </li>
            <li className='font-semibold text-white'>
              <span className='text-slate-400'>Studied At :</span>
              <span>University of Gondar</span>
            </li>
            <li className='font-semibold text-white'>
              <span className='text-slate-400'>Phone : </span>
              <span>09 89 13 04 78</span>
            </li>
            <li className='font-semibold text-white'>
              <span className='text-slate-400'>Email : </span>
              <span>
                <a
                  href='mailto:muprog4@gmail.com'
                  className='underline hover:text-orange-400'
                >
                  muprog4@gmail.com
                </a>
              </span>
            </li>
            <li className='font-semibold text-white'>
              <span className='text-slate-400'>Address : </span>
              <span>Addis Ababa, Ethiopia</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
