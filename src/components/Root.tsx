import React from "react";
import Invoices from "./Invoices";
import { Outlet } from "react-router-dom";

export default function Root() {
  return <Invoices />;
}
