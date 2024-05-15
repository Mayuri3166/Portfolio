import { Link } from "react-router-dom"
import "./Skillsstyle.css"
import React from 'react'

const Skills = () => {
  return (
    <div className="skills">
      <div className="card-container">
        <div className="card">
            <h3>- DEVOPS -</h3>
            <span className="bar"></span>
            {/* <p className="btc">Devops</p> */}
            <p>- Git -</p>
            <p>- AWS -</p>
            <p>- Docker -</p>
            <p>- GitHub -</p>
            <p>- Kubernetes -</p>
            <Link to="/Contact" className="btn">Know More</Link>
        </div>

        <div className="card">
            <h3>- DSA -</h3>
            <span className="bar"></span>
            {/* <p className="btc">DSA</p> */}
            <p>- C -</p>
            <p>- C++ -</p>
            <p>- LINEAR -</p>
            <p>- NON-LINEAR -</p>
            <p>- PROBLEM SOLVING -</p>
            <Link to="/Contact" className="btn">Know More</Link>
        </div>

        <div className="card">
            <h3>- WEB -</h3>
            <span className="bar"></span>
            {/* <p className="btc">Web</p> */}
            <p>- HTML -</p>
            <p>- CSS,JS -</p>
            <p>- BACKEND  -</p>
            <p>- FRONTEND -</p>
            <p>- RESPONSIVE DESIGN -</p>
            <Link to="/Contact" className="btn">Know More</Link>
        </div>
      </div>
    </div>
  )
}

export default Skills
