import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center items-center bg-emerald-300'>
        <Link to="/" className='border border-black mx-5 p-2 rounded-md'>Home</Link>
        <Link className='border border-black mx-5 p-2  rounded-md' to="/dashboard">Dashboard</Link>
        <Link to="/postviewer" className='border border-black mx-5 p-2  rounded-md'>Post Viewer</Link>
        <Link to="/search" className='border border-black 
       rounded-md m-5 p-2'>Search Food</Link>
    </div>
  )
}

export default Nav