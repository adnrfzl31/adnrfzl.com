import React from "react"
import Profile from "../Component/Pages/Profile"
import About from "../Component/Pages/About"
import Contact from "../Component/Pages/Contact"
import Experience from "../Component/Pages/Experience"
import Project from "../Component/Pages/Project"

function Home() {
  return (
    <div id="home">
      <Profile />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  )
}

export default Home
