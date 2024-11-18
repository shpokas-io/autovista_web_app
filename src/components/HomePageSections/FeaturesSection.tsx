import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const FeaturesSection: React.FC = () => {
  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Explore Our Cars</Typography>
          <Typography>
            Browse through an extensive list of cars available in our garage.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">3D Visualization</Typography>
          <Typography>
            Experience an immersive 3D rendering of your selected car.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
