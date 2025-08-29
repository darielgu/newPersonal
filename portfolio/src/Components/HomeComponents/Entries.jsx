import { Box, Typography } from "@mui/material";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Entries = () => {
  const [entries, setEntries] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL + "posts/"
        );
        setEntries(response.data);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    fetchEntries();
  }, []);

  return (
    <Box>
      {Array.isArray(entries) &&
        entries?.map((entry, index) => (
          <Box
            key={index}
            onClick={() => {
              // Handle click event
              // Redirect to a detailed view of the entry
              navigate("/dev-journal");
            }}
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
              {entry.createdAt.toString().split("T")[0]}
            </Typography>
            <Typography variant="h6" color="text.primary">
              {entry.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ whiteSpace: "pre-line" }}
            >
              {entry.content.slice(0, 41)}
            </Typography>
            <Typography variant="body2" color="#349beb">
              Click to read
            </Typography>
          </Box>
        ))}
    </Box>
  );
};

export default Entries;
