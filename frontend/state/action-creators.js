import axios from "axios"
import { 
  MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM
} from './action-types'


// ❗ You don't need to add extra action creators to achieve MVP
// Wheel State
export function moveClockwise(id) { 
  return { type: MOVE_CLOCKWISE, payload: id}
}
export function moveCounterClockwise(id) { 
  return { type: MOVE_COUNTERCLOCKWISE, payload: id }
}

// Answer State
export function selectAnswer() { }

// Message State
export function setMessage(value) { 
  return { type: SET_INFO_MESSAGE, payload: value }
}

// Quiz State
export function setQuiz() { }

// Form State
export function inputChange({ id, value }) {  
  return { type: INPUT_CHANGE, payload: { id, value } }
}

export function resetForm() { }

// ❗ Async action creators
// Quiz & Answer State
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    axios.get("http://localhost:9000/api/quiz/next")
      .then(res=>{
        console.log(res)
        dispatch({ type: SET_QUIZ_INTO_STATE, payload: res.data })
      })
      .catch(err => {
        console.log(err)
        
      })
  }
}
//Answer & Messgage State
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
// Form State
export function postQuiz(form) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post('http://localhost:9000/api/quiz/new', form)
    .then(res => {
      console.log(res)
      dispatch({ type: RESET_FORM, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: SET_INFO_MESSAGE, payload: err.response.data.message })
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
