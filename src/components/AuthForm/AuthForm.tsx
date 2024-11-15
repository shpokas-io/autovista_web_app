import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (validateForm()) {
      if (isLogin) {
        dispatch(
          loginUser({
            username: formData.username,
            password: formData.password,
          })
        );
      } else {
        dispatch(
          registerUser({
            username: formData.username,
            password: formData.password,
          })
        );
      }
    }
  };

  const validateForm = (): boolean => {
    if (!formData.username || !formData.password) {
      alert("Please fill out all fields.");
      return false;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (!isLogin && isAuthenticated) {
      onToggleLogin();
    }
  }, [isAuthenticated, isLogin, onToggleLogin]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        mx: "auto",
      }}
    >
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
