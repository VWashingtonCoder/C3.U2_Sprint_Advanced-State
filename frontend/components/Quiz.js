import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from "../state/action-creators"

function Quiz(props) {
  const { quiz, fetchQuiz } = props
  const [quizAnswers, setQuizAnswers] = useState([])
  
  useEffect(() => {
    fetchQuiz()
  }, [])

  useEffect(() => {
    const answers = document.getElementsByClassName("answer")
    console.log(answers)
  })
  

  const select = evt => {
    console.log(evt)
  } 
  console.log(quizAnswers)
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz !== null ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {quiz.correctAnswer}
                <button id="correct-btn" onClick={select}>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {quiz.wrongAnswer}
                <button id='wrong-btn' onClick={select}>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st=>st, actionCreators) (Quiz)