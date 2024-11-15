import React from "react";
import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";

interface FormInputProps extends Omit<TextFieldProps, "onChange"> {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  error = false,
  helperText = "",
  ...rest
}) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      variant="outlined"
      label={label}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      {...rest}
    />
  );
};

export default FormInput;
