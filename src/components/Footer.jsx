import React from 'react'
import Button from './Button'
import  Slide  from 'react-reveal/Slide'

const Footer = () => {



  return (
    <Slide left>
    <section className = "bg-navy h-full w-full px-6 sm:px-10 md:px-28 lg:px-36 xl:px-44 pt-20 text-center flex flex-col gap-6">
        <h1 className = "font-bold text-secondary text-4xl sm:text-6xl leading-12 ">Get In Touch</h1>
        <p className = "text-lightest-slate text-xs sm:text-base leading-7 sm:leading-8 font"> 
            Hey there! I am happy to connect with you to discuss collaborating with your exciting team and building amazing stuffs together. <span className = "text-primary">I AM CURRENTLY OPEN TO OPPORTUNITIES</span> - especially ambitious projects.
        </p>

        <div>
            <Button text = "Contact Me" url = "mailto:samuelibrahim3029@gmail.com" y = "4" x = "6" />
        </div>

        <span>
            <p className = "text-lightest-slate font-light text-xs sm:text-base leading-7 sm:leading-8 mt-16">Designed & Developed By Samuel Ibrahim</p>
        </span>
      
    </section>
    </Slide>
  )
}

export default Footer
