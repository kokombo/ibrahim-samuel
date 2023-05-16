import React from 'react'
import {FiGithub, FiExternalLink} from "react-icons/fi"
import { Link } from 'react-router-dom'
import {Slide} from 'react-awesome-reveal'

const EachProject = ({image, title, description, tools, siteUrl, gitHubLink, style}) => {
  return (
    <Slide bottom>
    <article className = {`md:${style} flex flex-col gap-10 md:items-center slide-top`}>

        <div className = "h-80 lg:h-96 md:w-1/2 border-2">
            <img src = {image} alt = {title} className = "h-full w-full"/>        
        </div>

        <div className = "flex flex-col gap-6 md:w-1/2">
            <h1 className = "font-bold text-primary text-1xl sm:text-2xl leading-12">{title}</h1>
            <p className = "text-lightest-slate text-xs sm:text-base leading-7 sm:leading-8 bg-light-navy p-5 font-light">{description}</p>
            
            <div className = "flex gap-4">
                {tools.map((item, index)=> {
                    const {tool} = item
                    return (
                        <p key = {index} className = "text-primary text-xs leading-7 sm:leading-8 border-2 px-2 py-0 font-light">{tool}</p>
                    )
                })}

            </div>
            <div className = "flex gap-2 items-center text-2xl text-secondary">
               <Link to = {gitHubLink} className = "hover:text-primary"><FiGithub/></Link>
               <Link to = {siteUrl} className = "hover:text-primary" ><FiExternalLink/></Link>           
            </div>

        </div>
      
    </article>
    </Slide>
  )
}

export default EachProject
