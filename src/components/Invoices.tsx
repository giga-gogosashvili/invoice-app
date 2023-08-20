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
import { useNavigate } from "react-router-dom";

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

  const matches = useMediaQuery("(min-width:1440px)");
  const matchesXS = useMediaQuery("(min-width:768px)");

  const direction = matches ? "row" : "column";
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection={direction}
      sx={{
        bgcolor: "background.paper",
        height: "100vh",
      }}
    >
      {matches ? <Drawer></Drawer> : <NavBar></NavBar>}

      {/* <Drawer></Drawer> */}

      <Box
        sx={{
          margin: "0 auto",
          width: { xl: "730px", md: "672px", xs: "327px" },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography
              color="text.primary"
              sx={{
                mt: { xl: "78px", md: "62px", xs: "36px" },
                typography: { md: "h1", xs: "h2" },
              }}
            >
              Invoices{" "}
            </Typography>{" "}
            <Typography
              color="info.main"
              variant="body1"
              sx={{
                mt: { md: "16px", xs: "8px" },
                mb: { md: "64px", xs: "32px" },
              }}
            >
              {(invoices.length > 0 &&
                (matchesXS
                  ? `There are ${invoices.length} total invoices`
                  : `${invoices.length} invoices`)) ||
                "No invoices"}
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
              <StyledButton
                sx={{
                  bgcolor: "primary.main",
                  width: { md: "150px", xs: "90px" },
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
                onClick={() => {
                  navigate(`/invoices/create`);
                }}
              >
                {matchesXS ? "New Invoice" : "New"}
              </StyledButton>
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
