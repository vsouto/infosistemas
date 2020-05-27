import { createSelector } from 'reselect'

const getCars = state => state.cars

export const getAllCars = createSelector(
  [getCars],
  cars => (
    cars
  )
)
