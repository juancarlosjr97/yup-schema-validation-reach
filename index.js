"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yup_1 = require("yup");
const validationSchema = (0, yup_1.object)({
    email: (0, yup_1.string)().email("Invalid email").required("Email required"),
});
(0, yup_1.reach)(validationSchema, "email")
    .validate("noEmail")
    .catch((error) => console.log(error));
