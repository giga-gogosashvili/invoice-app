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
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { capitalizeFirstLetter } from "./InvoiceItem";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import { getStatusColor } from "./Invoices";
import Drawer from "./Drawer";
import TableFooter from "@mui/material/TableFooter";
import ConfirmDeletion from "./ConfirmDeletion";
import toggleColorMode from "../App";
import Button from "@mui/material/Button";
import { StyledButton, StyledTypoButton } from "../customize/StyledElements";
import NavBar from "./NavBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import GoBackButton from "./GoBackButton";
import HeaderButtons from "./HeaderButtons";

export default function Invoice() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState<InvoiceResponse | undefined>(
    undefined
  );
  const [open, setOpen] = useState(false);

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
        <p>There is not any invoice.</p>
      </>
    );
  }

  const handleClose = () => {
    setOpen(false);
  };

  const deleteFunction = () => {
    axios
      .delete(`http://localhost:9481/invoices/${id}`)
      .then((error) => {
        console.log(error);
      })
      .then(() => {
        navigate("/invoices");
      });
  };

  const axiosDisplay = (invoice?: any) => {
    () => {
      setStatus("paid");
      // to do!!!
      axios
        .put(`http://localhost:9481/invoices/${id}`, {
          id: id,
          senderAddress: {
            street: invoice.senderAddress.street,
            city: invoice.senderAddress.city,
            postCode: invoice.senderAddress.postCode,
            country: invoice.senderAddress.country,
          },
          clientName: invoice.clientName,
          clientEmail: invoice.clientEmail,
          clientAddress: {
            street: invoice.clientAddress.street,
            city: invoice.clientAddress.city,
            postCode: invoice.clientAddress.postCode,
            country: invoice.clientAddress.country,
          },
          createdAt: invoice.createdAt,
          paymentTerms: invoice.paymentTerms,
          paymentDue: invoice.paymentDue,
          status: "paid",
          description: invoice.description,
          items: invoice.items.map((item: any) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            total: item.total,
          })),
        })
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        )
        .then(() => {
          window.location.reload();
        });
    };
  };
  const matches = useMediaQuery("(min-width:1440px)");
  const matchesXS = useMediaQuery("(min-width:768px)");

  const direction = matches ? "row" : "column";

  return (
    <>
      <Box
        display="flex"
        flexDirection={direction}
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
        }}
      >
        {/* <Drawer></Drawer> */}
        {matches ? <Drawer></Drawer> : <NavBar></NavBar>}

        <Box
          sx={{
            margin: "0 auto",
          }}
        >
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "left",
              alignContent: "center",
              justifyContent: "left",
              width: "100%",
              height: 15,
              mt: "65px",
              mb: "31px",
            }}
          > */}
          <GoBackButton></GoBackButton>
          {/* <BottomNavigation
              sx={{
                display: "inline",
              }}
              showLabels
              onClick={() => navigate(-1)}
            >
              <BottomNavigationAction
                label="Go back"
                icon={
                  <ArrowBackIosIcon
                    sx={{
                      height: "10px",
                      color: "#7C5DFA",
                    }}
                  />
                }
                sx={{
                  display: "inline",
                  color: "text.primary",
                  "& label:hover": {
                    color: "#grey.200",
                    boxShadow: "none",
                  },
                  "&MuiBottomNavigationAction-label:active": {
                    boxShadow: "none",
                    color: "#grey.200",
                  },
                }}
              />
            </BottomNavigation> */}
          {/* </Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {invoice && (
              <Box>
                <Stack
                  direction="row"
                  // spacing={2}
                  sx={{
                    bgcolor: "grey.50",
                    mb: "30px",
                    pr: "22px",
                    width: { md: "730px", xs: "327px" },
                    height: { md: "88px", xs: "91px" },
                    mt: 0,
                    justifyContent: "space-between",
                    borderadius: "8px",
                    boxShadow: "0px 10px 10px -10px rgb(72 84 159 / 10%)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        ml: { md: "32px", xs: "16px" },
                        mr: { md: "20px", xs: "10px" },
                      }}
                    >
                      Status{" "}
                    </Typography>

                    <Chip
                      label={capitalizeFirstLetter(status)}
                      color={getStatusColor(status)}
                      sx={{ mr: "5px", width: "100px" }}
                    />
                  </Box>
                  {matchesXS ? (
                    <HeaderButtons
                      id={invoice.id}
                      status={invoice.status}
                      clickDelete={() => setOpen(true)}
                      clickPaid={axiosDisplay(invoice)}
                    />
                  ) : (
                    ""
                  )}
                </Stack>
                <Card
                  sx={{
                    display: "block",
                    width: 730,
                    // height: 631,
                    borderRadius: "8px",
                    boxShadow: "0px 10px 10px -10px rgb(72 84 159 / 10%)",
                    p: "49px",
                    bgcolor: "grey.50",
                    mb: "65px",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <CardContent>
                      <Typography
                        component="div"
                        variant="h3"
                        color="text.primary"
                        sx={{ mb: "13px" }}
                      >
                        <Box display="inline" color={"#888EB0"}>
                          #
                        </Box>
                        {invoice.id}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary.dark"
                        gutterBottom
                      >
                        {invoice.description}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography
                        variant="body1"
                        color="primary.dark"
                        gutterBottom
                      >
                        {invoice.senderAddress.street} <br />
                        {invoice.senderAddress.city} <br />
                        {invoice.senderAddress.postCode} <br />
                        {invoice.senderAddress.country}
                      </Typography>
                    </CardContent>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ justifyContent: "space-between", mr: "109px" }}
                  >
                    <CardContent sx={{ justifyContent: "space-between" }}>
                      <Typography
                        variant="body1"
                        color="primary.dark"
                        gutterBottom
                        sx={{ mb: "13px" }}
                      >
                        Invoice Date
                      </Typography>
                      <Typography
                        color="text.primary"
                        variant="h3"
                        component="div"
                        sx={{ mb: "20px" }}
                      >
                        {invoice.createdAt}
                      </Typography>

                      <Typography
                        variant="body1"
                        color="primary.dark"
                        gutterBottom
                        sx={{ mb: "13px" }}
                      >
                        Payment Due
                      </Typography>
                      <Typography
                        variant="h3"
                        component="div"
                        color="text.primary"
                      >
                        {invoice.paymentDue}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography
                        variant="body1"
                        color="primary.dark"
                        gutterBottom
                        sx={{ mb: "13px" }}
                      >
                        Bill To
                      </Typography>
                      <Typography
                        variant="h3"
                        component="div"
                        color="text.primary"
                      >
                        {invoice.clientName}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="primary.dark"
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
                        variant="body1"
                        color="primary.dark"
                        gutterBottom
                        sx={{ mb: "13px" }}
                      >
                        Sent To
                      </Typography>
                      <Typography
                        variant="h3"
                        component="div"
                        color="text.primary"
                      >
                        {invoice.clientEmail}
                      </Typography>
                    </CardContent>
                  </Stack>

                  <TableContainer
                    component={Paper}
                    sx={{
                      bgcolor: "grey.400",
                      width: "634px",
                    }}
                  >
                    <Table
                      sx={{
                        [`& .${tableCellClasses.root}`]: {
                          borderBottom: "none",
                        },
                      }}
                      aria-label="spanning table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <Typography variant="body1" color="primary.dark">
                              Item Name
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body1" color="primary.dark">
                              Qty.
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body1" color="primary.dark">
                              Price
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="body1" color="primary.dark">
                              Total
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {invoice.items.map((item, index: number) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Typography variant="h4" color="text.primary">
                                {item.name}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h4" color="primary.dark">
                                {item.quantity}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h4" color="primary.dark">
                                {item.price}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h4" color="text.primary">
                                £ {item.total}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter
                        sx={{
                          height: "80px",
                          width: "100%",
                          bgcolor: "grey.600",
                          // justifyContent: "space-between",
                        }}
                      >
                        <TableRow sx={{ width: "100%" }}>
                          <TableCell colSpan={3}>
                            {" "}
                            <Typography variant="body1" color={"#fff"}>
                              Amount Due
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h2" color={"#fff"}>
                              £ {invoice.total}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </TableContainer>
                </Card>

                {!matchesXS ? (
                  <HeaderButtons
                    id={invoice.id}
                    status={invoice.status}
                    clickDelete={() => setOpen(true)}
                    clickPaid={axiosDisplay(invoice)}
                  />
                ) : (
                  ""
                )}
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <ConfirmDeletion
        open={open}
        closeDialog={handleClose}
        id={id}
        deleteFunction={deleteFunction}
      />
    </>
  );
}
