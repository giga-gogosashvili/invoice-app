import { useEffect, useState } from "react";
import InvoiceItem from "./InvoiceItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Stack from "@mui/material/Stack";
import FilterButton from "./FilterButton";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import NoInvoices from "./NoInvoices";
import { StyledButton } from "../customize/StyledElements";
import Drawer from "./Drawer";
import NavBar from "./NavBar";

import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const matches = useMediaQuery("(min-width:992px)");
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

  const direction = matches ? "row" : "column";

  return (
    <Box
      display="flex"
      flexDirection={direction}
      sx={{
        bgcolor: "background.paper",
      }}
    >
      {matches ? <Drawer></Drawer> : <NavBar></NavBar>}

      {/* <Drawer></Drawer> */}

      <Box sx={{ margin: "0 auto", width: { xl: 730, md: 672, sm: 327 } }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography color="text.primary" variant="h1" sx={{ mt: "78px" }}>
              Invoices{" "}
            </Typography>{" "}
            <Typography
              color="info.main"
              variant="body1"
              sx={{ mt: "16px", mb: "64px" }}
            >
              {invoices.length > 0
                ? `There are ${invoices.length} total invoices`
                : "No invoices"}
            </Typography>{" "}
          </Box>
          <Box
            // direction="row"
            display={"flex"}
            flexDirection={"row"}
            justifyContent="end"
            sx={{
              flexGrow: 1,
              // width: 1200,
              alignItems: "flex-end",
            }}
          >
            <Stack
              direction="row"
              display={"flex"}
              flexDirection={"row"}
              justifyContent="end"
              sx={{
                flexGrow: 1,
              }}
            >
              <FilterButton
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
              />
              <Link to={`/invoices/create`}>
                <StyledButton
                  sx={{
                    bgcolor: "primary.main",
                    width: "150px",
                    "&:hover": {
                      backgroundColor: "#9277FF",
                      boxShadow: "none",
                    },
                    "&:active": {
                      boxShadow: "none",
                      backgroundColor: "#9277FF",
                    },
                  }}
                  variant="contained"
                  startIcon={<AddCircleIcon style={{ fontSize: "28px" }} />}
                >
                  New Invoice
                </StyledButton>
              </Link>
            </Stack>
          </Box>
          {/* <InvoiceItemMenu invoice={invoices}></InvoiceItemMenu> */}
        </Box>

        {invoices && <InvoiceItem data={invoices} func={getStatusColor} />}
        {invoices.length === 0 && <NoInvoices />}
      </Box>
    </Box>
  );
}
