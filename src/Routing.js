import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Messaging from './Pages/DashboardMessaging/Messaging'



const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/messages/' element={<Messaging />} />
    </Routes>
  )
}

export default Routing