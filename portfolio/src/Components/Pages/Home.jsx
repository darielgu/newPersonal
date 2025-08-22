import React from "react";
import { Box, Stack, Chip, Typography, Container, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AboutMe from "../HomeComponents/AboutMe";
import Experience from "../HomeComponents/Experience";
import Skills from "../HomeComponents/Skills";
import Entries from "../HomeComponents/Entries";
import Footer from "../ReusableComponents/Footer";
import Header from "../ReusableComponents/Header";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
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
        "::webkit-scrollbar": {
          display: "none",
          width: 0,
        },
      }}
    >
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      {/* Main Content */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
            mt: 10,
            mb: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              // flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                // marginLeft: "10px",
                height: "70px",
                width: "70px",
              }}
              src="https://media.licdn.com/dms/image/v2/D5603AQFq17E8o7NgpA/profile-displayphoto-scale_400_400/B56ZeD3mXeHQAg-/0/1750264086049?e=1757548800&v=beta&t=TyFlBLlu66m0oIhV1DjWJRxJ_OfddQ5fYSM-s5PgA7M"
              alt=""
            />
          </Box>
          <Box sx={{ flexDirection: "row", display: "flex" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "70%" }}
            >
              <Typography variant="h2" sx={{ color: "white" }}>
                Welcome to My Portfolio
              </Typography>
              <Typography sx={{ color: "white", mt: 2, fontSize: "1.2rem" }}>
                Hello! My name is Dariel Gutierrez, I am a computer science
                student @ San Diego State University I am passionate about
                software development and love to create innovative solutions.
                Here you can find my projects, journal, and more about me.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
                <Button
                  sx={{ color: "white" }}
                  href="https://github.com/darielgu"
                >
                  <GitHubIcon />
                </Button>
                <Button
                  sx={{ color: "white" }}
                  href="https://www.linkedin.com/in/dariel-gutierrez/"
                >
                  <LinkedInIcon />
                </Button>
              </Box>
            </Box>
            <Box sx={{ width: "30%" }}>
              <img
                src="https://media.licdn.com/dms/image/v2/D5622AQGTRxw7Oi0PJg/feedshare-shrink_1280/B56ZimEGz5H0Ao-/0/1755132765223?e=1758758400&v=beta&t=6l1SLnRo1tvWz1jZTS5BWta81e89UoomYPnFYRxcpJ4"
                alt="Kody"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  height: "450px",
                  border: "1px solid #ccc",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ flexDirection: "column", width: "100%", mt: 10, mb: 10 }}>
          {/* <AboutMe /> */}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "65%",
              mt: 10,
              mb: 10,
            }}
          >
            <Typography variant="h3">What I've Been Up To...</Typography>
            <Entries />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "35%",
              mt: 10,
              mb: 10,
              justifyContent: "space-between",
            }}
          >
            <Experience />
            <Skills />
          </Box>
        </Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
