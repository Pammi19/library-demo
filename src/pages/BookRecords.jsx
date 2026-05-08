import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import BookTable from '../components/BookTable'

const BookRecords = () => {
  return (
    <div className='bg-slate-950 min-h-screen text-white'>
      <Navbar />

      <div className='flex'>
        <Sidebar role='admin' />

        <div className='flex-1 p-8'>
          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            Book Records
          </h1>

          <BookTable />
        </div>
      </div>
    </div>
  )
}

export default BookRecords