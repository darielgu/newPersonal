import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
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
        <Typography
          sx={{ mt: 1, cursor: "pointer", "&:hover": { color: "gray" } }}
          color="white"
          onClick={() => navigate("/")}
        >
          Home
        </Typography>

        <Typography
          sx={{ mt: 1, cursor: "pointer", "&:hover": { color: "gray" } }}
          color="white"
          onClick={() => navigate("/dev-journal")}
        >
          Dev Journal
        </Typography>

        <Typography
          sx={{ mt: 1, cursor: "pointer", "&:hover": { color: "gray" } }}
          color="white"
        >
          Projects
        </Typography>
      </Stack>
    </Box>
  );
};

export default Header;
