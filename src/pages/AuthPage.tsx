import { useState } from "react";
import { Typography, Box, Link } from "@mui/material";
import AuthForm from "../components/AuthForm/AuthForm";
import CenteredContainer from "../components/layout/CenteredContainer";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <CenteredContainer>
      <Box
        width="300px"
        textAlign="center"
        p={3}
        bgcolor="white"
        boxShadow={3}
        borderRadius={2}
      >
        <Typography variant="h5" gutterBottom>
          {isLogin ? "Login" : "Register"}
        </Typography>
        <AuthForm isLogin={isLogin} onToggleLogin={toggleAuthMode} />
        <Box mt={2}>
          <Link href="#" onClick={toggleAuthMode}>
            {isLogin
              ? "Don`t have an account? Register"
              : "Already have an account? Login"}
          </Link>
        </Box>
      </Box>
    </CenteredContainer>
  );
}

export default AuthPage;
