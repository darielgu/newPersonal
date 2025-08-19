import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#cccccc",
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#cccccc",
      disabled: "#999999",
      success: "#4caf50",
      error: "#f44336",
      warning: "#ff9800",
      info: "#2196f3",
    },
  },
  typography: {
    fontFamily: "DM Sans",
    h5: {
      fontWeight: "bold",
      color: "#ffffff",
    },
    h6: {
      fontWeight: "bold",
      color: "#ffffff",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #666",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 0 25px rgba(150, 150, 150, 0.4)",
            borderColor: "#777",
          },
        },
      },
      variants: [
        {
          props: { variant: "experienceCard" },
          style: {
            border: "1px solid #555",
            borderRadius: 12,
            "&:hover": {
              borderColor: "#777",
            },
          },
        },
      ],
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#3a3a3a",
          border: "1px solid #666",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});

export default theme;
