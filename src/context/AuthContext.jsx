import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

const AuthContext =
  createContext()

export const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null)

  useEffect(() => {

    const savedUser =
      localStorage.getItem(
        'loggedInUser'
      )

    if (savedUser) {
      setUser(
        JSON.parse(savedUser)
      )
    }

    // Default Books
    if (
      !localStorage.getItem(
        'books'
      )
    ) {

      const defaultBooks = [
        {
          id: 1,
          title:
            'Operating System',
          author: 'Galvin',
          category: 'System',
          quantity: 5,
        },

        {
          id: 2,
          title: 'DBMS',
          author: 'Korth',
          category:
            'Database',
          quantity: 4,
        },

        {
          id: 3,
          title:
            'Computer Networks',
          author:
            'Forouzan',
          category:
            'Networking',
          quantity: 3,
        },
      ]

      localStorage.setItem(
        'books',
        JSON.stringify(
          defaultBooks
        )
      )
    }

  }, [])

  // REGISTER
  const register = (
    name,
    email,
    password,
    role
  ) => {

    if (
      !name ||
      !email ||
      !password
    ) {
      return {
        success: false,
        message:
          'Please fill all fields',
      }
    }

    const users =
      JSON.parse(
        localStorage.getItem(
          'users'
        )
      ) || []

    const existingUser =
      users.find(
        (u) =>
          u.email === email
      )

    if (existingUser) {
      return {
        success: false,
        message:
          'User already registered',
      }
    }

    const admins =
      users.filter(
        (u) =>
          u.role === 'admin'
      )

    const adminId =
      admins.length > 0
        ? admins[0].id
        : null

    const newUser = {
      id: Date.now(),

      name,
      email,
      password,
      role,

      adminId,

      borrowedBooks: [],
      issuedBooks: [],
      returnedBooks: [],
      reservations: [],
      borrowingHistory: [],

      pendingFee: 0,
    }

    users.push(newUser)

    localStorage.setItem(
      'users',
      JSON.stringify(users)
    )

    return {
      success: true,
      message:
        'Registration successful',
    }
  }

  // LOGIN
  const login = (
    email,
    password
  ) => {

    const users =
      JSON.parse(
        localStorage.getItem(
          'users'
        )
      ) || []

    const existingUser =
      users.find(
        (u) =>
          u.email === email
      )

    if (!existingUser) {
      return {
        success: false,
        message:
          'User is not registered',
      }
    }

    if (
      existingUser.password !==
      password
    ) {
      return {
        success: false,
        message:
          'Invalid email or password',
      }
    }

    setUser(existingUser)

    localStorage.setItem(
      'loggedInUser',
      JSON.stringify(
        existingUser
      )
    )

    return {
      success: true,
      role:
        existingUser.role,
    }
  }

  // LOGOUT
  const logout = () => {

    setUser(null)

    localStorage.removeItem(
      'loggedInUser'
    )
  }

  // SEND REQUEST
  const sendBookRequest = (
    book
  ) => {

    const requests =
      JSON.parse(
        localStorage.getItem(
          'borrowRequests'
        )
      ) || []

    const newRequest = {
      id: Date.now(),

      userId: user.id,

      userName:
        user.name,

      adminId:
        user.adminId,

      book,

      dueDate:
        new Date(
          Date.now() +
            7 *
              24 *
              60 *
              60 *
              1000
        )
          .toISOString()
          .split('T')[0],

      status: 'pending',
    }

    requests.push(
      newRequest
    )

    localStorage.setItem(
      'borrowRequests',
      JSON.stringify(
        requests
      )
    )
  }

  // ACCEPT REQUEST
  const acceptRequest = (
    requestId
  ) => {

    const requests =
      JSON.parse(
        localStorage.getItem(
          'borrowRequests'
        )
      ) || []

    const users =
      JSON.parse(
        localStorage.getItem(
          'users'
        )
      ) || []

    const books =
      JSON.parse(
        localStorage.getItem(
          'books'
        )
      ) || []

    const request =
      requests.find(
        (r) =>
          r.id === requestId
      )

    if (!request) return

    // Update Requests
    const updatedRequests =
      requests.map((r) =>
        r.id === requestId
          ? {
              ...r,
              status:
                'accepted',
            }
          : r
      )

    // Update Books
    const updatedBooks =
      books.map((b) => {

        if (
          b.title ===
          request.book.title
        ) {

          return {
            ...b,
            quantity:
              b.quantity - 1,
          }
        }

        return b
      })

    // Update Users
    const updatedUsers =
      users.map((u) => {

        if (
          u.id ===
          request.userId
        ) {

          return {
            ...u,

            borrowedBooks: [
              ...u.borrowedBooks,
              request.book.title,
            ],

            issuedBooks: [
              ...u.issuedBooks,
              request.book.title,
            ],

            borrowingHistory: [
              ...u.borrowingHistory,

              {
                book:
                  request.book
                    .title,

                dueDate:
                  request.dueDate,

                status:
                  'borrowed',
              },
            ],
          }
        }

        return u
      })

    localStorage.setItem(
      'borrowRequests',
      JSON.stringify(
        updatedRequests
      )
    )

    localStorage.setItem(
      'books',
      JSON.stringify(
        updatedBooks
      )
    )

    localStorage.setItem(
      'users',
      JSON.stringify(
        updatedUsers
      )
    )
  }

  // REJECT REQUEST
  const rejectRequest = (
    requestId
  ) => {

    const requests =
      JSON.parse(
        localStorage.getItem(
          'borrowRequests'
        )
      ) || []

    const updated =
      requests.map((r) =>
        r.id === requestId
          ? {
              ...r,
              status:
                'rejected',
            }
          : r
      )

    localStorage.setItem(
      'borrowRequests',
      JSON.stringify(
        updated
      )
    )
  }

  // RESERVE BOOK
  const reserveBook = (
    book
  ) => {

    const reservations =
      JSON.parse(
        localStorage.getItem(
          'reservations'
        )
      ) || []

    const newReservation = {
      id: Date.now(),

      userId: user.id,

      userName:
        user.name,

      book,
    }

    reservations.push(
      newReservation
    )

    localStorage.setItem(
      'reservations',
      JSON.stringify(
        reservations
      )
    )
  }

  // RETURN BOOK
  const returnBook = (
    bookName
  ) => {

    const users =
      JSON.parse(
        localStorage.getItem(
          'users'
        )
      ) || []

    const books =
      JSON.parse(
        localStorage.getItem(
          'books'
        )
      ) || []

    const reservations =
      JSON.parse(
        localStorage.getItem(
          'reservations'
        )
      ) || []

    const updatedUsers =
      users.map((u) => {

        if (
          u.id === user.id
        ) {

          return {
            ...u,

            borrowedBooks:
              u.borrowedBooks.filter(
                (b) =>
                  b !==
                  bookName
              ),

            returnedBooks: [
              ...u.returnedBooks,
              bookName,
            ],

            borrowingHistory:
              u.borrowingHistory.map(
                (item) =>
                  item.book ===
                  bookName
                    ? {
                        ...item,
                        status:
                          'returned',
                      }
                    : item
              ),
          }
        }

        return u
      })

    const updatedBooks =
      books.map((b) => {

        if (
          b.title ===
          bookName
        ) {

          return {
            ...b,
            quantity:
              b.quantity + 1,
          }
        }

        return b
      })

    // AUTO ISSUE RESERVED
    const waiting =
      reservations.find(
        (r) =>
          r.book.title ===
          bookName
      )

    if (waiting) {

      const autoUsers =
        updatedUsers.map(
          (u) => {

            if (
              u.id ===
              waiting.userId
            ) {

              return {
                ...u,

                borrowedBooks: [
                  ...u.borrowedBooks,
                  bookName,
                ],

                issuedBooks: [
                  ...u.issuedBooks,
                  bookName,
                ],
              }
            }

            return u
          }
        )

      localStorage.setItem(
        'users',
        JSON.stringify(
          autoUsers
        )
      )

      const remaining =
        reservations.filter(
          (r) =>
            r.id !==
            waiting.id
        )

      localStorage.setItem(
        'reservations',
        JSON.stringify(
          remaining
        )
      )
    }

    localStorage.setItem(
      'users',
      JSON.stringify(
        updatedUsers
      )
    )

    localStorage.setItem(
      'books',
      JSON.stringify(
        updatedBooks
      )
    )

    calculateFine()
  }

  // CALCULATE FINE
  const calculateFine =
    () => {

      const users =
        JSON.parse(
          localStorage.getItem(
            'users'
          )
        ) || []

      const updatedUsers =
        users.map((u) => {

          let fine = 0

          u.borrowingHistory.forEach(
            (item) => {

              if (
                item.status ===
                'borrowed'
              ) {

                const today =
                  new Date()

                const due =
                  new Date(
                    item.dueDate
                  )

                const diff =
                  Math.floor(
                    (
                      today -
                      due
                    ) /
                      (
                        1000 *
                        60 *
                        60 *
                        24
                      )
                  )

                if (
                  diff > 0
                ) {
                  fine +=
                    diff * 10
                }
              }
            }
          )

          return {
            ...u,
            pendingFee:
              fine,
          }
        })

      localStorage.setItem(
        'users',
        JSON.stringify(
          updatedUsers
        )
      )
    }

  // ADD BOOK
  const addBook = (
    title,
    author,
    category,
    quantity
  ) => {

    const books =
      JSON.parse(
        localStorage.getItem(
          'books'
        )
      ) || []

    const newBook = {
      id: Date.now(),

      title,
      author,
      category,

      quantity:
        Number(quantity),
    }

    books.push(newBook)

    localStorage.setItem(
      'books',
      JSON.stringify(books)
    )
  }

  // DELETE BOOK
  const deleteBook = (
    id
  ) => {

    const books =
      JSON.parse(
        localStorage.getItem(
          'books'
        )
      ) || []

    const updated =
      books.filter(
        (b) =>
          b.id !== id
      )

    localStorage.setItem(
      'books',
      JSON.stringify(updated)
    )
  }

  // DELETE USER
  const deleteUser = (
    id
  ) => {

    const users =
      JSON.parse(
        localStorage.getItem(
          'users'
        )
      ) || []

    const updated =
      users.filter(
        (u) =>
          u.id !== id
      )

    localStorage.setItem(
      'users',
      JSON.stringify(updated)
    )
  }

  return (
    <AuthContext.Provider
      value={{
        user,

        register,
        login,
        logout,

        sendBookRequest,

        acceptRequest,
        rejectRequest,

        reserveBook,
        returnBook,

        calculateFine,

        addBook,
        deleteBook,

        deleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth =
  () =>
    useContext(
      AuthContext
    )