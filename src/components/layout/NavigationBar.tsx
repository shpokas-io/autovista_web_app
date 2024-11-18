import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavigationBar: React.FC = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Digital Car Garage
        </Typography>
        <Box>
          <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/cars">
            Cars
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
