import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from "../state/action-creators"

function Quiz(props) {
  const { quiz, fetchQuiz, postAnswer, selectAnswer, selectedAnswer } = props
  const [disabled, setDisabled] = useState(true)

  const select = evt => {
    const answers = document.getElementsByClassName("answer")
    const correct = answers.item(0)
    const wrong = answers.item(1)
    const correctId = quiz.correctAnswerId
    const wrongId = quiz.wrongAnswerId
    
    if (evt.target.id  === "correct-btn"){
      correct.classList.add("selected")
      selectAnswer(correctId)
    } else if (evt.target.id === "wrong-btn") {
      wrong.classList.add("selected")
      selectAnswer(wrongId)
    }

    setDisabled(false)
  } 
  
  const submit = evt => {
    evt.preventDefault()
    const answerPost = {
      quiz_id: quiz.quizId, 
      answer_id: selectedAnswer
    }
    postAnswer(answerPost)
    fetchQuiz()
  }

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz !== null ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              
              <div className="answer">
                {quiz.correctAnswer}
                <button id="correct-btn" onClick={select}>
                  {selectedAnswer === quiz.correctAnswerId ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className="answer">
                {quiz.wrongAnswer}
                <button id='wrong-btn' onClick={select}>
                {selectedAnswer === quiz.wrongAnswerId ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button 
              id="submitAnswerBtn" 
              disabled={disabled} 
              onClick={submit}
            >
              Submit answer
            </button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st=>st, actionCreators) (Quiz)