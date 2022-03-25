import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
  console.log(props)
  const { form, inputChange, postQuiz } = props
  
  const onChange = evt => {
    const { id, value } = evt.target
    inputChange({ id, value })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const newData = {
      "question_text" : form.newQuestion,
      "true_answer_text": form.newTrueAnswer, 
      "false_answer_text": form.newFalseAnswer
    }
    postQuiz(newData)
    console.log(newData)
  }
  console.log(form)
  console.log(form.newQuestion)

  function validateForm() {
    let form = document.getElementById("form")
    console.log(form)
  }
  validateForm()
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={form.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={form.newFalseAnswer} />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
