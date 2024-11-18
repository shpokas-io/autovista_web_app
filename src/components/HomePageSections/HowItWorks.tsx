import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const HowItWorksSection: React.FC = () => {
  const steps = [
    "Register and log in to your account.",
    "Browse the list of cars available in our garage.",
    "Visualize your selected car in a 3D environment.",
  ];

  return (
    <Box sx={{ py: 4, px: 2, bgcolor: "#f9f9f9" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        How It Works
      </Typography>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Typography variant="h5" gutterBottom>
              Step {index + 1}
            </Typography>
            <Typography>{step}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
