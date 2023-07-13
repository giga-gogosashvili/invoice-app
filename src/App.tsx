import "./App.css";
import Root from "./components/Root";
import Invoice from "./components/Invoice";
import CreateInvoice from "./components/CreateInvoice";
import EditInvoice from "./components/EditInvoice";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7C5DFA",
      light: "#F8F8FB",
      dark: "#9277FF",
    },
    secondary: {
      main: "#1E2139",
      light: "#252945",
      dark: "#141625",
    },
    info: {
      main: "#888EB0",
      light: "#7E88C3",
      dark: "#DFE3FA",
    },
    grey: {
      900: "#0C0E16",
    },
    error: {
      main: "#EC5757",
      light: "#9277FF",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
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
