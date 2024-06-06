import React from 'react'
import Signup from '../pages/Signup'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import Info from '../pages/Info'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/info" element={<Info/>} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default MainRoutes
