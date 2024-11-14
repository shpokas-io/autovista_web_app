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
      {children}
    </Box>
  );
};
export default CenteredContainer;
