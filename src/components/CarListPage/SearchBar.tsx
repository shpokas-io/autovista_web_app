import React from "react";
import { Box, TextField, Button } from "@mui/material";

const SearchBar: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 2,
      }}
    >
      <TextField
        label="Search Cars"
        variant="outlined"
        sx={{
          mr: 2,
          width: "50%",
          backgroundColor: "white",
          borderRadius: 1,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#ff4081",
          color: "white",
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
