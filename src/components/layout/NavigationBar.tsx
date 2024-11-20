import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const NavigationBar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem component="div">
          <ListItemButton component={NavLink} to="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem component="div">
          <ListItemButton component={NavLink} to="/cars">
            <ListItemText primary="Cars" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {isDesktop ? (
          <>
            <Button
              color="inherit"
              component={NavLink}
              to="/"
              sx={{ color: "white" }}
            >
              Home
            </Button>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                fontWeight: "bold",
                color: "white",
              }}
            >
              AutoVista
            </Typography>
            <Button
              color="inherit"
              component={NavLink}
              to="/cars"
              sx={{ color: "white" }}
            >
              Cars
            </Button>
          </>
        ) : (
          <>
            <Box sx={{ flexGrow: 1 }}>
              <Button color="inherit" component={NavLink} to="/">
                Home
              </Button>
            </Box>
            <Typography
              variant="h6"
              sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
            >
              AutoVista
            </Typography>
            <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawer}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
