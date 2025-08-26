import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../ReusableComponents/Header";

const Projects = () => {
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
        <Typography variant="h2" sx={{ color: "white", mt: 3 }}>
          Projects
        </Typography>
        <Typography sx={{ color: "black", mt: 2, fontSize: "1.2rem" }}>
          Here's a look at some things I've built.
        </Typography>
      </Container>
    </Box>
  );
};

export default Projects;
