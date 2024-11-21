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
      }}
    >
      <TextField
        label="Search Cars"
        variant="outlined"
        sx={{ mr: 2, width: "50%" }}
      />
      <Button variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
