import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Explore Our Cars",
      description:
        "Browse through an extensive list of cars available in our garage.",
      image: "https://via.placeholder.com/150", // Replace LATER with actual image URL
    },
    {
      title: "3D Visualization",
      description: "Experience an immersive 3D rendering of your selected car.",
      image: "https://via.placeholder.com/150", // Replace LATER with actual image URL
    },
  ];

  return (
    <Box sx={{ py: 6, px: 2, bgcolor: "#f9f9f9" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} md={5} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                borderRadius: 2,
                bgcolor: "#ffffff",
              }}
            >
              <Box
                component="img"
                src={feature.image}
                alt={feature.title}
                sx={{ width: "100%", maxHeight: 150, mb: 2, borderRadius: 2 }}
              />
              <Typography variant="h5" gutterBottom>
                {feature.title}
              </Typography>
              <Typography>{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
