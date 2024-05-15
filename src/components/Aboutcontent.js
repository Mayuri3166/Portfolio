import "./Aboutcontentstyles.css"
import React from 'react'
import {Link} from "react-router-dom";
import net from "../assets/net.jpg"
import project2 from "../assets/project2.jpg"


const Aboutcontent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>As an engineering student, proficient in C, C++, DSA, AI, ML, 
                                        Cloud Computing (AWS), Docker and Web development. 
                                        I am passionate about leveraging technology to drive impactful solutions.
        </p>

        <Link to="/Contact">
            <button className="btn">Contact</button>
        </Link>
    </div>
    <div className="right">
        <div className="image-container">
            <div className="image-stack-top">
                <img src={net} className="img" alt= "true"/>
            </div>
            <div className="image-stack-bottom">
                <img src={project2} className="img" alt= "true"/>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Aboutcontent
