import React, {
  useState,
} from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import { useAuth } from '../context/AuthContext'

const ManageBooks = () => {

  const {
    addBook,
    deleteBook,
  } = useAuth()

  const [title, setTitle] =
    useState('')

  const [author, setAuthor] =
    useState('')

  const [category, setCategory] =
    useState('')

  const [quantity, setQuantity] =
    useState('')

  const [books, setBooks] =
    useState(
      JSON.parse(
        localStorage.getItem(
          'books'
        )
      ) || []
    )

  const handleAdd = () => {

    addBook(
      title,
      author,
      category,
      quantity
    )

    const updated =
      JSON.parse(
        localStorage.getItem(
          'books'
        )
      ) || []

    setBooks(updated)

    setTitle('')
    setAuthor('')
    setCategory('')
    setQuantity('')
  }

  const handleDelete = (id) => {

    deleteBook(id)

    const updated =
      books.filter(
        (b) => b.id !== id
      )

    setBooks(updated)
  }

  return (
    <div className='bg-slate-950 min-h-screen text-white'>

      <Navbar />

      <div className='flex'>

        <Sidebar role='admin' />

        <div className='flex-1 p-8'>

          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            Manage Books
          </h1>

          <div className='grid md:grid-cols-4 gap-4 mb-8'>

            <input
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              placeholder='Book Title'
              className='bg-slate-800 p-4 rounded-xl'
            />

            <input
              value={author}
              onChange={(e) =>
                setAuthor(
                  e.target.value
                )
              }
              placeholder='Author'
              className='bg-slate-800 p-4 rounded-xl'
            />

            <input
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
              placeholder='Category'
              className='bg-slate-800 p-4 rounded-xl'
            />

            <input
              value={quantity}
              onChange={(e) =>
                setQuantity(
                  e.target.value
                )
              }
              placeholder='Quantity'
              className='bg-slate-800 p-4 rounded-xl'
            />

          </div>

          <button
            onClick={handleAdd}
            className='bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold mb-8'
          >
            Add Book
          </button>

          <div className='bg-slate-900 rounded-3xl overflow-hidden'>

            <table className='w-full'>

              <thead className='bg-slate-800'>
                <tr>

                  <th className='p-4'>
                    Title
                  </th>

                  <th className='p-4'>
                    Author
                  </th>

                  <th className='p-4'>
                    Category
                  </th>

                  <th className='p-4'>
                    Quantity
                  </th>

                  <th className='p-4'>
                    Action
                  </th>

                </tr>
              </thead>

              <tbody>

                {books.map((b) => (
                  <tr
                    key={b.id}
                    className='border-t border-slate-800'
                  >

                    <td className='p-4'>
                      {b.title}
                    </td>

                    <td className='p-4'>
                      {b.author}
                    </td>

                    <td className='p-4'>
                      {b.category}
                    </td>

                    <td className='p-4'>
                      {b.quantity}
                    </td>

                    <td className='p-4'>

                      <button
                        onClick={() =>
                          handleDelete(
                            b.id
                          )
                        }
                        className='bg-red-500 px-4 py-2 rounded-lg'
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ManageBooks