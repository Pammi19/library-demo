import React from 'react'

const fees = [
  {
    id: 1,
    user: 'Pammi Kumari',
    amount: 200,
    status: 'Pending',
  },
  {
    id: 2,
    user: 'Rahul Kumar',
    amount: 100,
    status: 'Paid',
  },
]

const FeeTable = () => {
  return (
    <div className='bg-slate-900 rounded-3xl overflow-hidden border border-slate-800'>
      <table className='w-full'>
        <thead className='bg-slate-800'>
          <tr>
            <th className='p-4 text-left'>User</th>
            <th className='p-4 text-left'>Amount</th>
            <th className='p-4 text-left'>Status</th>
          </tr>
        </thead>

        <tbody>
          {fees.map((fee) => (
            <tr
              key={fee.id}
              className='border-t border-slate-800'
            >
              <td className='p-4'>{fee.user}</td>

              <td className='p-4'>₹ {fee.amount}</td>

              <td
                className={`p-4 ${
                  fee.status === 'Paid'
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {fee.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FeeTable