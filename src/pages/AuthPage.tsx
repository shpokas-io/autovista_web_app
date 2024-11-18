import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "../store";
import { loginUser, registerUser } from "../features/auth/authSlice";
import { useAuthForm } from "../hooks/useAuthForm";
import FormInput from "../components/AuthForm/FormInput";
import SubmitButton from "../components/AuthForm/SubmitButton";
import Alerts from "../components/Alerts";

type AuthFormProps = {
  isLogin: boolean;
  onSuccess: () => void;
};

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSuccess }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const [successMessage, setSuccessMessage] = useState("");
  const { formData, fieldErrors, handleChange, validateForm } =
    useAuthForm(isLogin);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateForm()) return;

    if (isLogin) {
      dispatch(
        loginUser({ username: formData.username, password: formData.password })
      );
    } else {
      dispatch(
        registerUser({
          username: formData.username,
          password: formData.password,
        })
      )
        .unwrap()
        .then(() => {
          setSuccessMessage("Registration successful! Please login.");
          onSuccess();
        })
        .catch(() => {
          setSuccessMessage("");
        });
    }
  };

  useEffect(() => {
    if (isLogin && isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isLogin, navigate]);

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      <Alerts successMessage={successMessage} error={error} />
      <FormInput
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        error={fieldErrors.username}
        helperText={fieldErrors.username ? "Username is required" : ""}
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={fieldErrors.password}
        helperText={fieldErrors.password ? "Password is required" : ""}
      />
      {!isLogin && (
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={fieldErrors.confirmPassword}
          helperText={
            fieldErrors.confirmPassword ? "Passwords do not match" : ""
          }
        />
      )}
      <SubmitButton
        label={loading ? "Processing..." : isLogin ? "Login" : "Register"}
        disabled={loading}
      />
    </Box>
  );
};

export default AuthForm;
