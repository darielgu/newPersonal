import {
  Box,
  Typography,
  Stack,
  IconButton,
  Divider,
  Container,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid #2e2e2eff",
        mt: "auto",
        py: 4,
        px: 2,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="space-between"
        alignItems={{ xs: "center", md: "flex-start" }}
      >
        {/* Left Section - Name and tagline */}
        <Box textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h6" color="white" gutterBottom>
            Dariel Gutierrez
          </Typography>
          <Typography variant="body2" color="secondary">
            Software Developer & Problem Solver
          </Typography>
        </Box>

        {/* Middle Section - Social Links */}
        <Box textAlign="center">
          <Typography variant="subtitle2" color="white" gutterBottom>
            Connect With Me
          </Typography>
          <Stack direction="row" spacing={1} justifyContent="center">
            <IconButton
              href="https://github.com/darielgu"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "secondary.main",
                "&:hover": { color: "white", transform: "translateY(-2px)" },
                transition: "all 0.3s ease",
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/dariel-gutierrez/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "secondary.main",
                "&:hover": { color: "white", transform: "translateY(-2px)" },
                transition: "all 0.3s ease",
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="mailto:your.email@example.com"
              sx={{
                color: "secondary.main",
                "&:hover": { color: "white", transform: "translateY(-2px)" },
                transition: "all 0.3s ease",
              }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* Right Section - All Rights Reserved */}
        <Box textAlign={{ xs: "center", md: "right" }}>
          <Typography variant="subtitle2" color="white" gutterBottom>
            Dariel Gutierrez &copy; {currentYear}
          </Typography>
        </Box>
      </Stack>

      {/* Bottom Section - Copyright */}
    </Box>
  );
};

export default Footer;
