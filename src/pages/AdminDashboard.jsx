// import React from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'
// import DashboardCard from '../components/DashboardCard'

// const AdminDashboard = () => {
//   return (
//     <div className='bg-slate-950 min-h-screen text-white'>
//       <Navbar />

//       <div className='flex'>
//         <Sidebar role='admin' />

//         <div className='flex-1 p-8'>
//           <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
//             Admin Dashboard
//           </h1>

//           <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
//             <DashboardCard title='Books' value='1200' />
//             <DashboardCard title='Users' value='350' />
//             <DashboardCard title='Late Fees' value='₹ 5000' />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AdminDashboard

import React from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import DashboardCard from '../components/DashboardCard'

const AdminDashboard = () => {

  const books =
    JSON.parse(
      localStorage.getItem(
        'books'
      )
    ) || []

  const users =
    JSON.parse(
      localStorage.getItem(
        'users'
      )
    ) || []

  const requests =
    JSON.parse(
      localStorage.getItem(
        'borrowRequests'
      )
    ) || []

  const reservations =
    JSON.parse(
      localStorage.getItem(
        'reservations'
      )
    ) || []

  const totalBooks =
    books.reduce(
      (sum, b) =>
        sum + b.quantity,
      0
    )

  const issued =
    requests.filter(
      (r) =>
        r.status ===
        'accepted'
    )

  return (
    <div className='bg-slate-950 min-h-screen text-white'>

      <Navbar />

      <div className='flex'>

        <Sidebar role='admin' />

        <div className='flex-1 p-8'>

          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            Admin Dashboard
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>

            <DashboardCard
              title='Total Books'
              value={totalBooks}
            />

            <DashboardCard
              title='Users'
              value={
                users.length
              }
            />

            <DashboardCard
              title='Issued Books'
              value={
                issued.length
              }
            />

            <DashboardCard
              title='Pending Requests'
              value={
                requests.filter(
                  (r) =>
                    r.status ===
                    'pending'
                ).length
              }
            />

            <DashboardCard
              title='Reservations'
              value={
                reservations.length
              }
            />

          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminDashboard

// import React from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'
// import DashboardCard from '../components/DashboardCard'

// const AdminDashboard = () => {

//   const requests =
//     JSON.parse(
//       localStorage.getItem(
//         'borrowRequests'
//       )
//     ) || []

//   const pendingRequests =
//     requests.filter(
//       (r) => r.status === 'pending'
//     )

//   return (
//     <div className='bg-slate-950 min-h-screen text-white'>

//       <Navbar />

//       <div className='flex'>

//         <Sidebar role='admin' />

//         <div className='flex-1 p-8'>

//           <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
//             Admin Dashboard
//           </h1>

//           <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>

//             <DashboardCard
//               title='Books'
//               value='1200'
//             />

//             <DashboardCard
//               title='Users'
//               value='350'
//             />

//             <DashboardCard
//               title='Late Fees'
//               value='₹ 5000'
//             />

//             <DashboardCard
//               title='Pending Requests'
//               value={
//                 pendingRequests.length
//               }
//             />

//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default AdminDashboard