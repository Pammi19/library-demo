// import React from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'

// const PaymentStatus = () => {
//   return (
//     <div className='bg-slate-950 min-h-screen text-white'>
//       <Navbar />

//       <div className='flex'>
//         <Sidebar role='user' />

//         <div className='flex-1 p-8'>
//           <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
//             Payment Status
//           </h1>

//           <div className='bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-lg'>
//             <h2 className='text-2xl font-semibold'>
//               Pending Fee
//             </h2>

//             <p className='text-5xl font-bold text-red-400 mt-4'>
//               ₹ 200
//             </p>

//             <button className='mt-8 bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-xl'>
//               Pay Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PaymentStatus

import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAuth } from '../context/AuthContext'

const PaymentStatus = () => {
  const { user } = useAuth()

  return (
    <div className='bg-slate-950 min-h-screen text-white'>
      <Navbar />

      <div className='flex'>
        <Sidebar role='user' />

        <div className='flex-1 p-8'>
          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            Payment Status
          </h1>

          <div className='bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-lg'>
            <h2 className='text-2xl font-semibold'>
              Pending Fee
            </h2>

            <p className='text-5xl font-bold text-red-400 mt-4'>
              ₹ {user?.pendingFee || 0}
            </p>

            <button className='mt-8 bg-green-500 hover:bg-green-400 text-black font-bold py-4 px-8 rounded-xl'>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentStatus