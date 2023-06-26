import { useParams } from "react-router";
import { useEffect } from "react";
<<<<<<< HEAD
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
=======
import { useState } from "react";
import { InvoiceResponse } from "./Invoices";
import axios from "axios";
import { Box, List, ListItem, ListItemText, Stack } from "@mui/material";
>>>>>>> invoice useEffect added

export interface IInvoiceProps {}

export default function Invoice(props: IInvoiceProps) {
  const { id } = useParams();
  const [invoices, setInvoices] = useState<InvoiceResponse[]>([]);
  const [allInvoices, setAllInvoices] = useState<InvoiceResponse[]>([]);

  useEffect(() => {
    // alert(id);
  }, []);

<<<<<<< HEAD
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </>
=======
  useEffect(() => {
    axios
      .get("/db/data.json")
      .then((res) => {
        setAllInvoices(res.data);
        setInvoices(res.data);
        setInvoices(allInvoices.filter((invoice) => invoice.id === id));
      })

      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          width: 1200,
          bgcolor: "#F8F8FB",
        }}
      >
        <List>
          {invoices.map((invoice, index: number) => (
            <ListItem sx={{ "& > :not(style)": { m: 0.5 } }} key={index}>
              <ListItemText primary={invoice.id} />
              <ListItemText primary={invoice.paymentDue} />
              <ListItemText primary={invoice.clientName} />
              <Stack direction="row" spacing={2}></Stack>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
>>>>>>> invoice useEffect added
  );
}
