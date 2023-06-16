import { useEffect, useState } from "react";
import InvoiceItem from "./InvoiceItem";
import axios from "axios";

export type InvoiceResponse = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: [
    {
      name: string;
      quantity: number;
      price: number;
      total: number;
    }
  ];
  total: number;
};

export const getStatusColor = (
  status: string
):
  | "success"
  | "error"
  | "primary"
  | "inherit"
  | "secondary"
  | "info"
  | "warning"
  | undefined => {
  switch (status) {
    case "paid":
      return "success";
    case "pending":
      return "warning";
    case "draft":
      return "secondary";
  }
  return "info";
};

export default function Invoices() {
  const [invoices, setInvoices] = useState<InvoiceResponse[]>([]);

  useEffect(() => {
    axios
      .get("/db/data.json")
      .then((res) => setInvoices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Invoices</h1>
      <p>There are {invoices.length} total invoices</p>
      <InvoiceItem data={invoices} func={getStatusColor} />
    </div>
  );
}
