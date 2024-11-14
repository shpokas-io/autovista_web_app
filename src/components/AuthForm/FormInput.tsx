import { TextField } from "@mui/material";

type FormInputProps = {
  label: string;
  type?: string;
};

const FormInput: React.FC<FormInputProps> = ({ label, type = "text" }) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      margin="normal"
      fullWidth
      required
    />
  );
};

export default FormInput;
