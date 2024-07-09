import { filter, identity, join, map, memoizeWith, compose } from 'ramda'

const getParts = memoizeWith(identity, duration => [
  { value: duration.years(), unit: 'year' },
  { value: duration.months(), unit: 'month' },
  { value: duration.days(), unit: 'day' }
])
const notZero = part => part.value !== 0
const mapUnits = part =>
  `${part.value} ${part.unit}${part.value > 1 ? 's' : ''}`

export const humaniseYMD = compose(
  join(' '),
  map(mapUnits),
  filter(notZero),
  getParts
)
