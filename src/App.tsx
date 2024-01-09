import { useEffect, useState } from 'react'
import pic1 from './assets/pic1.jpg'
import pic2 from './assets/pic2.jpg'
import pic3 from './assets/pic3.jpg'

import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const App = () => {
  const [currntImg,setCurrntImg]= useState(0);
  const images = [pic1,pic2,pic3];

  const handleIncre=()=>{
    setCurrntImg(currntImg === images.length - 1 ? 0 : currntImg+1)
  }
  const handleDecre=()=>{
    setCurrntImg(currntImg === 0 ? images.length-1 : currntImg-1)
  }

  useEffect(()=>{
    const clearId = setInterval(()=>{
      handleIncre()
    },3000)
    return ()=>clearInterval(clearId)
  },[currntImg])
  return (
    <>
      <h1>React Image Slider</h1>
      <div className="main">
        <div className="child">
          <img src={images[currntImg]} alt="" />
        </div>
        <button onClick={handleDecre}><FaArrowLeft /> </button>
        <button onClick={handleIncre}><FaArrowRight /></button>
      </div>
    </>
  )
}

export default App