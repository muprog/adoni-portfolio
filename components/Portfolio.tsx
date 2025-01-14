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
}: PortfolioProps) {
  return (
    <div className='w-full flex justify-center items-center'>
      <div>
        <div className='w-[250px] h-[250px] relative'>
          <Image
            src={`/image/${image}`}
            alt='car showcase'
            fill
            className='object-contain'
          />
        </div>

        <div>
          <div>
            <div className='text-[30px] font-bold'>{name}</div>
            <table className=''>
              <tbody className='flex flex-col gap-3'>
                <tr className='w-[200px] flex gap-3'>
                  <td className='w-[30px] relative'>
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
                  <td className='w-[30px] relative'>
                    <Image
                      src={'/image/framework.png'}
                      alt='frame'
                      fill
                      className='object-contain'
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
      </div>
    </div>
  )
}
