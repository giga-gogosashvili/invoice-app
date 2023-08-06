import "./App.css";
import Root from "./components/Root";
import Invoice from "./components/Invoice";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import themeLight from "./themeLight";
import CssBaseline from "@mui/material/CssBaseline";
import EditCreate from "./components/EditCreate";

export default function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
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
  );
}
