import { TextField } from "@material-ui/core";
import React from "react";
import { useField } from "formik";

interface TextFieldProps {
  placeholder: string;
  name: string;
  type: "text" | "password";
}
const Index: React.FC<TextFieldProps> = ({ type, name, placeholder }) => {
  const [field, meta] = useField({ name, type: "text" });

  return (
    <>
      <TextField
        {...field}
        variant={"outlined"}
        placeholder={placeholder}
        helperText={meta.error ? meta.error : ""}
        type={type}
      />
    </>
  );
};

export default Index;
