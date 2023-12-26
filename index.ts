import { object, string, reach } from "yup";

const validationSchema = object({
  email: string().email("Invalid email").required("Email required"),
});

reach(validationSchema, "email")
  .validate("noEmail")
  .catch((error) => console.log(error));
