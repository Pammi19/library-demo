import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Login from './pages/Login'

import AdminDashboard from './pages/AdminDashboard'
import UserDashboard from './pages/UserDashboard'

import AvailableBooks from './pages/AvailableBooks'
import BorrowedBooks from './pages/BorrowedBooks'
import IssuedBooks from './pages/IssuedBooks'
import ReturnedBooks from './pages/ReturnedBooks'

import ManageBooks from './pages/ManageBooks'

import UserRecords from './pages/UserRecords'

import PendingRequests from './pages/PendingRequests'

import ReservationRecords from './pages/ReservationRecords'

import PaymentStatus from './pages/PaymentStatus'

import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path='/'
          element={<Login />}
        />

        {/* ADMIN */}
        <Route
          path='/admin-dashboard'
          element={
            <ProtectedRoute
              allowedRole='admin'
            >
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path='/manage-books'
          element={
            <ProtectedRoute
              allowedRole='admin'
            >
              <ManageBooks />
            </ProtectedRoute>
          }
        />

        <Route
          path='/user-records'
          element={
            <ProtectedRoute
              allowedRole='admin'
            >
              <UserRecords />
            </ProtectedRoute>
          }
        />

        <Route
          path='/pending-requests'
          element={
            <ProtectedRoute
              allowedRole='admin'
            >
              <PendingRequests />
            </ProtectedRoute>
          }
        />

        <Route
          path='/reservation-records'
          element={
            <ProtectedRoute
              allowedRole='admin'
            >
              <ReservationRecords />
            </ProtectedRoute>
          }
        />

        {/* USER */}
        <Route
          path='/user-dashboard'
          element={
            <ProtectedRoute
              allowedRole='user'
            >
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path='/available-books'
          element={
            <ProtectedRoute
              allowedRole='user'
            >
              <AvailableBooks />
            </ProtectedRoute>
          }
        />

        <Route
          path='/borrowed-books'
          element={
            <ProtectedRoute
              allowedRole='user'
            >
              <BorrowedBooks />
            </ProtectedRoute>
          }
        />

        <Route
          path='/issued-books'
          element={
            <ProtectedRoute
              allowedRole='user'
            >
              <IssuedBooks />
            </ProtectedRoute>
          }
        />

        <Route
          path='/returned-books'
          element={
            <ProtectedRoute
              allowedRole='user'
            >
              <ReturnedBooks />
            </ProtectedRoute>
          }
        />

        <Route
          path='/payment-status'
          element={
            <ProtectedRoute
              allowedRole='user'
            >
              <PaymentStatus />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App