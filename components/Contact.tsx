// import Link from 'next/link'
// import React from 'react'
// import Image from 'next/image'
// export default function Contact() {
//   return (
//     <div
//       className='w-full h-screen sm:mt-0 flex justify-center items-center mt-[80px] sm:pb-0 pb-24'
//       id='contact'
//     >
//       <div className='transition-all duration-100 ease-in-out mt-[20px] w-[90%]  flex flex-col gap-5 sm:grid sm:grid-cols-2'>
//         <div className='w-full flex justify-center items-center'>
//           <fieldset className='w-full h-full  bg-slate-900 p-3 text-center rounded-2xl group'>
//             <legend className='w-[30px] h-[30px] relative rounded-full'>
//               <Image
//                 src={'/image/contact.png'}
//                 alt='contact'
//                 fill
//                 className='object-contain rounded-full'
//               />
//             </legend>
//             <div>
//               <div>Phone</div>
//               <div className='group-hover:underline'>09 89 13 04 78</div>
//             </div>
//           </fieldset>
//         </div>
//         <fieldset className='w-full h-full  bg-slate-900 p-3 text-center rounded-2xl group'>
//           <legend className='w-[30px] h-[30px] relative rounded-full'>
//             <Image
//               src={'/image/mail.png'}
//               alt='contact'
//               fill
//               className='object-contain rounded-full'
//             />
//           </legend>
//           <div className='w-full flex justify-center items-center'>
//             <div>
//               <div>Email</div>
//               <div className='group-hover:underline'>muprog4@gmail.com</div>
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className='w-full h-full  bg-slate-900 p-3 text-center rounded-2xl group'>
//           <legend className='w-[30px] h-[30px] relative rounded-full'>
//             <Image
//               src={'/image/location.jpeg'}
//               alt='contact'
//               fill
//               className='object-contain rounded-full'
//             />
//           </legend>
//           <div className='w-full flex justify-center items-center'>
//             <div>
//               <div>Address</div>
//               <div className='group-hover:underline'>Ethiopia, Addis Ababa</div>
//             </div>
//           </div>
//         </fieldset>

//         <fieldset className='w-full h-full  bg-slate-900 p-3 text-center rounded-2xl group'>
//           <legend className='w-[30px] h-[30px] relative rounded-full'>
//             <Image
//               src={'/image/github.jpg'}
//               alt='contact'
//               fill
//               className='object-contain rounded-full'
//             />
//           </legend>
//           <div className='w-full flex justify-center items-center'>
//             <div>
//               <div>Github</div>
//               <div className='group-hover:underline'>
//                 <Link href='https://github.com/muprog/'>Muprog</Link>
//               </div>
//             </div>
//           </div>
//         </fieldset>
//       </div>
//     </div>
//   )
// }

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Contact() {
  return (
    <div
      className='w-full h-screen bg-gray-900 sm:mt-0 flex justify-center items-center mt-[80px] sm:pb-0 pb-24'
      id='contact'
    >
      <div className='transition-all duration-100 ease-in-out mt-[20px] w-[90%] sm:w-[80%] flex flex-col gap-6 sm:grid sm:grid-cols-2 sm:gap-8'>
        {/* Phone */}
        <div className='w-full flex justify-center items-center'>
          <fieldset className='w-full h-full bg-slate-800 p-5 text-center rounded-3xl transition-all duration-300 ease-in-out hover:bg-slate-700 group'>
            <legend className='w-[40px] h-[40px] relative rounded-full bg-orange-400 flex justify-center items-center shadow-lg'>
              <Image
                src='/image/contact.png'
                alt='contact'
                fill
                className='object-contain rounded-full'
              />
            </legend>
            <div className='text-white mt-4'>
              <div className='text-lg font-semibold'>Phone</div>
              <div className='text-sm group-hover:underline mt-1'>
                09 89 13 04 78
              </div>
            </div>
          </fieldset>
        </div>

        {/* Email */}
        <div className='w-full flex justify-center items-center'>
          <fieldset className='w-full h-full bg-slate-800 p-5 text-center rounded-3xl transition-all duration-300 ease-in-out hover:bg-slate-700 group'>
            <legend className='w-[40px] h-[40px] relative rounded-full bg-orange-400 flex justify-center items-center shadow-lg'>
              <Image
                src='/image/mail.png'
                alt='contact'
                fill
                className='object-contain rounded-full'
              />
            </legend>
            <div className='text-white mt-4'>
              <div className='text-lg font-semibold'>Email</div>
              <div className='text-sm group-hover:underline mt-1'>
                <Link href='mailto:muprog4@gmail.com'>muprog4@gmail.com</Link>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Address */}
        <div className='w-full flex justify-center items-center'>
          <fieldset className='w-full h-full bg-slate-800 p-5 text-center rounded-3xl transition-all duration-300 ease-in-out hover:bg-slate-700 group'>
            <legend className='w-[40px] h-[40px] relative rounded-full bg-orange-400 flex justify-center items-center shadow-lg'>
              <Image
                src='/image/location.jpeg'
                alt='contact'
                fill
                className='object-contain rounded-full'
              />
            </legend>
            <div className='text-white mt-4'>
              <div className='text-lg font-semibold'>Address</div>
              <div className='text-sm group-hover:underline mt-1'>
                Ethiopia, Addis Ababa
              </div>
            </div>
          </fieldset>
        </div>

        {/* Github */}
        <div className='w-full flex justify-center items-center'>
          <fieldset className='w-full h-full bg-slate-800 p-5 text-center rounded-3xl transition-all duration-300 ease-in-out hover:bg-slate-700 group'>
            <legend className='w-[40px] h-[40px] relative rounded-full bg-orange-400 flex justify-center items-center shadow-lg'>
              <Image
                src='/image/github.jpg'
                alt='contact'
                fill
                className='object-contain rounded-full'
              />
            </legend>
            <div className='text-white mt-4'>
              <div className='text-lg font-semibold'>Github</div>
              <div className='text-sm group-hover:underline mt-1'>
                <Link href='https://github.com/muprog/'>Muprog</Link>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}
