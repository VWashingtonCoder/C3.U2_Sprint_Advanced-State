// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

import { 
  MOVE_CLOCKWISE, 
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  INPUT_CHANGE,
  RESET_FORM,
  POST_ANSWER
} from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case MOVE_CLOCKWISE:
      return action.payload
    case MOVE_COUNTERCLOCKWISE:
      return action.payload
    default:
      return state
  }
}

const initialQuizState = {
  quizId: "",
  question: "",
  correctAnswer: "",
  correctAnswerId: "",
  wrongAnswer: "",
  wrongAnswerId: ""
}
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case SET_QUIZ_INTO_STATE: return {
      quizId: action.payload.quiz_id,
      question: action.payload.question,
      correctAnswer: action.payload.answers[0].text,
      correctAnswerId: action.payload.answers[0].answer_id,
      wrongAnswer: action.payload.answers[1].text,
      wrongAnswerId: action.payload.answers[1].answer_id,
    }
    case RESET_FORM: return { 
      ...state,
      question: action.payload.question, 
      correctAnswer: action.payload.answers[0].text,
      wrongAnswer: action.payload.answers[1].text
    }
    default:
      return state
  }
}

const initialSelectedAnswerState = ''
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      return action.payload
    default:
      return state
  }
}

// Message State
const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_INFO_MESSAGE:
      return action.payload
    case RESET_FORM:
      return `Congrats: "${action.payload.question}" is a great question!`
    case POST_ANSWER:
      return action.payload
    default:
      return state
  }
  
}

// Form State
const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    case INPUT_CHANGE:
      return { ...state, [action.payload.id]: action.payload.value }
    case RESET_FORM:
      return initialFormState
    default:
      return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
