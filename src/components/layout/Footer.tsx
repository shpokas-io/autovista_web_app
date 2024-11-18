import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Digital Car Garage. All rights
        reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" underline="none">
          Contact Us
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
