import { always, cond, equals, F } from 'ramda'

export const getPrefix = cond([
  [equals('AUD'), always('A')],
  [equals('USD'), always('US')],
  [F, always('A')]
])
