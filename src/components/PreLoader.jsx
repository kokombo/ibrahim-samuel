import React from 'react'
import { Circles } from 'react-loader-spinner'



const PreLoader = () => {
  return (
    <div className = "h-screen w-full fixed z-50 bottom-0 top-0 left-0 flex items-center justify-center overflow-hidden">
        <Circles
        height="80"
        width="80"
        color="#64ffda"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        />
    </div>
  )
}

export default PreLoader

