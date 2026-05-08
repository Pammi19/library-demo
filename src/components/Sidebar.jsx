

import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ role }) => {

  return (
    <div className='w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-5'>

      <h2 className='text-2xl font-bold text-yellow-400 mb-8'>
        My Library
      </h2>

      <div className='flex flex-col gap-3'>

        {/* ADMIN MENU */}
        {role === 'admin' && (
          <>

            <Link
              to='/admin-dashboard'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Dashboard
            </Link>

            <Link
              to='/manage-books'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Manage Books
            </Link>

            <Link
              to='/user-records'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              User Records
            </Link>

            <Link
              to='/pending-requests'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Pending Requests
            </Link>

            <Link
              to='/reservation-records'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Reservation Records
            </Link>

            <Link
              to='/fee-records'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Fee Records
            </Link>

          </>
        )}

        {/* USER MENU */}
        {role === 'user' && (
          <>

            <Link
              to='/user-dashboard'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Dashboard
            </Link>

            <Link
              to='/available-books'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Available Books
            </Link>

            <Link
              to='/borrowed-books'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Borrowed Books
            </Link>

            <Link
              to='/issued-books'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Issued Books
            </Link>

            <Link
              to='/returned-books'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Returned Books
            </Link>

            <Link
              to='/payment-status'
              className='bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl'
            >
              Payment Status
            </Link>


          </>
        )}

      </div>

    </div>
  )
}

export default Sidebar