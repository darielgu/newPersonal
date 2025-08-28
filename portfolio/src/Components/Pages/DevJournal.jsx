import { Container, Box, Typography, Modal } from "@mui/material";
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
          <Typography variant="h3" sx={{ mt: 6 }}>
            Deep dives into what I've worked on, learned, and built
          </Typography>
        </Box>
        <Box>
          <Journals />
        </Box>
      </Container>
      {/* <Modal /> */}
    </Box>
  );
};

export default DevJournal;
