import * as Yup from "yup";
export const yupValidationSchema = Yup.object({
  username: Yup.string().required("Username is Required"),
  password: Yup.string()
    .required("Password Is Required")
    .length(6, "Password should be atleast 6 characters"),
});
