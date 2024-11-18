import { useState } from "react";
import { Typography, Box, Link } from "@mui/material";
import CenteredContainer from "../components/layout/CenteredContainer";
import AuthForm from "../components/AuthForm/AuthForm";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <CenteredContainer>
      <Box
        sx={{
          p: 3,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {isLogin ? "Login" : "Register"}
        </Typography>
        <AuthForm
          isLogin={isLogin}
          onSuccess={() => {
            setIsLogin(true);
          }}
        />
        <Box mt={2}>
          <Link href="#" onClick={toggleAuthMode}>
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </Link>
        </Box>
      </Box>
    </CenteredContainer>
  );
};

export default AuthPage;
