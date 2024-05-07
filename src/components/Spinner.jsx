import React, { Component } from 'react'
import Loader from './loader.gif'

const Spinner =()=> {
  
    return (
      <div className='text-center'>
        <img src={Loader} alt="Loading" />
      </div>
    )
}
  

export default Spinner
