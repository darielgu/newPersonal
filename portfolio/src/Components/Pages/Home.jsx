import React from "react";
import { Box, Stack, Chip, Typography, Container, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AboutMe from "../HomeComponents/AboutMe";
import Experience from "../HomeComponents/Experience";
import Skills from "../HomeComponents/Skills";
import Entries from "../HomeComponents/Entries";
import Footer from "../ReusableComponents/Footer";
const Home = () => {
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
      {/* Header Component */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            bgcolor: "#2e2e2e",
            width: "20%",
            height: "45px",
            borderRadius: 5,
            justifyContent: "space-evenly",
            textAlign: "center",
            mt: 2,
            minWidth: "fit-content",
            gap: 1,
            border: "1px solid #5b5c5b",
          }}
        >
          <Typography sx={{ mt: 1, cursor: "pointer" }} color="white">
            Home
          </Typography>

          <Typography sx={{ mt: 1, cursor: "pointer" }} color="white">
            Dev Journal
          </Typography>

          <Typography sx={{ mt: 1, cursor: "pointer" }} color="white">
            Projects
          </Typography>
        </Stack>
      </Box>
      {/* Main Content */}
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "65%",
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
          <Typography variant="h2" sx={{ color: "white" }}>
            Welcome to My Portfolio
          </Typography>
          <Typography sx={{ color: "white", mt: 2 }}>
            Hello! My name is Dariel Gutierrez, I am a computer science student
            @ San Diego State University
          </Typography>
          <Typography sx={{ color: "white", mb: 2 }}>
            I am passionate about software development and love to create
            innovative solutions. Here you can find my projects, journal, and
            more about me.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Button sx={{ color: "white" }} href="https://github.com/darielgu">
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
