import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Wheel(props) {
  // console.log(props)
  const { wheel, moveClockwise, moveCounterClockwise } = props
  
  const cogs = document.getElementsByClassName("cog")
  
  const clockwiseClick = evt => {
    evt.preventDefault()
    moveClockwise()
  }

  for (let i = 0; i < cogs.length; i++){
    let current = document.getElementsByClassName("active")
    if (cogs[i] === current){
      console.log(i)
    }
  }
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={clockwiseClick}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, actionCreators)(Wheel)