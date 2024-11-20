import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Register",
      description: "Create an account to manage your digital garage.",
      icon: "📝",
    },
    {
      title: "Browse Cars",
      description: "Explore our collection and choose your favorites.",
      icon: "🚗",
    },
    {
      title: "Visualize in 3D",
      description: "See your car in stunning 3D detail.",
      icon: "🌐",
    },
  ];

  return (
    <Box sx={{ py: 6, px: 3, bgcolor: "#f3f3f3" }}>
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        How It Works
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: 3,
                textAlign: "center",
                bgcolor: "#fff",
                borderRadius: 2,
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#ff5722",
                  mb: 2,
                }}
              >
                {step.icon}
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {step.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowItWorksSection;
