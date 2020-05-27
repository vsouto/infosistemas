import { combineReducers } from 'redux'
import cars from './cars'

const rootReducer = combineReducers({
  cars: cars
})

export default rootReducer
