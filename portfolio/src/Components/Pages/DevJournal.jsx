import { Container, Box, Typography } from "@mui/material";
import Journals from "../DevJournalComponents/Journals";
import React from "react";
import Header from "../ReusableComponents/Header";
import NoteAltIcon from "@mui/icons-material/NoteAlt";

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
        <Box sx={{ width: "60%", m: 3, fontWeight: "bold", ml: 0 }}>
          <Typography variant="h3" sx={{ mt: 3 }}>
            Deep dives into what I've worked on, learned, and built
            <NoteAltIcon sx={{ fontSize: "35px", ml: 1, mt: 0.5 }} />
          </Typography>
        </Box>
        <Box>
          <Journals />
        </Box>
      </Container>
    </Box>
  );
};

export default DevJournal;
