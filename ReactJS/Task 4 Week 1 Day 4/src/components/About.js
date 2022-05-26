import React from 'react'
import {Link} from 'react-router-dom'
function About() {
  return (
    <div>
        <h4>Version 1.0.0</h4>
        <h5>By Kapil Chouhan</h5>
        <h5>SE-Intern</h5>
        <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About