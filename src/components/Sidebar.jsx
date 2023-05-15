import React from 'react'
import { data } from '../data/data'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import { useGlobalContext } from '../Context/ContextProvider'

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar, }  = useGlobalContext()







  return (
    <aside className = {`${isSidebarOpen ? 'inline scale' : 'hidden'} fixed top-0 z-50 left-0 flex justify-center w-full md:hidden`}>

        <div className = "bg-light-navy sidebar mt-5 w-11/12 h-screen p-10 flex flex-col ">

            <div>
                <button onClick = {closeSidebar} className = "text-red-400 text-3xl float-right hover:rotate-180 duration-300">
                    <FaTimes/>
                </button>
                
            </div>

            <div className = "flex flex-col items-center gap-20">

                <div className = "flex flex-col gap-10 items-center text-secondary text-2xl mt-20">
                    {data.map((item)=> {
                        const {id, name, url} = item
                        return (
                            <NavLink key = {id} to = {url} className = " hover:text-primary" onClick = {closeSidebar}>
                                {name}
                            </NavLink>
                        )
                    })}

                </div>

                <Button text = "Resume" x = "6" y= "4" />

            </div>

        </div>
       


    </aside>
  )
}

export default Sidebar
