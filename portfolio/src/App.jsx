import { useState } from "react";
import Home from "./Components/Pages/Home";
import DevJournal from "./Components/Pages/DevJournal";
import Projects from "./Components/Pages/Projects";
import CreatePost from "./Components/Pages/CreatePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Resume from "./Components/Pages/Resume";
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
            <Route path="/projects" element={<Projects />} />
            <Route path="/secret" element={<CreatePost />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
