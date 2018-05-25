import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const MainApp = () => {
  return (
    <div>
      <h1>
        This is Main App Select Your Role
      </h1>
      <Link to='/customer'>Customer</Link>
      <Link to='/employee'>Employee</Link>
      <Link to='/admin'>Admin</Link>
    </div>
  )
}

export default MainApp
