import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Wheel(props) {
  const { wheel, moveClockwise, moveCounterClockwise, } = props

  const cogs = document.getElementsByClassName('cog')
  console.log(cogs)

  const clockwiseClick = () => {
    if (wheel < 5) {
      moveClockwise(wheel + 1)
    } else if (wheel === 5) {
      moveClockwise(0)
    }
  }
  
  const clickCounterClockwise = () => {
    if(wheel === 0) {
      moveCounterClockwise(5)
    } else if (wheel > 0){
      moveCounterClockwise(wheel - 1)
    }
  }

  return (
    <div id="wrapper">
      <div id="wheel">
            <div className={wheel === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}> 
              {wheel === 0 ? "B" : ""} 
            </div>
            <div className={wheel === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}> 
              {wheel === 1 ? "B" : ""} 
            </div>
            <div className={wheel === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}> 
              {wheel === 2 ? "B" : ""} 
            </div>
            <div className={wheel === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>
              {wheel === 3 ? "B" : ""}
            </div>
            <div className={wheel === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>
              {wheel === 4 ? "B" : ""}
            </div>
            <div className={wheel === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>
              {wheel === 5 ? "B" : ""}
            </div>
          
       
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={clickCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={clockwiseClick}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => st, actionCreators)(Wheel)
