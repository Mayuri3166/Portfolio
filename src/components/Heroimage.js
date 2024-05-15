import React from 'react'
import "./Heroimagestyle.css";
import two from "../assets/two.jpg"
import { Link } from 'react-router-dom';

const Heroimage = () => {
  return (
    <div className='Hero'>
      <div className='mask'>
        <img className='into-img' src={two} alt='one'></img>
      </div>
        <div className='content'>
            <p>HI, I AM MAYURI MANE</p>
            <h1>A Web Developer and A Programmer</h1>
            <div>
                <Link to="/Project" className='btn'>Projects</Link>
                <Link to="/Contact" className='btn'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimage
