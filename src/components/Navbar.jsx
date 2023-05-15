import React from 'react'
import { data } from '../data/data'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'
import {FaBars} from "react-icons/fa"
import { useGlobalContext } from '../Context/ContextProvider'


const Navbar = () => {

    const  {openSidebar} = useGlobalContext()


  return (
    <nav className = "py-4 px-6 bg-navy flex justify-between items-center md:px-14">

        <div className = "flex justify-between items-center w-full">
            <Link to = "/" className = "text-4xl text-primary">S</Link>
            <button onClick = {openSidebar} className = "text-primary text-2xl md:hidden"><FaBars/></button>
        </div>

        <div className = "md:flex items-center gap-20 hidden">

            <div className = "flex items-center gap-10">
                {data.map((item)=> {
                    const {id, name, url} = item
                    return (
                        <NavLink to = {url} key = {id} className = "text-1xl text-secondary hover:text-primary">
                            {name}
                        </NavLink>
                    )
                })}
            </div>

            <Button text = "Resume" url = "mailto:samuelibrahim3029@gmail.com" x = "6" y = "4" />

        </div>


      
    </nav>
  )
}

export default Navbar
