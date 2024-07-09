import { compose, identity, memoizeWith, replace, split, head } from 'ramda'

export const currencyToNumber = memoizeWith(identity, currency => {
  return compose(replace(/\D/g, ''), head(), split('.'))(String(currency)) * 1
})
