import React from 'react' 
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Dashbroad = () => {
  return (
    <div>
      <ul>
        <li> 
        {" "}
          <Link to="profile">Profile</Link></li>
        <li> 
        {" "}
          <Link to="setting">Setting</Link></li>  
      </ul>
     Dashboard
      <Outlet />
    </div>
  )
}

export default Dashbroad;
