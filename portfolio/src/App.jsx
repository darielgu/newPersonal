import { useState } from "react";
import Home from "./Components/Pages/Home";
import DevJournal from "./Components/Pages/DevJournal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import "./index.css"; // Importing the CSS file for global styles

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Rendering starts from here */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dev-journal" element={<DevJournal />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
