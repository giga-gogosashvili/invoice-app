import "./App.css";
import Root from "./components/Root";
import Invoice from "./components/Invoice";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import themeLight from "./themeLight";
import CssBaseline from "@mui/material/CssBaseline";
import EditCreate from "./components/EditCreate";
import { useState } from "react";
import React from "react";
import { Drawer } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { PaletteMode } from "@mui/material";
import getDesignTokens from "./themeLight";
import { useRef } from "react";
import theme from "./components/Drawer";
import { useEffect } from "react";
import DarkButton from "./components/DarkButton";
import { StyledDarkModeIcon } from "src/customize/StyledIcons";
import { useMemo } from "react";

// const ColorModeContext = React.createContext({
//   toggleColorMode: () => {
//     setMode((prevMode: PaletteMode) =>
//       prevMode === "light" ? "dark" : "light"
//     );
//   },
// });

export default function App() {
  // const [mode, setMode] = React.useState<PaletteMode>("light");

  // const toggleColorMode = () => {
  //   setMode((prevMode: PaletteMode) =>
  //     prevMode === "light" ? "dark" : "light"
  //   );
  // };

  const darkModeTheme = createTheme(getDesignTokens("dark"));
  const lightModeTheme = createTheme(getDesignTokens("light"));
  // const [mode, setMode] = React.useState<PaletteMode>("light");
  // const toggleColorMode = () => {
  //   setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  // };

  // const colorMode = React.useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       setMode((prevMode: PaletteMode) =>
  //         prevMode === "light" ? "dark" : "light"
  //       );
  //     },
  //   }),
  //   []
  // );
  // const testfunc = () => {
  //   alert("Hello");
  // };

  // const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  // const theme = useTheme();
  // const colorMode = React.useContext(ColorModeContext);

  return (
    <>
      <ThemeProvider theme={lightModeTheme}>
        <CssBaseline />
        {/* <Drawer func={toggleColorMode}></Drawer> */}
        {/* <DarkButton></DarkButton> */}

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
    </>
  );
}
