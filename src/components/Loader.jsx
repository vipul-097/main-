import React from 'react'
import loader from "/loader1.gif"

const Loader = () => {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
<img className='h-[60%] w-[40%] ' src={loader} alt="" />

    </div>
  )
}

export default Loader