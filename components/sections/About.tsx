import React from 'react'

const About = () => {
  return (
    <section  className="flex flex-col lg:w-1/2 h-screen" id="about">
        <div className="w-5 h-0.5 bg-red border border-red" />
        <div className="w-0.5 bg-red h-4 border border-red" />
        <h1 className="text-white text-6xl ml-5 md:items-start">
          About
        </h1>
        <h2 style={{fontWeight: '100'}}>We transform sound into art. Our state-of-the-art facilities and expert team are dedicated to delivering unmatched quality in audio mastering, mixing, and sound design. We elevate your sound to new heights, ensuring every detail is perfected.</h2>
  </section>
  )
}

export default About