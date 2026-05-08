// import React from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'
// import DashboardCard from '../components/DashboardCard'

// const UserDashboard = () => {
//   return (
//     <div className='bg-slate-950 min-h-screen text-white'>
//       <Navbar />

//       <div className='flex'>
//         <Sidebar role='user' />

//         <div className='flex-1 p-8'>
//           <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
//             User Dashboard
//           </h1>

//           <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//             <DashboardCard title='Borrowed Books' value='5' />
//             <DashboardCard title='Returned Books' value='10' />
//             <DashboardCard title='Pending Fees' value='₹ 200' />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserDashboard

import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DashboardCard from '../components/DashboardCard'
import { useAuth } from '../context/AuthContext'

const UserDashboard = () => {
  const { user } = useAuth()

  return (
    <div className='bg-slate-950 min-h-screen text-white'>
      <Navbar />

      <div className='flex'>
        <Sidebar role='user' />

        <div className='flex-1 p-8'>
          <h1 className='text-4xl font-bold text-yellow-400 mb-3'>
            Welcome {user?.name}
          </h1>

          <p className='text-slate-400 mb-10'>
            Your personal library dashboard
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <DashboardCard
              title='Borrowed Books'
              value={user?.borrowedBooks?.length || 0}
            />

            <DashboardCard
              title='Returned Books'
              value={user?.returnedBooks?.length || 0}
            />

            <DashboardCard
              title='Pending Fees'
              value={`₹ ${user?.pendingFee || 0}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard