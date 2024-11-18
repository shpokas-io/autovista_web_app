import { useState } from "react";

export const useAuthForm = (isLogin: boolean) => {
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

  const validateForm = () => {
    const errors = {
      username: !formData.username,
      password: !formData.password,
      confirmPassword:
        !isLogin && formData.password !== formData.confirmPassword,
    };

    setFieldErrors(errors);

    return Object.values(errors).some((error) => error);
  };

  return { formData, fieldErrors, handleChange, validateForm };
};
