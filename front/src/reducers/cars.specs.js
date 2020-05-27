import cars from './heroes'
import * as types from '../constants/ActionTypes'

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      cars(undefined, {})
    ).toEqual([
      {
        text: 'Hulk',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle GET_ALL', () => {
    expect(
      cars([
        {
          text: 'Run the tests',
          completed: true,
          id: 1
        }, {
          text: 'Hulk',
          completed: false,
          id: 0
        }
      ], {
        type: types.GET_ALL
      })
    ).toEqual([
      {
        text: 'Hulk',
        completed: false,
        id: 0
      }
    ])
  })

})
