import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Box,
  Container,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const correctPassword = import.meta.env.VITE_SECRET;

  async function createPost() {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}posts/`, {
        title: title,
        content: content,
      });
      console.log("Post created successfully");
    } catch (error) {
      console.log(error);
      console.error("Error creating post:", error);
    }
  }

  function handleAuth() {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  }

  return (
    <Container>
      {!isAuthenticated ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 8,
            alignItems: "center",
          }}
        >
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel htmlFor="password">Enter Password</InputLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAuth();
              }}
            />
          </FormControl>
          <Button variant="contained" onClick={handleAuth} sx={{ mt: 2 }}>
            Submit
          </Button>
          {error && <Box sx={{ color: "red", mt: 1 }}>{error}</Box>}
        </Box>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 5 }}>
          <FormControl>
            <InputLabel htmlFor="title">Title</InputLabel>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              multiline
              rows={4}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="content">Content</InputLabel>
            <Input
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              multiline
              rows={4}
            />
          </FormControl>
          <Button variant="contained" onClick={createPost}>
            Create Post
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default CreatePost;
