import React from 'react'
import "./Footerstyle.css";
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaCode, FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Jangam Area</p>
                    <p>sangrul,Kolhapur</p>
                </div>
            </div>
            <div className='phone'>
                <h4>
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                +91 8855823166
                </h4>
            </div>
            <div className='gmail'>
                <h4>
                <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    mayurimane3166@gmail.com
                </h4>
            </div>
        </div>
        <div className='right'>
            <h4>About Me</h4>
            <p>This is me Mayuri Mane. I have completed my
             B.Tech in Eletronics Engineering.I enjoy doing 
             new projects and design challenges.</p>
             <div className='social'>

                <a href='https://www.linkedin.com/in/mayuri-mane-157a131ab/'>
                <FaLinkedin
                size={20} 
                style={{color:"#fff", 
                marginRight:"2rem"}}
                />
                </a>

                <a href='https://leetcode.com/mayurimane3166/'>
                <FaCode
                size={20} 
                style={{color:"#fff", 
                marginRight:"2rem"}}
                />
                </a>

                <a href='https://github.com/Mayuri3166'>
                <FaGithub
                size={20} 
                style={{color:"#fff", 
                marginRight:"2rem"}}
                />
                </a>

             </div>
        </div>
    </div> 
    </div>
  )
}

export default Footer
