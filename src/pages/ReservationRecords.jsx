import React from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const ReservationRecords = () => {

  const reservations =
    JSON.parse(
      localStorage.getItem(
        'reservations'
      )
    ) || []

  return (
    <div className='bg-slate-950 min-h-screen text-white'>

      <Navbar />

      <div className='flex'>

        <Sidebar role='admin' />

        <div className='flex-1 p-8'>

          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            Reservation Records
          </h1>

          {reservations.length === 0 ? (

            <div className='bg-slate-900 p-8 rounded-3xl text-center text-slate-400'>
              No Reservations Found
            </div>

          ) : (

            <div className='bg-slate-900 rounded-3xl overflow-hidden'>

              <table className='w-full'>

                <thead className='bg-slate-800'>

                  <tr>

                    <th className='p-4'>
                      User
                    </th>

                    <th className='p-4'>
                      Book
                    </th>

                    <th className='p-4'>
                      Category
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {reservations.map(
                    (reservation) => (

                      <tr
                        key={reservation.id}
                        className='border-t border-slate-800'
                      >

                        <td className='p-4'>
                          {
                            reservation.userName
                          }
                        </td>

                        <td className='p-4'>
                          {
                            reservation.book?.title
                          }
                        </td>

                        <td className='p-4'>
                          {
                            reservation.book?.category
                          }
                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </div>

      </div>

    </div>
  )
}

export default ReservationRecords