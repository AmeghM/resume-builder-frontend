import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaHome } from "react-icons/fa";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResumeGenerator from "./pages/ResumeGenerator";
import Form from "./pages/Form";
import History from "./pages/History";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume" element={<ResumeGenerator />} />
        <Route path="/form" element={<Form />} />
        <Route path="/history" element={<History />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
