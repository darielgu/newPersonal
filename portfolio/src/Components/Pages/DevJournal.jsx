import { Container, Box, Typography } from "@mui/material";
import Entries from "../HomeComponents/Entries";
import React from "react";
import Header from "../ReusableComponents/Header";

const DevJournal = () => {
  return (
    <Box
      sx={{
        maxHeight: "fit-content",
        minHeight: "100vh",
        width: "100%",
        bgcolor: "black",
        m: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Container>
        <Box>
          <Typography variant="h4">Developer Journal</Typography>
          <Typography variant="body1">
            Welcome to the developer journal! Here you can find all the latest
            updates and entries.
          </Typography>
        </Box>
        <Box>
          <Entries />
        </Box>
      </Container>
    </Box>
  );
};

export default DevJournal;
