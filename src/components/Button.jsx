import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, url, x, y}) => {
  return (
            <Link to = {url}><button className = {`text-primary border-2 text-1xs border-primary py-${y} px-${x} rounded hover:bg-primary hover:text-secondary hover:scale-90 hover:bg-opacity-30"`}>{text}</button></Link>
  )
}

export default Button
