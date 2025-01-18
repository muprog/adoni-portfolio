'use client'
import React from 'react'
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
}: PortfolioProps) {
  return (
    <div
      className='w-full h-screen flex justify-center items-center'
      id='portfolio'
    >
      <div className='sm:flex sm:w-full sm:h-screen sm:justify-start sm:items-center'>
        <div className='w-full sm:w-[50%] sm:h-[150px] h-[250px] relative hover:opacity-75 transition-all duration-500 -z-10'>
          <Image
            src={`/image/${image}`}
            alt='car showcase'
            fill
            className='object-contain rounded-3xl'
          />
        </div>

        <div>
          <div>
            <div className='text-[30px] font-bold'>{name}</div>
            <table className=''>
              <tbody className='flex flex-col gap-3'>
                <tr className='w-[200px] flex gap-3'>
                  <td className='w-[30px] relative -z-10'>
                    <Image
                      src={'/image/doc.png'}
                      alt='doc'
                      fill
                      className='object-contain'
                    />
                  </td>
                  <td>
                    <span className='text-slate-400'>Project : </span>
                    <span>{project}</span>
                  </td>
                </tr>
                <tr className='w-[200px] flex gap-3'>
                  <td className='w-[30px] relative -z-10'>
                    <Image
                      src={'/image/framework.png'}
                      alt='frame'
                      fill
                      className='object-contain '
                    />
                  </td>
                  <td>
                    <span className='text-slate-400'>Framework : </span>
                    <span>{framework}</span>
                  </td>
                </tr>
                <tr className='w-[200px] flex gap-3'>
                  <td className='w-full'>
                    <button className=' group p-1 bg-slate-600 w-full rounded-full hover:bg-orange-400 text-[14px] font-semibold transition-all duration-500'>
                      <Link
                        href={`${live}`}
                        className='w-full h-full group-hover:underline'
                      >
                        Live
                      </Link>
                    </button>
                  </td>
                  <td className='w-full'>
                    <button className=' group p-1 bg-slate-600 w-full rounded-full hover:bg-orange-400 text-[14px] font-semibold transition-all duration-500'>
                      <Link
                        href={`${github}`}
                        className='w-full h-full group-hover:underline'
                      >
                        Github
                      </Link>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <button className='sm:block hidden'>
            <Image
              src='/image/up-arrow.png'
              alt='up-arrow'
              height={40}
              width={40}
              className='bg-orange-500 rounded-full p-2'
              onClick={() =>
                document
                  .getElementById(`${before}`)
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </button>
          <button className='sm:block hidden'>
            <Image
              src='/image/down-arrow.png'
              alt='down-arrow'
              height={40}
              width={40}
              className='bg-orange-500 rounded-full p-2'
              onClick={() =>
                document
                  .getElementById(`${after}`)
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </button>
        </div>
      </div>
    </div>
  )
}
