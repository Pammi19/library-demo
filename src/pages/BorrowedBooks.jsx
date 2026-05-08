// import React from 'react'
// import Navbar from '../components/Navbar'
// import Sidebar from '../components/Sidebar'

// const BorrowedBooks = () => {
//   return (
//     <div className='bg-slate-950 min-h-screen text-white'>
//       <Navbar />

//       <div className='flex'>
//         <Sidebar role='user' />

//         <div className='flex-1 p-8'>
//           <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
//             Borrowed Books
//           </h1>

//           <div className='bg-slate-900 rounded-3xl overflow-hidden'>
//             <table className='w-full'>
//               <thead className='bg-slate-800'>
//                 <tr>
//                   <th className='p-4 text-left'>Book</th>
//                   <th className='p-4 text-left'>Issue Date</th>
//                   <th className='p-4 text-left'>Return Date</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr className='border-t border-slate-800'>
//                   <td className='p-4'>Operating System</td>
//                   <td className='p-4'>01-05-2026</td>
//                   <td className='p-4'>15-05-2026</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BorrowedBooks

import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAuth } from '../context/AuthContext'

const BorrowedBooks = () => {
  const { user } = useAuth()

  return (
    <div className='bg-slate-950 min-h-screen text-white'>
      <Navbar />

      <div className='flex'>
        <Sidebar role='user' />

        <div className='flex-1 p-8'>
          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            My Borrowed Books
          </h1>

          <div className='bg-slate-900 rounded-3xl overflow-hidden'>
            <table className='w-full'>
              <thead className='bg-slate-800'>
                <tr>
                  <th className='p-4 text-left'>
                    Book
                  </th>

                  <th className='p-4 text-left'>
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {user?.borrowedBooks?.length > 0 ? (
                  user.borrowedBooks.map(
                    (book, index) => (
                      <tr
                        key={index}
                        className='border-t border-slate-800'
                      >
                        <td className='p-4'>
                          {book}
                        </td>

                        <td className='p-4 text-yellow-400'>
                          Borrowed
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
                      No borrowed books
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

export default BorrowedBooks