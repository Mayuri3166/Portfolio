import "./Workcardstyle.css"
import React from 'react'
import Workcard from "./Workcard"
import workcarddata from "./Workcarddata"

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {workcarddata.map((val, ind) =>{
                return(
                    <Workcard
                     key={ind}
                     img={val.img}
                     title={val.title}
                     text= {val.text}
                     view ={val.view}
                    />
                )
            }
            )}
        </div>
    </div>
  )
}

export default Work
