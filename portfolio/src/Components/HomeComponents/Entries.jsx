import { Box, Typography } from "@mui/material";
import React from "react";

const Entries = () => {
  let entries = [
    { name: "Entry 1", date: "2023-01-01", content: "My first entry" },
    {
      name: "Entry 2",
      date: "2023-01-02",
      content: "Another day, another entry",
    },
  ];
  return (
    <Box>
      {entries.map((entry, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 2,
            "&:hover": {
              bgcolor: "#1e1e1e",
              cursor: "pointer",
            },
            width: "80%",
            p: 2,
            borderRadius: 6,
          }}
        >
          <Typography variant="body1" color="text.secondary">
            {entry.date}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {entry.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {entry.content}
          </Typography>
          <Typography variant="body2" color="green">
            Click to read
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Entries;
