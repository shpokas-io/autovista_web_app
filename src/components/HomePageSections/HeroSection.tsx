import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
        textAlign: "center",
        bgcolor: "secondary.main",
        px: 2,
        backgroundImage: "linear-gradient(to right, #1b1b1b, #3e3e3e)",
        boxShadow: "0 4px 20px rgbra(0, 0, 0, 0.2)",
      }}
    >
      <Box>
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
