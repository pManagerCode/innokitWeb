import {
  compose,
  head,
  isNil,
  join,
  juxt,
  identity,
  memoizeWith,
  replace,
  tail,
  toLower,
  toUpper,
  unless,
} from "ramda";

export const convertToTitle = memoizeWith(identity, (str) => {
  const capitalise = compose(
    join(""),
    juxt([compose(toUpper, head), tail]),
    compose(toLower, replace(/[_]/, " "))
  );
  const capitaliseOrNull = unless(isNil, capitalise);
  return capitaliseOrNull(str);
});
