import { Card, Typography, Box, Avatar, Button } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import React from "react";
import res from "../../public/resume.png";

const Experience = () => {
  const experiences = [
    {
      position: "SWE Intern",
      company: "Salesforce",
      duration: "Jun 2025 - Aug 2025",
      description: "Software Engineering Intern",
      logo: "https://logo.clearbit.com/salesforce.com", // Using Clearbit for company logos
    },
    {
      position: "Computer Science Tutor",
      company: "San Diego State University",
      duration: "Aug 2025 - Present",
      description: "Tutoring students in computer science concepts",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0kGd1e6cXlha60Ks5ZEWHqvVNthufO-xhQ&s", // Using Clearbit for university logos
    },
    {
      position: "Research Assistant",
      company: "San Diego State University",
      duration: "Febuary 2025 - Jun 2025",
      description: "Assisting in research projects related to computer science",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0kGd1e6cXlha60Ks5ZEWHqvVNthufO-xhQ&s", // Using Clearbit
    },
  ];

  return (
    <Card
      sx={{
        width: "100%",
        padding: 2,
        bgcolor: "background.default",
        borderRadius: "20px",
        maxHeight: "fit-content",
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          textAlign: "center",
          gap: 2,
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <WorkHistoryIcon fontSize="medium" sx={{ color: "text.secondary" }} />
        <Typography
          fontFamily={"DM Sans"}
          color="text.secondary"
          sx={{ fontSize: "20px" }}
        >
          Work
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {experiences.map((exp, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: 1.5,
                gap: 1.5,
              }}
            >
              <Avatar
                src={exp.logo}
                alt={`${exp.company} logo`}
                sx={{
                  width: 35,
                  height: 35,
                }}
              >
                {exp.company.charAt(0)}
              </Avatar>
              <Typography sx={{ color: "text.primary" }}>
                {exp.company}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ marginBottom: 0.5, gap: 1 }}
              >
                {exp.position}
              </Typography>

              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ marginBottom: 0.5, gap: 1 }}
                className="hidden"
              >
                {exp.duration}
              </Typography>
            </Box>
          </Box>
        ))}
        <Button
          variant="outlined"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => window.open(res, "_blank")}
        >
          View Resume
        </Button>
      </Box>
    </Card>
  );
};

export default Experience;
