import React, { useRef, useState } from "react";
import { Box, Stack, Tooltip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import FolderIcon from "@mui/icons-material/Folder";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const Header = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = headerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPos({ x, y });
  };

  const handleMouseLeave = () => {
    setGradientPos({ x: 50, y: 50 });
  };

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
        ref={headerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
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
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 2px 12px 0 rgba(67,233,123,0.10)",
          "&:before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, #349ceb64 0%, rgba(46,46,46,0.95) 80%)`,
            transition: "background 0.2s",
            zIndex: 0,
          },
        }}
      >
        <Tooltip title="Home" arrow>
          <Box
            sx={{
              mt: 1,
              cursor: "pointer",
              color: "white",
              zIndex: 1,
              "&:hover": { color: "#349beb" },
            }}
            onClick={() => navigate("/")}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <HomeIcon fontSize="medium" />
            </motion.div>
          </Box>
        </Tooltip>
        <Tooltip title="Dev Journal" arrow>
          <Box
            sx={{
              mt: 1,
              cursor: "pointer",
              color: "white",
              zIndex: 1,
              "&:hover": { color: "#349beb" },
            }}
            onClick={() => navigate("/dev-journal")}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <BookIcon fontSize="medium" />
            </motion.div>
          </Box>
        </Tooltip>
        <Tooltip title="Projects" arrow>
          <Box
            sx={{
              mt: 1,
              cursor: "pointer",
              color: "white",
              zIndex: 1,
              "&:hover": { color: "#349beb" },
            }}
            onClick={() => navigate("/projects")}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <FolderIcon fontSize="medium" />
            </motion.div>
          </Box>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Header;
