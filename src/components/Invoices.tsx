import { useEffect, useState } from "react";
import InvoiceItem from "./InvoiceItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FilterButton from "./FilterButton";
import { Box } from "@mui/material";
import NoInvoices from "./NoInvoices";
import Drawer from "./Drawer";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { StyledNewButton } from "src/customize/StyledButtons";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  StyledBox1,
  StyledBox2,
  StyledBox3,
  StyledBox4,
} from "src/customize/StyledBoxes";
import {
  StyledTypography1,
  StyledTypography2,
} from "src/customize/StyledTypographys";
import { StyledStack1 } from "src/customize/StyledStacks";

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
      return "error";
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
    <StyledBox1 flexDirection={direction}>
      {matches ? <Drawer></Drawer> : <NavBar></NavBar>}

      <StyledBox2>
        <StyledBox3>
          <Box>
            <StyledTypography1
              sx={{
                typography: { md: "h1", xs: "h2" },
              }}
            >
              Invoices{" "}
            </StyledTypography1>{" "}
            <StyledTypography2 variant="body1">
              {(invoices.length > 0 &&
                (matchesXS
                  ? `There are ${invoices.length} total invoices`
                  : `${invoices.length} invoices`)) ||
                "No invoices"}
            </StyledTypography2>{" "}
          </Box>
          <StyledBox4>
            <StyledStack1>
              <FilterButton
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
              />
              <StyledNewButton
                sx={{
                  typography: "h4",
                }}
                variant="contained"
                startIcon={<AddCircleIcon style={{ fontSize: "28px" }} />}
                onClick={() => {
                  navigate(`/invoices/create`);
                }}
              >
                {matchesXS ? "New Invoice" : "New"}
              </StyledNewButton>
            </StyledStack1>
          </StyledBox4>
        </StyledBox3>

        {invoices && <InvoiceItem data={invoices} func={getStatusColor} />}
        {invoices.length === 0 && <NoInvoices />}
      </StyledBox2>
    </StyledBox1>
  );
}
