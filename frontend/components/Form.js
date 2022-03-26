import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import formSchema from '../validation/formSchema'
import * as yup from "yup"

export function Form(props) {
  const [disabled, setDisabled] = useState(true)
  const { form, inputChange, postQuiz, setMessage } = props
  
  const validate = (id, value) => {
    yup.reach(formSchema, id)
      .validate(value)
      .then(() => setMessage(""))
      .catch(err => {
        console.log(err.errors[0])
        setMessage(err.errors[0])
      })
  }

  const onChange = evt => {
    const { id, value } = evt.target
    validate(id, value)
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
  }
  const disableCheck = () => {
    formSchema.isValid(form).then(disabled => setDisabled(!disabled))
  }
  
  useEffect(() => {
    disableCheck()
  },[form])
  
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={form.newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={form.newFalseAnswer} />
      <button disabled={disabled} id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
