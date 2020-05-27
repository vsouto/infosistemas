import {
  GET_ALL,
} from '../constants/ActionTypes'

const initialState = [
  {
    title: 'Golf',
    id: 0
  }
]

export default function cars(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return [
        ...state
      ]

    default:
      return state
  }
}
