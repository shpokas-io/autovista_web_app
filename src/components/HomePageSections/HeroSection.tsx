import React from "react";
import { Box, Typography, Button } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60vh",
        bgcolor: "secondary.main",
        color: "white",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box>
        <Typography variant="h3" gutterBottom>
          Welcome to Digital Car Garage
        </Typography>
        <Typography variant="h6" gutterBottom>
          Manage your cars, explore our collection, and visualize them in 3D.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
