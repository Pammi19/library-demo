import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import UserTable from '../components/UserTable'

const UserRecords = () => {
  return (
    <div className='bg-slate-950 min-h-screen text-white'>
      <Navbar />

      <div className='flex'>
        <Sidebar role='admin' />

        <div className='flex-1 p-8'>
          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            User Records
          </h1>

          <UserTable />
        </div>
      </div>
    </div>
  )
}

export default UserRecords