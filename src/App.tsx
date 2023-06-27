import "./App.css";
import Root from "./components/Root";
import Invoice from "./components/Invoice";
import CreateInvoice from "./components/CreateInvoice";
import EditInvoice from "./components/EditInvoice";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/invoices" element={<Root />} />
          <Route path="invoices/:id" element={<Invoice />} />
          <Route path="invoices/create" element={<CreateInvoice />} />

        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}
