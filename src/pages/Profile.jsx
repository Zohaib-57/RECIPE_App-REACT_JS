import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {
  const location = useLocation();
  const {userName} = location.state ||  {};
  return (
    <div>
      <h1>Profile For {userName}</h1>
      </div>
  )
}

export default Profile