import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import Quiz from './Quiz'

const initialWheelArr = ['cog active', 'cog', 'cog', 'cog', 'cog', 'cog']

export function Wheel(props) {
  // console.log(props)
  const { moveClockwise, moveCounterClockwise } = props
  const [wheelArr, setWheelArr] = useState(initialWheelArr)
  const [currentId, setCurrentID] = useState(0)

  const clockwiseClick = evt => {
    evt.preventDefault()
    if(currentId < 5){
      wheelArr.splice(currentId, 1, "cog")
      wheelArr.splice([currentId+1], 1, "cog active")
      setWheelArr(wheelArr)
      setCurrentID(currentId + 1)
      moveClockwise(currentId + 1)
    } else if (currentId === 5){
      wheelArr.splice(5, 1, "cog")
      wheelArr.splice(0, 1, "cog active")
      setWheelArr(wheelArr)
      setCurrentID(0)
      moveClockwise(0)
    }
  }
  
  const clickCounterClockwise = evt => {
    evt.preventDefault()
    if(currentId > 0){
      wheelArr.splice(currentId, 1, "cog")
      wheelArr.splice([currentId-1], 1, "cog active")
      setWheelArr(wheelArr)
      setCurrentID(currentId - 1)
      moveCounterClockwise(currentId - 1)
    } else if (currentId === 0){
      wheelArr.splice(0, 1, "cog")
      wheelArr.splice(5, 1, "cog active")
      setWheelArr(wheelArr)
      setCurrentID(5)
      moveCounterClockwise(5)
    }
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        {
        wheelArr.map((cog, id) => {
          return(
            <div key={id} className={cog} style={{ "--i": id }}>
              {cog === "cog active" ? "B" : ""}
            </div>
          )
        })
        }        
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


// <div id="cog 0" className='cog active' style={{ "--i": 0 }}>B</div>
//         <div id="cog 1" className='cog' style={{ "--i": 1 }}></div>
//         <div id="cog 2" className='cog' style={{ "--i": 2 }}></div>
//         <div id="cog 3" className='cog' style={{ "--i": 3 }}></div>
//         <div id="cog 4" className='cog' style={{ "--i": 4 }}></div>
//         <div id="cog 5" className='cog' style={{ "--i": 5 }}></div>