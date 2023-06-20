import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/Error-page";
import Invoice from "./components/Invoice";
import CreateInvoice from "./components/CreateInvoice";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const router = createBrowserRouter([
  {
    path: "/invoices",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "invoices/:id",

    element: <Invoice />,
    errorElement: <ErrorPage />,
  },
  {
    path: "invoices/create",
    element: <CreateInvoice />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router}></RouterProvider>
    </LocalizationProvider>
  );
}

export default App;
