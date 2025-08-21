import React from "react";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const Skills = () => {
  const skills = [
    {
      name: "JavaScript",
      level: "Web Dev",
      img: "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png?v=2025071900",
    },
    {
      name: "React",
      level: "Frontend",
      img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-svg-vector.svg",
    },
    {
      name: "Node.js",
      level: "Backend",
      img: "https://camo.githubusercontent.com/e7dfd791db06e9a2c2541f4241c3fba40c6137ba887e2fc3ce508dc3275a0382/68747470733a2f2f7261772e6769746875622e636f6d2f436972636c6543492d5075626c69632f63696d672d6e6f64652f6d61696e2f696d672f636972636c652d6e6f64656a732e7376673f73616e6974697a653d74727565",
    },
    {
      name: "Python",
      level: "FastAPI & FastMCP",
      img: "https://ih1.redbubble.net/image.5525745270.3721/raf,360x360,075,t,fafafa:ca443f4786.u3.jpg",
    },
    {
      name: "Java",
      level: "Object Oriented Programming",
      img: "https://cdn-icons-png.flaticon.com/512/919/919854.png",
    },
    {
      name: "PostgreSQL",
      level: "Database",
      img: "https://www.loggly.com/wp-content/uploads/2017/03/setup-postgres-v2.png",
    },
    {
      name: "C++",
      level: "Object Oriented Programming",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    },
    {
      name: "Express",
      level: "Backend",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
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
      }}
    >
      <Box display="flex" alignItems="center" mb={2} gap={2}>
        <AutoAwesomeIcon fontSize="medium" sx={{ color: "text.secondary" }} />
        <Typography
          fontFamily={"DM Sans"}
          color="text.secondary"
          sx={{ fontSize: "20px" }}
        >
          Technical
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {skills.map((skill, index) => (
          <Box
            key={index}
            sx={{
              borderBottom: "1px solid #333",
              "&:last-child": {
                borderBottom: "none",
              },
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Avatar
              src={skill.img}
              alt={`${skill.name} logo`}
              sx={{ width: 30, height: 30, mr: 1, mt: 1 }}
            />
            <Box
              sx={{ display: "flex", flexDirection: "column", pb: 1, pl: 1 }}
            >
              <Typography variant="body1" color="text.primary">
                {skill.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {skill.level}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default Skills;
