import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const ProjectCards = ({ title, content, date, path, website, tags }) => {
  return (
    <Card sx={{ height: { md: "650px", xs: "800px" }, width: "400px" }}>
      <CardMedia
        image={path}
        alt={title}
        style={{ height: "200px", objectFit: "scale-down" }}
      />
      <CardContent>
        <Typography sx={{ fontWeight: "600", fontSize: "1.1rem" }}>
          {title}
        </Typography>
        <Typography>{content}</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          {tags.map((tag) => (
            <Box
              key={tag}
              sx={{
                bgcolor: "#f5f5f5",
                color: "#333",
                px: 1.5,
                borderRadius: 2,
                fontSize: "0.95rem",
                fontWeight: 500,
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button href={website} endIcon={<GitHubIcon />}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCards;
