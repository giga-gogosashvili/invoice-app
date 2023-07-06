import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { InvoiceResponse } from "./Invoices";
import axios from "axios";
import { Box, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { capitalizeFirstLetter } from "./InvoiceItem";
import Fab from "@mui/material/Fab";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import { getStatusColor } from "./Invoices";

export default function Invoice() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState<InvoiceResponse | undefined>(
    undefined
  );
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [status, setStatus] = useState<string>("pending");

  useEffect(() => {
    axios
      .get(`http://localhost:9481/invoices/${id}`) //   "/db/data.json"
      .then((res) => {
        setInvoice(res.data);
        setStatus(res.data.status);
      })

      .catch((err) => setError(true)); //useState error
  }, []);

  if (error) {
    return (
      <>
        <p>Invoice did not find</p>
      </>
    );
  }
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          width: 1200,
          bgcolor: "#F8F8FB",
        }}
      >
        {invoice && (
          <Card>
            <BottomNavigation
              sx={{ justifyContent: "left" }}
              showLabels
              onClick={() => navigate(-1)}
              // value={value}
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
            >
              <BottomNavigationAction
                label="Go back"
                icon={<ArrowBackIosIcon />}
              />
            </BottomNavigation>

            <Stack direction="row" spacing={2}>
              <Chip
                label={capitalizeFirstLetter(status)}
                color={getStatusColor(status)}
                sx={{ mr: 5, width: 100 }}
              />
              <Link to={`/invoices/${invoice.id}/edit`}>
                <Fab
                  sx={{ mr: 1 }}
                  variant="extended"
                  size="small"
                  color="primary"
                  aria-label="add"
                >
                  Edit
                </Fab>
              </Link>

              <Fab
                sx={{ mr: 1 }}
                variant="extended"
                size="small"
                color="error"
                aria-label="add"
              >
                Delete
              </Fab>
              {invoice.status !== "paid" && (
                <Fab
                  sx={{ mr: 1 }}
                  variant="extended"
                  size="small"
                  color="primary"
                  aria-label="add"
                  onClick={() => {
                    setStatus("paid");
                    // to do!!!
                    // axios
                    //   .put(`http://localhost:9481/invoices/${id}`, {
                    //     id: id,
                    //     senderAddress: {
                    //       street: invoice.senderAddress.street,
                    //       city: invoice.senderAddress.city,
                    //       postCode: senderPostCode,
                    //       country: senderCountry,
                    //     },
                    //     clientName: clientName,
                    //     clientEmail: clientEmail,
                    //     clientAddress: {
                    //       street: clientStreet,
                    //       city: clientCity,
                    //       postCode: clientPostCode,
                    //       country: clientCountry,
                    //     },
                    //     createdAt: dateJSON,
                    //     paymentTerms: paymentTerms,
                    //     paymentDue: paymentDue,
                    //     status: status,
                    //     description: description,
                    //     items: [
                    //       {
                    //         name: itemName1,
                    //         quantity: itemQuantity1,
                    //         price: itemPrice1,
                    //         total: itemTotal1,
                    //       },
                    //     ],
                    //   })
                    //   .then(
                    //     (response) => {
                    //       console.log(response);
                    //     },
                    //     (error) => {
                    //       console.log(error);
                    //     }
                    //   )
                    //   .then(() => {
                    //     <Navigate to="/invoices" />;
                    //   });
                  }}
                >
                  Mark as Paid
                </Fab>
              )}
              {/* <Fab
                sx={{ mr: 1 }}
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                Mark as Paid
              </Fab> */}
            </Stack>
            <Stack direction="row" spacing={2}>
              <CardContent>
                <Typography variant="h5" component="div">
                  #{invoice.id}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {invoice.description}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {invoice.senderAddress.street} <br />
                  {invoice.senderAddress.city} <br />
                  {invoice.senderAddress.postCode} <br />
                  {invoice.senderAddress.country}
                </Typography>
              </CardContent>
            </Stack>
            <Stack direction="row" spacing={2}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Invoice Date
                </Typography>
                <Typography variant="h5" component="div">
                  {invoice.createdAt}
                </Typography>

                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Payment Due
                </Typography>
                <Typography variant="h5" component="div">
                  {invoice.paymentDue}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Bill To
                </Typography>
                <Typography variant="h5" component="div">
                  {invoice.clientName}
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {invoice.clientAddress.street} <br />
                  {invoice.clientAddress.city} <br />
                  {invoice.clientAddress.postCode} <br />
                  {invoice.clientAddress.country}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Sent To
                </Typography>
                <Typography variant="h5" component="div">
                  {invoice.clientEmail}
                </Typography>
              </CardContent>
            </Stack>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell>Item Name</TableCell>
                    <TableCell align="right">Qty.</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoice.items.map((item, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                      <TableCell align="right">{item.total}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Amount Due</TableCell>
                    <TableCell align="right">{invoice.total}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        )}
      </Box>
    </div>
  );
}
