// import React from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'

// const ReturnedBooks = () => {
//   return (
//     <div className='bg-slate-950 min-h-screen text-white'>
//       <Navbar />

//       <div className='flex'>
//         <Sidebar role='user' />

//         <div className='flex-1 p-8'>
//           <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
//             Returned Books
//           </h1>

//           <div className='bg-slate-900 p-6 rounded-3xl'>
//             <p className='text-lg'>
//               Total Returned Books : 10
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ReturnedBooks

import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAuth } from '../context/AuthContext'

const ReturnedBooks = () => {
  const { user } = useAuth()

  return (
    <div className='bg-slate-950 min-h-screen text-white'>
      <Navbar />

      <div className='flex'>
        <Sidebar role='user' />

        <div className='flex-1 p-8'>

          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            Returned Books
          </h1>

          {/* Total Returned */}
          <div className='bg-slate-900 border border-slate-800 rounded-3xl p-6 mb-8'>
            <h2 className='text-2xl font-semibold'>
              Total Returned Books
            </h2>

            <p className='text-5xl font-bold text-green-400 mt-4'>
              {user?.returnedBooks?.length || 0}
            </p>
          </div>

          {/* Returned Books List */}
          <div className='bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden'>
            <table className='w-full'>

              <thead className='bg-slate-800'>
                <tr>
                  <th className='p-4 text-left'>
                    Book Name
                  </th>

                  <th className='p-4 text-left'>
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {user?.returnedBooks?.length > 0 ? (
                  user.returnedBooks.map(
                    (book, index) => (
                      <tr
                        key={index}
                        className='border-t border-slate-800'
                      >
                        <td className='p-4'>
                          {book}
                        </td>

                        <td className='p-4 text-green-400'>
                          Returned
                        </td>
                      </tr>
                    )
                  )
                ) : (
                  <tr>
                    <td
                      colSpan='2'
                      className='p-6 text-center text-slate-400'
                    >
                      No returned books
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ReturnedBooks