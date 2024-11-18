import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { Box, Alert } from "@mui/material";
import { loginUser, registerUser } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

type AuthFormProps = {
  isLogin: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    username: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFieldErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newFieldErrors = {
      username: false,
      password: false,
      confirmPassword: false,
    };

    if (!formData.username) newFieldErrors.username = true;
    if (!formData.password) newFieldErrors.password = true;

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newFieldErrors.confirmPassword = true;
    }

    setFieldErrors(newFieldErrors);

    if (Object.values(newFieldErrors).some((error) => error)) return;

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
      );
    }
  };

  useEffect(() => {
    if (isLogin && isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isLogin, navigate]);

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
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
