import React, { Component } from 'react'
import "./Heroimage2style.css";

class Heroimage2 extends Component {
    render() {
        return (
            <div className='heroimage'>
              <div className='heading'>
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
              </div>
            </div>
          )
    }
}

export default Heroimage2
