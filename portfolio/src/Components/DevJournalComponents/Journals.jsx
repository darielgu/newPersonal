import React from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Journals = () => {
  const [entries, setEntries] = useState([]);

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
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <Box>
        {entries.map((entry) => (
          <Box
            key={entry.id}
            onClick={() => {
              // Handle click event
              // Redirect to a detailed view of the entry
            }}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              "&:hover": {
                bgcolor: "#1e1e1e",
                cursor: "pointer",
              },
              width: "100%",
              p: 2,
              borderBottom: "1px solid gray",
              mb: 1,
            }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ minWidth: 120, mr: 3 }}
            >
              {entry.createdAt.toString().split("T")[0]}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <Typography variant="h6" color="text.primary">
                {entry.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ whiteSpace: "pre-line" }}
              >
                {entry.content}
              </Typography>
              <Typography variant="body2" color="#349beb">
                Click to read
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
};

export default Journals;
