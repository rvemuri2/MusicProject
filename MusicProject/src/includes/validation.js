import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";
export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    defineRule("required", required);
    defineRule("tos", required);
    app.component("ErrorMessage", ErrorMessage);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("email", email);
    defineRule("min_value", minVal);
    defineRule("max_value", maxVal);
    defineRule("passwords_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);
    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} is required`,
          min: `the field ${ctx.field} is too short`,
          max: `the field ${ctx.field} is too long`,
          alpha_spaces: `the field ${ctx.field} may only contain alphabetical characters and spaces`,
          min_value: `the field ${ctx.field} is too low`,
          max_value: `the field ${ctx.field} is too long`,
          email: `the field ${ctx.field} is an invalid email`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}`,
          country_excluded: `We can't accept users from this location`,
          passwords_mismatch: `The passwords don't match`,
          tos: `You must accept the terms of service`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `the field ${ctx.field} is invalid`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
