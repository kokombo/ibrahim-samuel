import React from 'react'
import {BiError} from "react-icons/bi"
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className = "bg-white h-full w-full px-6 py-14 sm:px-10 md:px-12 lg:px-44 flex justify-center">
        <div className = "flex flex-col gap-10 text-center mt-20">
            <div className = "flex flex-col gap-2 items-center">
                <span className = "text-6xl text-red-700"><BiError/></span>     
                <h1 className = " text-red-600 text-2xl sm:text-4xl leading-12" >Oops! The Page You Are Looking For Does Not Exist!</h1>
            </div>

            <div className = "flex flex-col gap-2">
                <p className = "text-base leading-7 md:leading-8 font-light">Please return to the homepage</p>
                <Link to = "/"><Button text = "Home" x = "6" y = "4"/></Link>
            </div>

        </div>
        
        
    </section>
  )
}

export default Error
