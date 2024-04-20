/* eslint-disable jsx-a11y/iframe-has-title */
// import SALLYBUS from "./Files/BCA_SALLYBUS.pdf"
import React, { useState } from 'react';
import Navbar from './Navbar';
import "./CSS/Sallybus.css"

const Sallybus = () => {

  const [Sallybus] = useState("https://drive.google.com/file/d/1JcrF4dBO7B7ZgTjcyXyU5F5WhxQPjQQy/preview");

  return (
    <>
        <Navbar/>
        <iframe src={Sallybus} width="640" height="480" allow="autoplay"></iframe>
        <p className='sallybus_warning'>Internet is required to view pdf</p>
    </>
  )
}

export default Sallybus

// 