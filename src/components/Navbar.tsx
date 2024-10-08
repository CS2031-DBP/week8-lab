import React from 'react'

function Navbar() {
  return (
    <nav className="w-full bg-slate-200 py-3 px-4 sm:px-8 flex justify-between items-center">
      <div className="text-xl">Sparky Students</div>
      <ul className="flex">
        <li className="py-2 px-4 hover:bg-slate-300 rounded-full">Register</li>
        <li className="py-2 px-4 hover:bg-slate-300 rounded-full">Courses</li>
        <li className="py-2 px-4 hover:bg-slate-300 rounded-full">Edit Profile</li>
      </ul>
    </nav>
  )
}

export default Navbar