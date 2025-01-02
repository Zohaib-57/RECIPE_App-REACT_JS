// Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard/profile", { state: { userName } });
  }

  return (
    <div>
      HomePage
      <br />
      <input
        className='border border-black p-1 m-3'
        type="text"
        placeholder='username'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        className='border border-black p-2 rounded-md m-3 bg-violet-500'
        onClick={handleClick}
      >
        Go to profile page
      </button>
    </div>
  );
};

export default Home;
