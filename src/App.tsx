import "./App.css";
import Root from "./components/Root";
import Invoice from "./components/Invoice";
import CreateInvoice from "./components/CreateInvoice";
import EditInvoice from "./components/EditInvoice";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import themeLight from "./themeLight";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      {/* <NavDrawer></NavDrawer> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Routes>
            <Route path="/invoices" element={<Root />} />
            <Route path="invoices/:id" element={<Invoice />} />
            <Route path="invoices/create" element={<CreateInvoice />} />
            <Route path="invoices/:id/edit" element={<EditInvoice />} />
            <Route path="*" element={<p>Path not resolved</p>} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
