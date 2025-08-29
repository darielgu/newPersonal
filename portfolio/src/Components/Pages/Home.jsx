import React from "react";
import { Box, Typography, Container, Button, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Experience from "../HomeComponents/Experience";
import Skills from "../HomeComponents/Skills";
import Entries from "../HomeComponents/Entries";
import Footer from "../ReusableComponents/Footer";
import Header from "../ReusableComponents/Header";
import { useNavigate } from "react-router-dom";
import { motion, useScroll } from "motion/react";

const Home = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "black",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#349ceb81",
          zIndex: 2000,
        }}
      />

      {/* Header */}
      <Header />

      <Container sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 6, md: 10 } }}>
        {/* Hero Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Left: Text */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQFq17E8o7NgpA/profile-displayphoto-scale_400_400/B56ZeD3mXeHQAg-/0/1750264086049?e=1757548800&v=beta&t=TyFlBLlu66m0oIhV1DjWJRxJ_OfddQ5fYSM-s5PgA7M"
                alt="Profile"
                style={{
                  borderRadius: "50%",
                  height: 80,
                  width: 80,
                  marginBottom: 16,
                }}
              />
            </motion.div>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "2.7rem" },
                // fontWeight: 300,
                // fontFamily: "DMSans",
              }}
            >
              Welcome to My Portfolio
            </Typography>
            <Typography
              sx={{
                color: "white",
                mt: 2,
                fontSize: { xs: "1rem", md: "1.2rem" },
                maxWidth: { xs: "100%", md: "80%" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              Hello! My name is Dariel Gutierrez, I’m a computer science student
              @ San Diego State University. I’m passionate about software
              development and love to create innovative solutions. Here you’ll
              find my projects, journal, and more about me.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
                mt: 3,
              }}
            >
              <IconButton
                size="large"
                sx={{ color: "white" }}
                href="https://github.com/darielgu"
              >
                <GitHubIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                size="large"
                sx={{ color: "white" }}
                href="https://www.linkedin.com/in/dariel-gutierrez/"
              >
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>

          {/* Right: Hero Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: "100%", maxWidth: 400 }}
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQGTRxw7Oi0PJg/feedshare-shrink_1280/B56ZimEGz5H0Ao-/0/1755132765223?e=1758758400&v=beta&t=6l1SLnRo1tvWz1jZTS5BWta81e89UoomYPnFYRxcpJ4"
                alt="Kody"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  border: "1px solid #333",
                }}
              />
            </motion.div>
          </Box>
        </Box>

        {/* Entries + Experience/Skills Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 8 },
            mt: { xs: 8, md: 12 },
            mb: { xs: 8, md: 12 },
          }}
        >
          {/* Entries */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                color: "white",
                mb: 3,
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              What I’ve Been Up To...
            </Typography>
            <Entries />
          </Box>

          {/* Experience + Skills */}
          <Box sx={{ flex: 1 }}>
            <Experience />
            <Skills />
          </Box>
        </Box>

        {/* Footer */}
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
