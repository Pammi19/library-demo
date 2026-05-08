import React from 'react'

const books = [
  {
    id: 1,
    title: 'Data Structures',
    author: 'Cormen',
    status: 'Available',
  },
  {
    id: 2,
    title: 'Operating System',
    author: 'Galvin',
    status: 'Issued',
  },
]

const BookTable = () => {
  return (
    <div className='bg-slate-900 rounded-3xl overflow-hidden border border-slate-800'>
      <table className='w-full'>
        <thead className='bg-slate-800'>
          <tr>
            <th className='p-4 text-left'>Book Name</th>
            <th className='p-4 text-left'>Author</th>
            <th className='p-4 text-left'>Status</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr
              key={book.id}
              className='border-t border-slate-800'
            >
              <td className='p-4'>{book.title}</td>
              <td className='p-4'>{book.author}</td>
              <td
                className={`p-4 ${
                  book.status === 'Available'
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {book.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BookTable