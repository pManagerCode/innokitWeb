import { identity, memoizeWith } from 'ramda'

export const formatRate = memoizeWith(identity, (rate = 0) => {
  return rate
    ? (rate / 100).toLocaleString('au', {
        style: 'percent',
        minimumFractionDigits: 2
      })
    : ''
})
