import { string } from "yup";

/**
 * https://www.npmjs.com/package/yup
 */

const passwordSchema = string()
  .min(8, { length: "Password too short" })
  .matches(/\d+/, { message: { number: "Password no number" } })
  .matches(/[a-z]+/, { message: { lowercase: "Password no lowercase" } })
  .matches(/[A-Z]+/, { message: { uppercase: "Password no uppercase" } })
  .matches(/[!@#$%^&*()-+]+/, {
    message: { special: "Password no special char" }
  })
  .test(
    "Password has spaces",
    { spaces: "Password has spaces" },
    value => !/\s+/.test(value)
  )
  .required({ required: "password is required" });

const validate = password =>
  passwordSchema
    .validate(password, { abortEarly: false })
    .catch(({ errors }) => {
      const validationErrors = errors.reduce((acc, error) => {
        const [key, value] = Object.entries(error)[0];
        acc[key] = value;
        return acc;
      }, {});
      return Promise.resolve({ errors: validationErrors });
    });

export default validate;
