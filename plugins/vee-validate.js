import { extend } from "vee-validate";
import {
  alpha_spaces,
  confirmed,
  digits,
  is,
  min,
  max,
  required,
  min_value,
  max_value,
  numeric,
  regex,
  email,
} from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "This field is required",
});

// Install rules
extend("alpha_spaces", alpha_spaces);
extend("confirmed", confirmed);
extend("digits", digits);
extend("is", is);
extend("min", min);
extend("max", max);

extend("min_value", {
  ...min_value,
  message: "This value is too little",
});
extend("max_value", {
  ...max_value,
  message: "This value is too big",
});

extend("regex", {
  ...regex,
  message: "Wrong format",
});

extend("email", {
  ...email,
  message: "Email format is incorrect",
});

extend("numeric", {
  ...numeric,
  message: "This value should be numeric",
});
