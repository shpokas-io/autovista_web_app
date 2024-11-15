import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { loginUser, registerUser } from "../../features/auth/authSlice";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

type AuthFormProps = {
  isLogin: boolean;
  onToggleLogin: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onToggleLogin }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isLogin) {
      dispatch(
        loginUser({ username: formData.username, password: formData.password })
      );
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      dispatch(
        registerUser({
          username: formData.username,
          password: formData.password,
        })
      );
    }
  };

  useEffect(() => {
    if (!isLogin && isAuthenticated) {
      onToggleLogin();
    }
  }, [isAuthenticated, isLogin, onToggleLogin]);

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <FormInput
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      {!isLogin && (
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      )}
      {error && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
      <SubmitButton
        label={loading ? "Processing..." : isLogin ? "Login" : "Register"}
      />
    </Box>
  );
};

export default AuthForm;
