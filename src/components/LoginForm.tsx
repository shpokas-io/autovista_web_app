import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { Button, TextField } from "@mui/material";

function LoginForm() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name: "User" }));
  };

  return (
    <div>
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" variant="outlined" type="password" />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}

export default LoginForm;
