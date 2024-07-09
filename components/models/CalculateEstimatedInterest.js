import { max } from 'ramda'

export const calculateEstimatedInterest = (
  amount = 0,
  rate = 0,
  termInDays = 0
) => {
  return max(Math.floor((amount * (rate / 100) * termInDays) / 365), 0)
}
