// import React from 'react'

// const users = [
//   {
//     id: 1,
//     name: 'Pammi Kumari',
//     email: 'pammi@gmail.com',
//     borrowed: 3,
//   },
//   {
//     id: 2,
//     name: 'Rahul Kumar',
//     email: 'rahul@gmail.com',
//     borrowed: 1,
//   },
// ]

// const UserTable = () => {
//   return (
//     <div className='bg-slate-900 rounded-3xl overflow-hidden border border-slate-800'>
//       <table className='w-full'>
//         <thead className='bg-slate-800'>
//           <tr>
//             <th className='p-4 text-left'>Name</th>
//             <th className='p-4 text-left'>Email</th>
//             <th className='p-4 text-left'>Borrowed Books</th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.map((user) => (
//             <tr
//               key={user.id}
//               className='border-t border-slate-800'
//             >
//               <td className='p-4'>{user.name}</td>
//               <td className='p-4'>{user.email}</td>
//               <td className='p-4'>{user.borrowed}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default UserTable


// import React from 'react'

// const UserTable = () => {
//   const users =
//     JSON.parse(localStorage.getItem('users')) ||
//     []

//   return (
//     <div className='bg-slate-900 rounded-3xl overflow-hidden border border-slate-800'>
//       <table className='w-full'>
//         <thead className='bg-slate-800'>
//           <tr>
//             <th className='p-4 text-left'>
//               Name
//             </th>

//             <th className='p-4 text-left'>
//               Email
//             </th>

//             <th className='p-4 text-left'>
//               Role
//             </th>

//             <th className='p-4 text-left'>
//               Borrowed Books
//             </th>
//           </tr>
//         </thead>

//         <tbody>
//           {users.map((user) => (
//             <tr
//               key={user.id}
//               className='border-t border-slate-800'
//             >
//               <td className='p-4'>
//                 {user.name}
//               </td>

//               <td className='p-4'>
//                 {user.email}
//               </td>

//               <td className='p-4 capitalize text-yellow-400'>
//                 {user.role}
//               </td>

//               <td className='p-4'>
//                 {user.borrowedBooks.length}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default UserTable
import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const UserTable = () => {

  const { deleteUser, user } =
    useAuth()

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem('users')) || []
  )

  // Only admin's own users
  const normalUsers = users.filter(
    (u) =>
      u.role !== 'admin' &&
      u.adminId === user?.adminId
  )

  const handleDelete = (id) => {

    deleteUser(id)

    const updated =
      users.filter((u) => u.id !== id)

    setUsers(updated)
  }

  return (
    <div className='bg-slate-900 rounded-3xl overflow-hidden border border-slate-800'>

      <table className='w-full'>

        <thead className='bg-slate-800'>
          <tr>

            <th className='p-4 text-left'>
              Name
            </th>

            <th className='p-4 text-left'>
              Email
            </th>

            <th className='p-4 text-left'>
              Borrowed
            </th>

            <th className='p-4 text-left'>
              Issued
            </th>

            <th className='p-4 text-left'>
              Returned
            </th>

            <th className='p-4 text-left'>
              Fee
            </th>

            <th className='p-4 text-left'>
              Action
            </th>

          </tr>
        </thead>

        <tbody>

          {normalUsers.length > 0 ? (
            normalUsers.map((u) => (
              <tr
                key={u.id}
                className='border-t border-slate-800'
              >

                <td className='p-4'>
                  {u.name}
                </td>

                <td className='p-4'>
                  {u.email}
                </td>

                <td className='p-4'>
                  {u.borrowedBooks?.length || 0}
                </td>

                <td className='p-4'>
                  {u.issuedBooks?.length || 0}
                </td>

                <td className='p-4'>
                  {u.returnedBooks?.length || 0}
                </td>

                <td className='p-4 text-red-400'>
                  ₹ {u.pendingFee || 0}
                </td>

                <td className='p-4'>

                  <button
                    onClick={() =>
                      handleDelete(u.id)
                    }
                    className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg'
                  >
                    Remove
                  </button>

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan='7'
                className='p-6 text-center text-slate-400'
              >
                No users found
              </td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  )
}

export default UserTable

// import React, { useState } from 'react'
// import { useAuth } from '../context/AuthContext'

// const UserTable = () => {
//   const { deleteUser } = useAuth()

//   const [users, setUsers] = useState(
//     JSON.parse(localStorage.getItem('users')) || []
//   )

//   // Remove admins
//   const normalUsers = users.filter(
//     (user) => user.role !== 'admin'
//   )

//   const handleDelete = (id) => {

//     deleteUser(id)

//     const updatedUsers =
//       users.filter((user) => user.id !== id)

//     setUsers(updatedUsers)
//   }

//   return (
//     <div className='bg-slate-900 rounded-3xl overflow-hidden border border-slate-800'>

//       <table className='w-full'>

//         <thead className='bg-slate-800'>
//           <tr>

//             <th className='p-4 text-left'>
//               Name
//             </th>

//             <th className='p-4 text-left'>
//               Email
//             </th>

//             <th className='p-4 text-left'>
//               Borrowed
//             </th>

//             <th className='p-4 text-left'>
//               Issued
//             </th>

//             <th className='p-4 text-left'>
//               Returned
//             </th>

//             <th className='p-4 text-left'>
//               Fee
//             </th>

//             <th className='p-4 text-left'>
//               Action
//             </th>

//           </tr>
//         </thead>

//         <tbody>

//           {normalUsers.length > 0 ? (
//             normalUsers.map((user) => (
//               <tr
//                 key={user.id}
//                 className='border-t border-slate-800'
//               >

//                 <td className='p-4'>
//                   {user.name}
//                 </td>

//                 <td className='p-4'>
//                   {user.email}
//                 </td>

//                 <td className='p-4'>
//                   {user.borrowedBooks?.length || 0}
//                 </td>

//                 <td className='p-4'>
//                   {user.issuedBooks?.length || 0}
//                 </td>

//                 <td className='p-4'>
//                   {user.returnedBooks?.length || 0}
//                 </td>

//                 <td className='p-4 text-red-400'>
//                   ₹ {user.pendingFee || 0}
//                 </td>

//                 <td className='p-4'>

//                   <button
//                     onClick={() =>
//                       handleDelete(user.id)
//                     }
//                     className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg'
//                   >
//                     Remove
//                   </button>

//                 </td>

//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan='7'
//                 className='p-6 text-center text-slate-400'
//               >
//                 No users found
//               </td>
//             </tr>
//           )}

//         </tbody>

//       </table>

//     </div>
//   )
// }

// export default UserTable