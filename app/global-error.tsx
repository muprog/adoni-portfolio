'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
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
      </body>
    </html>
  )
}
