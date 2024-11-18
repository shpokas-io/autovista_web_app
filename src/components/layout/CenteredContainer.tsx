import React from "react";
import { Box } from "@mui/material";

type CenteredContainerProps = {
  children: React.ReactNode;
};

const CenteredContainer: React.FC<CenteredContainerProps> = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f5f5f5"
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          padding: 2,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CenteredContainer;
