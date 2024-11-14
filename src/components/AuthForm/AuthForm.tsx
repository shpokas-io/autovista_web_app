import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { login } from "../../features/auth/authSlice";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

type AuthFormProps = {
  isLogin: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ name: "User" }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormInput label="Email" type="email" />
      <FormInput label="Password" type="password" />
      {!isLogin && <FormInput label="Confirm Password" type="password" />}
      <SubmitButton label={isLogin ? "Login" : "Register"} />
    </Box>
  );
};

export default AuthForm;
