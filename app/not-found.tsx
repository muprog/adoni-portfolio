'use client'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white'>
      <h2 className='text-2xl font-bold mb-4'>404 - Page Not Found</h2>
      <p className='mb-4'>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  )
}
