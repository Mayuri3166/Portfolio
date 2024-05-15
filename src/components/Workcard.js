import "./Workcardstyle.css"
import React from 'react'
import { NavLink } from "react-router-dom"
// import {ProjectCardData} from "./Workcarddata";

const Workcard = (props) => {
  return (
    <div className="project-card">
    <img src={props.img} alt="image"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="details">
        <p>{props.text}</p>
        <div className="probtn">
            <NavLink to={props.view} className="btn">View</NavLink>
            <NavLink to="/Contact" className="btn">Source</NavLink>
        </div>
    </div>
</div>
  )
}


export default Workcard
