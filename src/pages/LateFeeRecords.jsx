import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const LateFeeRecords = () => {
  return (
    <div className='bg-slate-950 min-h-screen text-white'>
      <Navbar />

      <div className='flex'>
        <Sidebar role='admin' />

        <div className='flex-1 p-8'>
          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            Late Fee Records
          </h1>

          <div className='bg-slate-900 rounded-3xl p-6'>
            <p className='text-xl'>Pending Late Fees : ₹ 5000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LateFeeRecords