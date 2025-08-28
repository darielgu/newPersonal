import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Grid,
} from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import Header from "../ReusableComponents/Header";
import novaImg from "../../public/dashboard-nova.png";
import performance from "../../public/performance.png";
import { motion } from "motion/react";
import ProjectCards from "../ReusableComponents/ProjectCards";

const Projects = () => {
  return (
    <Box sx={{ bgcolor: "#000000ff", minHeight: "100vh" }}>
      <Header />
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mt: 6, width: "60%", mb: 5 }}>
          Deep dives into what I've worked on, learned, and built
        </Typography>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={6} columns={{ xs: 6, md: 12 }}>
            <Grid item size={6}>
              <ProjectCards
                title="Nova"
                content="Nova is an AI-powered CRM layer designed to integrate and
              analyze data from multiple sources in real time. It utilizes
              an MCP client–server framework to facilitate data
              consolidation and insight generation, supporting multi-user
              workspaces with live updates. The system’s optimized
              processing workflow reduced average end-to-end latency from
              210 seconds to 65 seconds, enabling faster, more responsive
              interactions. Built with a focus on scalability, security, and
              seamless multi-source integration."
                date="June 2025"
                path={novaImg}
                website="https://nova-ai.up.railway.app/"
                tags={[
                  "React",
                  "FastMCP",
                  "Python",
                  "Express",
                  "FastAPI",
                  "Supabase",
                ]}
              />
            </Grid>
            <Grid item size={6}>
              <ProjectCards
                title="Nova Performance Dashboard"
                content="The Nova Performance Dashboard is a real-time monitoring tool designed to track and visualize the performance of Nova’s pipeline. It displays latency trends for services such as Slack MCP, Gmail MCP, Gmail API, Personality, and Einstein, helping identify bottlenecks and measure optimization impact. The dashboard was instrumental in validating workflow improvements, including the reduction of average end-to-end latency from 210 seconds to 65 seconds after migrating from Gmail MCP to Gmail API."
                date="June 2025"
                path={performance}
                website="https://goatforce-performance.vercel.app/"
                tags={["React", "Gmail API", "Slack MCP"]}
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default Projects;
