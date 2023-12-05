import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    const handleblog=()=>{
        navigate('/Blog');
    }
    const handlelay=()=>{
        navigate('/Layout');
    }
    const handlecon=()=>{
        navigate('/Contact');
    }
  return (
    <div>
    <button onClick={handlelay}>Layout</button>
    <button onClick={handleblog}>Blog</button>
    <button onClick={handlecon}>Contact</button>
    </div>
  )
}

export default Home