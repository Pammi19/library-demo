// import React from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'

// const IssuedBooks = () => {
//   return (
//     <div className='bg-slate-950 min-h-screen text-white'>
//       <Navbar />

//       <div className='flex'>
//         <Sidebar role='user' />

//         <div className='flex-1 p-8'>
//           <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
//             Issued Books
//           </h1>

//           <div className='bg-slate-900 p-6 rounded-3xl'>
//             <p className='text-lg'>
//               Total Issued Books : 5
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default IssuedBooks

import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAuth } from '../context/AuthContext'

const IssuedBooks = () => {
  const { user } = useAuth()

  return (
    <div className='bg-slate-950 min-h-screen text-white'>
      <Navbar />

      <div className='flex'>
        <Sidebar role='user' />

        <div className='flex-1 p-8'>

          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            Issued Books
          </h1>

          {/* Total Issued */}
          <div className='bg-slate-900 border border-slate-800 rounded-3xl p-6 mb-8'>
            <h2 className='text-2xl font-semibold'>
              Total Issued Books
            </h2>

            <p className='text-5xl font-bold text-yellow-400 mt-4'>
              {user?.issuedBooks?.length || 0}
            </p>
          </div>

          {/* Issued Book Names */}
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
                {user?.issuedBooks?.length > 0 ? (
                  user.issuedBooks.map(
                    (book, index) => (
                      <tr
                        key={index}
                        className='border-t border-slate-800'
                      >
                        <td className='p-4'>
                          {book}
                        </td>

                        <td className='p-4 text-yellow-400'>
                          Issued
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
                      No issued books
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

export default IssuedBooks