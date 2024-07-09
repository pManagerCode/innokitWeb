import { currencyToNumber } from "./CurrencyToNumber";
import { getLocale } from "./GetLocale";
import { type, isNil } from "ramda";

const formatCurrency = (locale, currencyType, digits, value) => {
  const formatNumber = (number) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      useGrouping: true,
      currency: currencyType,
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }).format(number);

  return formatNumber(value);
  //return compose(head, split('.'), formatNumber)(value)
};

export const convertCurrency = (value, currencyType = "AUD", digits = 2) => {
  if (isNil(value)) return "";
  if (type(value) !== "Number") {
    value = currencyToNumber(value);
  }
  const locale = getLocale(currencyType);
  return formatCurrency(locale, currencyType, digits, value);
};
