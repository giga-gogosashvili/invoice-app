import "./App.css";
import Root from "./components/Root";
import Invoice from "./components/Invoice";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import EditCreate from "./components/EditCreate";
import React from "react";
import { PaletteMode } from "@mui/material";
import getDesignTokens from "./theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "./components/NavBar";
import { StyledBox1 } from "./customize/StyledBoxes";

export default function App() {
  const matches = useMediaQuery("(min-width:1440px)");

  const [mode, setMode] = React.useState<PaletteMode>("light");

  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) =>
      prevMode === "light" ? "dark" : "light"
    );
  };

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const direction = matches ? "row" : "column";

  return (
    <StyledBox1 flexDirection={direction}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar func={toggleColorMode} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <BrowserRouter>
            <Routes>
              <Route path="/invoices" element={<Root />} />
              <Route path="invoices/:id" element={<Invoice />} />
              <Route path="invoices/create" element={<EditCreate />} />
              <Route path="invoices/:id/edit" element={<EditCreate />} />
              <Route path="*" element={<p>Path not resolved</p>} />
            </Routes>
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledBox1>
  );
}
