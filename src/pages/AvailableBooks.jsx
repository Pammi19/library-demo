import React, {
  useEffect,
  useState,
} from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

import { useAuth } from '../context/AuthContext'

const AvailableBooks = () => {

  const {
    sendBookRequest,
    reserveBook,
  } = useAuth()

  const [books, setBooks] =
    useState([])

  const [search, setSearch] =
    useState('')

  const [category, setCategory] =
    useState('All')

  useEffect(() => {

    const savedBooks =
      JSON.parse(
        localStorage.getItem(
          'books'
        )
      ) || []

    setBooks(savedBooks)

  }, [])

  const categories = [
    'All',
    ...new Set(
      books.map(
        (book) =>
          book.category
      )
    ),
  ]

  const filteredBooks =
    books.filter((book) => {

      const matchSearch =
        book.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          ) ||

        book.author
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

      const matchCategory =
        category === 'All'
          ? true
          : book.category ===
            category

      return (
        matchSearch &&
        matchCategory
      )
    })

  const handleBorrow = (
    book
  ) => {

    if (
      book.quantity <= 0
    ) {

      reserveBook(book)

      alert(
        'Book unavailable. Reservation added.'
      )

      return
    }

    sendBookRequest(book)

    alert(
      'Borrow request sent to admin'
    )
  }

  return (
    <div className='bg-slate-950 min-h-screen text-white'>

      <Navbar />

      <div className='flex'>

        <Sidebar role='user' />

        <div className='flex-1 p-8'>

          <h1 className='text-4xl font-bold text-yellow-400 mb-8'>
            Available Books
          </h1>

          <div className='grid md:grid-cols-2 gap-4 mb-8'>

            <input
              type='text'
              placeholder='Search by title or author'
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className='bg-slate-800 p-4 rounded-xl outline-none'
            />

            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
              className='bg-slate-800 p-4 rounded-xl outline-none'
            >

              {categories.map(
                (cat, index) => (
                  <option
                    key={index}
                    value={cat}
                  >
                    {cat}
                  </option>
                )
              )}

            </select>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>

            {filteredBooks.map(
              (book) => (

                <div
                  key={book.id}
                  className='bg-slate-900 border border-slate-800 p-6 rounded-3xl'
                >

                  <h2 className='text-2xl font-bold mb-3'>
                    {book.title}
                  </h2>

                  <p className='text-slate-400'>
                    Author:
                    {' '}
                    {book.author}
                  </p>

                  <p className='text-slate-400'>
                    Category:
                    {' '}
                    {book.category}
                  </p>

                  <p className='text-slate-400 mt-2'>
                    Quantity:
                    {' '}
                    {book.quantity}
                  </p>

                  <button
                    onClick={() =>
                      handleBorrow(
                        book
                      )
                    }
                    className='w-full mt-6 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl'
                  >

                    {book.quantity > 0
                      ? 'Borrow Book'
                      : 'Reserve Book'}

                  </button>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default AvailableBooks