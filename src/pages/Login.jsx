import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const navigate = useNavigate()

  const { login, register } = useAuth()

  const [isLogin, setIsLogin] = useState(true)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =
    useState('')
  const [role, setRole] = useState('user')

  const [message, setMessage] =
    useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // LOGIN
    if (isLogin) {

      if (!email || !password) {
        setMessage('Please fill all fields')
        return
      }

      const result = login(email, password)

      if (!result.success) {
        setMessage(result.message)
        return
      }

      setMessage('')

      if (result.role === 'admin') {
        navigate('/admin-dashboard')
      } else {
        navigate('/user-dashboard')
      }
    }

    // REGISTER
    else {

      if (
        !name ||
        !email ||
        !password
      ) {
        setMessage('Please fill all fields')
        return
      }

      const result = register(
        name,
        email,
        password,
        role
      )

      setMessage(result.message)

      if (result.success) {

        setName('')
        setEmail('')
        setPassword('')

        // Switch to login page
        setIsLogin(true)
      }
    }
  }

  return (
    <div className='min-h-screen bg-slate-950 flex items-center justify-center px-4'>

      <form
        onSubmit={handleSubmit}
        className='bg-slate-900 border border-slate-800 p-10 rounded-3xl w-full max-w-md'
      >

        <h1 className='text-4xl font-bold text-yellow-400 text-center mb-8'>
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>

        <div className='space-y-5'>

          {!isLogin && (
            <input
              type='text'
              placeholder='Full Name'
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className='w-full bg-slate-800 text-white p-4 rounded-xl outline-none'
            />
          )}

          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className='w-full bg-slate-800 text-white p-4 rounded-xl outline-none'
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className='w-full bg-slate-800 text-white p-4 rounded-xl outline-none'
          />

          {!isLogin && (
            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
              className='w-full bg-slate-800 text-white p-4 rounded-xl outline-none'
            >
              <option value='user'>
                User
              </option>

              <option value='admin'>
                Admin
              </option>
            </select>
          )}

          {/* MESSAGE */}
          {message && (
            <div className='bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-xl text-sm'>
              {message}
            </div>
          )}

          <button className='w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl'>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          <p className='text-center text-slate-400'>

            {isLogin
              ? 'New user?'
              : 'Already registered?'}

            <button
              type='button'
              onClick={() => {
                setMessage('')
                setIsLogin(!isLogin)
              }}
              className='text-yellow-400 ml-2'
            >
              {isLogin
                ? 'Create Account'
                : 'Login'}
            </button>

          </p>

        </div>

      </form>

    </div>
  )
}

export default Login