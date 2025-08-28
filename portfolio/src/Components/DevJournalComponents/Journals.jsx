import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import tuff from "../../public/tuff.png";
const Journals = () => {
  const [entries, setEntries] = useState([]);
  const [journalClick, setJournalClick] = useState(false);
  const [journalId, setJournalId] = useState(null);
  const [currentJournal, setCurrentJournal] = useState({
    title: "",
    content: "",
    id: 0,
  });

  const handleJournalClick = (e) => {
    setJournalClick((prev) => !prev);
    setJournalId(e.currentTarget.id);
    setCurrentJournal(entries.find((entry) => entry.id == e.currentTarget.id));
  };

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
            id={entry.id}
            onClick={(e) => {
              // Handle click event
              // Redirect to a detailed view of the entry
              handleJournalClick(e);
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
                Click to see
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Dialog
        open={journalClick}
        onClose={handleJournalClick}
        fullWidth
        maxWidth="md"
        sx={{
          borderRadius: 6,
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          "&::-webkit-scrollbar": {
            display: "none", // Chrome/Safari
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ width: "100%" }}
        >
          <Card
            sx={{
              overflow: "hidden",
              //   bgcolor: "#111827", // nice dark background
              color: "white",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
              position: "relative",
              p: 3,
            }}
          >
            {/* Floating Close Button */}
            <IconButton
              onClick={handleJournalClick}
              sx={{
                position: "absolute",
                top: 12,
                right: 12,
                color: "white",
                bgcolor: "rgba(255,255,255,0.1)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
              }}
            >
              <CloseIcon />
            </IconButton>

            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
                {currentJournal?.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  whiteSpace: "pre-line",
                  lineHeight: 1.7,
                  color: "#d1d5db",
                }}
              >
                {currentJournal?.content}
              </Typography>
            </CardContent>

            {currentJournal?.id == 1 && (
              <CardMedia
                component="img"
                image={tuff}
                alt="tuff image"
                sx={{
                  maxHeight: 400,
                  objectFit: "contain",
                }}
              />
            )}
          </Card>
        </motion.div>
      </Dialog>
    </motion.div>
  );
};

export default Journals;
