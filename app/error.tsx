'use client'

import React from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
      <h2 className='text-2xl font-bold mb-4'>Something went wrong!</h2>
      <p className='mb-4'>{error.message}</p>
      <button
        onClick={() => reset()}
        className='px-4 py-2 bg-orange-500 rounded hover:bg-orange-600 transition'
      >
        Try again
      </button>
    </div>
  )
}
