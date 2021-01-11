import * as Yup from "yup";
export const yupValidationSchema = Yup.object({
  username: Yup.string().required("Username is Required"),
  password: Yup.string()
    .required("Password Is Required")
    .test(
      "Password length check",
      "Password should be atleast 6 characters",
      (val) => {
        if (val) {
          return val.length >= 6;
        } else {
          return false;
        }
      }
    ),
});
