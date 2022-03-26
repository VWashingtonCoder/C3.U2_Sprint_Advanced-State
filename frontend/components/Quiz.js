import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from "../state/action-creators"

function Quiz(props) {
  const { quiz, fetchQuiz } = props
  
  useEffect(() => {
    fetchQuiz()
  }, [])

  
  console.log(quiz)
  
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
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {quiz.wrongAnswer}
                <button>
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