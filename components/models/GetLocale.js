import { always, cond, equals, F } from 'ramda'

export const getLocale = cond([
  [equals('AUD'), always('en-AU')],
  [equals('USD'), always('en-US')],
  [F, always('en-AU')]
])
