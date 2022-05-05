import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-lg flex justify-between px-20 py-5 flex-col gap-5 sm:flex-row">
      <div className="font-semibold text-xl">
        <h1>Lite Thinking</h1>
      </div>
      <div className="flex gap-5">
        <NavLink 
          exact 
          to='/' 
          activeClassName="font-bold border-t-4 border-blue-400"
        >
          Home
        </NavLink>
        <NavLink 
          exact 
          to='/companies' 
          activeClassName="font-bold border-t-4 border-blue-400"
      >
        Companies
      </NavLink>
      </div>
    </nav>
  )
}

export default Navbar