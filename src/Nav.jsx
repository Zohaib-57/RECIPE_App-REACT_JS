// Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex justify-center items-center bg-emerald-300'>
      <Link to="/" className='border border-black mx-5 p-2 rounded-md'>Home</Link>
      <Link to="/dashboard" className='border border-black mx-5 p-2 rounded-md'>Dashboard</Link>
      <Link to="/postviewer" className='border border-black mx-5 p-2 rounded-md'>Post Viewer</Link>
      <Link to="/search" className='border border-black mx-5 p-2 rounded-md'>Search Food</Link>
      <Link to="/products" className='border border-black mx-5 p-2 rounded-md'>Products</Link>
      <Link to="/postdetails" className='border border-black mx-5 p-2 rounded-md'>Post Details</Link>
    </div>
  );
};

export default Nav;
