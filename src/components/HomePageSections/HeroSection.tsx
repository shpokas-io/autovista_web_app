import React from "react";
import { Box, Typography, Button } from "@mui/material";
import autoVistaLogo from "../../assets/images/logo/auto-vista-logo-nobc.png"; // Adjust the path if necessary

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
        textAlign: "center",
        px: 2,
        backgroundImage: `linear-gradient(to right, #1b1b1b, #3e3e3e)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        mt: -2,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${autoVistaLogo})`,
          backgroundSize: "contain",
          backgroundPosition: "center 20%",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px)",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{ fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        >
          Welcome to Digital Car Garage
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: "#d4d4d4", mb: 4 }}>
          Manage your cars, explore our collection, and visualize them in 3D.
        </Typography>
        <Button
          variant="contained"
          color="error"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(255,0,0,0.4)",
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
