import { useEffect, useState } from "react";
import InvoiceItem from "./InvoiceItem";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import FilterButton from "./FilterButton";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

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
  items: Item[];
  total: number;
};

export type Item = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export const getStatusColor = (
  status: string
):
  | "success"
  | "error"
  | "primary"
  | "default"
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
  const [filterStatus, setFilterStatus] = useState<string | undefined>(
    undefined
  );
  const [allInvoices, setAllInvoices] = useState<InvoiceResponse[]>([]);

  useEffect(() => {
    axios
      // ("http://localhost:9481/invoices", { method: "GET", mode: "no-cors" })
      .get("http://localhost:9481/invoices") //    /db/data.json
      .then((res) => {
        setAllInvoices(res.data);
        setInvoices(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setInvoices(allInvoices);
    if (filterStatus !== undefined) {
      setInvoices(
        allInvoices.filter((invoice) => invoice.status == filterStatus)
      );
    }
  }, [filterStatus]);

  return (
    <div>
      <Typography color="gray.900" variant="h1">
        Invoices
      </Typography>
      <Typography color="info.main" variant="body1">
        There are {invoices.length} total invoices
      </Typography>
      <Stack
        direction="row"
        display={"flex"}
        justifyContent="right"
        sx={{
          flexGrow: 1,
          width: 1200,
        }}
      >
        <FilterButton
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
        <Link to={`/invoices/create`}>
          <Button
            sx={{ bgcolor: "primary.main", width: 150, height: 48 }}
            variant="contained"
            startIcon={<AddCircleIcon />}
          >
            New Invoice
          </Button>
        </Link>
      </Stack>

      <InvoiceItem data={invoices} func={getStatusColor} />
    </div>
  );
}
