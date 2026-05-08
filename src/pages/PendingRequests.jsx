import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAuth } from '../context/AuthContext'

const PendingRequests = () => {

  const {
    user,
    acceptRequest,
    rejectRequest,
  } = useAuth()

  const [requests, setRequests] =
    useState(
      JSON.parse(
        localStorage.getItem(
          'borrowRequests'
        )
      ) || []
    )

  const adminRequests =
    requests.filter(
      (r) =>
        r.adminId === user?.adminId
    )

  const handleAccept = (id) => {

    acceptRequest(id)

    const updated =
      requests.map((r) =>
        r.id === id
          ? {
              ...r,
              status: 'accepted',
            }
          : r
      )

    setRequests(updated)
  }

  const handleReject = (id) => {

    rejectRequest(id)

    const updated =
      requests.map((r) =>
        r.id === id
          ? {
              ...r,
              status: 'rejected',
            }
          : r
      )

    setRequests(updated)
  }

  return (
    <div className='bg-slate-950 min-h-screen text-white'>

      <Navbar />

      <div className='flex'>

        <Sidebar role='admin' />

        <div className='flex-1 p-8'>

          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            Pending Requests
          </h1>

          <div className='bg-slate-900 rounded-3xl overflow-hidden border border-slate-800'>

            <table className='w-full'>

              <thead className='bg-slate-800'>
                <tr>
                  <th className='p-4 text-left'>
                    User
                  </th>

                  <th className='p-4 text-left'>
                    Book
                  </th>

                  <th className='p-4 text-left'>
                    Status
                  </th>

                  <th className='p-4 text-left'>
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>

                {adminRequests.map(
                  (request) => (
                    <tr
                      key={request.id}
                      className='border-t border-slate-800'
                    >

                      <td className='p-4'>
                        {request.userName}
                      </td>

                      <td className='p-4'>
                        {request.bookName}
                      </td>

                      <td className='p-4 capitalize'>
                        {request.status}
                      </td>

                      <td className='p-4 flex gap-3'>

                        <button
                          onClick={() =>
                            handleAccept(
                              request.id
                            )
                          }
                          className='bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg'
                        >
                          ✔
                        </button>

                        <button
                          onClick={() =>
                            handleReject(
                              request.id
                            )
                          }
                          className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg'
                        >
                          ✖
                        </button>

                      </td>

                    </tr>
                  )
                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )
}

export default PendingRequests