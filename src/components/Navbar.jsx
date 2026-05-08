import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { logout, user } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className='w-full bg-slate-900 border-b border-slate-800 px-8 py-4 flex items-center justify-between'>
      
      {/* Left Section */}
      <div>
        <h1 className='text-3xl font-bold text-yellow-400'>
          Library Management
        </h1>

        <p className='text-slate-400 text-sm mt-1'>
          Welcome {user?.role}
        </p>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-5'>
        
        <div className='bg-slate-800 px-4 py-2 rounded-xl'>
          <p className='text-sm text-slate-300'>
            Role:
            <span className='text-yellow-400 font-semibold ml-2 capitalize'>
              {user?.role}
            </span>
          </p>
        </div>

        <button
          onClick={handleLogout}
          className='bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold transition duration-300'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Navbar

