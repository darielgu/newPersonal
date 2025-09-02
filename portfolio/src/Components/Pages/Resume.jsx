import { Box } from "@mui/material";
import resume from "../../public/resume.png";

export default function Resume() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
      <img
        src={resume}
        alt="Dariel Gutierrez Resume"
        style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
      />
    </Box>
  );
}
