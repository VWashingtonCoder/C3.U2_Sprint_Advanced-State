import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Wheel(props) {
  // console.log(props)
  const { wheel, moveClockwise, moveCounterClockwise } = props
  
  const clockwiseClick = evt => {
    evt.preventDefault()
    let currentId = wheel.indexOf("cog active")
    if(currentId < wheel.length){
      wheel.splice([currentId], 1, "cog")
      wheel.splice([currentId+1], 1, "cog active")
    } else if (currentId === wheel.length) {
      wheel.splice([currentId], 1, "cog")
      wheel.splice(0, 1, "cog active")
    }
    
    
    
    moveClockwise([wheel])
  }
  const clickCounterClockwise = evt => {
    // evt.preventDefault()
    // let currentId = wheel.indexOf("cog active")
    // wheel.splice([currentId], 1, "cog")
    // wheel.splice([currentId+1], 1, "cog active")
    // moveClockwise([wheel])
  }
  console.log(wheel)
  return (
    <div id="wrapper">
      <div id="wheel">
        {wheel.map((cog, id) => {
          return(
            <div key={id} className={cog} style={{ "--i": id }}>
              {cog === "cog active" ? "B" : ""}
            </div>
          ) 
        })}
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={clockwiseClick}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, actionCreators)(Wheel)