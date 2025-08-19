import React from "react";
import { Box, Typography } from "@mui/material";
// import kody from "/src/Assets/IMG_5205.png";
// import du from "/src/Assets/IMG_5251.png";
// import img1 from "/src/Assets/IMG_4713.png";
// import img2 from "/src/Assets/IMG_4956.png";
// import img3 from "/src/Assets/IMG_1122.JPG";

const AboutMe = () => {
  return (
    <Box>
      <Typography sx={{ color: "grey" }}>
        some cool photos in my camera roll !
      </Typography>
      <Box
        className="images_box"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          mt: 3,
        }}
      >
        <Box
          sx={{
            ":hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <img
            src={kody}
            style={{
              height: "320px",
              borderRadius: "4px",
              width: "250px",
              border: "1px solid #ccc",
            }}
          />
        </Box>
        <Box
          sx={{
            ":hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <img
            src={img2}
            style={{
              height: "320px",
              borderRadius: "4px",
              width: "250px",
              border: "1px solid #ccc",
            }}
          />
        </Box>
        <Box
          sx={{
            ":hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <img
            src={img1}
            style={{
              height: "320px",
              borderRadius: "4px",
              width: "250px",
              border: "1px solid #ccc",
            }}
          />
        </Box>
        <Box
          sx={{
            ":hover": {
              transform: "scale(1.05)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <img
            src={img3}
            style={{
              height: "320px",
              borderRadius: "4px",
              width: "250px",
              border: "1px solid #ccc",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
