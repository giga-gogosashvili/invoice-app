import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { InvoiceResponse } from "./Invoices";
import axios from "axios";
import { Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { capitalizeFirstLetter } from "./InvoiceItem";
import { useNavigate } from "react-router-dom";
import { getStatusColor } from "./Invoices";
import Drawer from "./Drawer";
import TableFooter from "@mui/material/TableFooter";
import ConfirmDeletion from "./ConfirmDeletion";
import NavBar from "./NavBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import GoBackButton from "./GoBackButton";
import HeaderButtons from "./HeaderButtons";
import { AxiosPaid } from "./AxiosPaid";
import { StyledBox7, StyledBox8, StyledBox9 } from "src/customize/StyledBoxes";
import {
  StyledStack2,
  StyledStack3,
  StyledStack4,
} from "src/customize/StyledStacks";
import {
  StyledTypography3,
  StyledTypography4,
  StyledTypography5,
  StyledTypography6,
  StyledTypography7,
  StyledTypography8,
} from "src/customize/StyledTypographys";
import { StyledChip1 } from "src/customize/StyledChips";
import { StyledCard1 } from "src/customize/StyledCards";
import {
  TableContainStyle,
  TableStyle,
  TableFooterStyle,
} from "src/customize/StyledTable";
import { StyledBox10 } from "src/customize/StyledBoxes";

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

  const matches = useMediaQuery("(min-width:1440px)");
  const matchesXS = useMediaQuery("(min-width:768px)");

  const direction = matches ? "row" : "column";
  const spanLeft: number = !matchesXS ? 0 : 3;
  const spanRight: number = !matchesXS ? 0 : 1;

  return (
    <>
      <Box display="flex" flexDirection={direction}>
        {matches ? <Drawer></Drawer> : <NavBar></NavBar>}

        <StyledBox7>
          <GoBackButton color="background.paper"></GoBackButton>

          <StyledBox8>
            {invoice && (
              <Box>
                <StyledStack2>
                  <StyledBox9>
                    <StyledTypography3 variant="body1">
                      Status{" "}
                    </StyledTypography3>

                    <StyledChip1
                      label={capitalizeFirstLetter(status)}
                      color={getStatusColor(status)}
                      sx={{
                        typography: "h4",
                      }}
                    />
                  </StyledBox9>
                  {matchesXS ? (
                    <HeaderButtons
                      id={invoice.id}
                      status={invoice.status}
                      clickDelete={() => setOpen(true)}
                      clickPaid={() => AxiosPaid(setStatus, id, invoice)}
                    />
                  ) : (
                    ""
                  )}
                </StyledStack2>
                <StyledCard1>
                  <StyledStack3 spacing={2}>
                    <CardContent>
                      <StyledTypography4 variant="h3">
                        <Box display="inline" color={"#888EB0"}>
                          #
                        </Box>
                        {invoice.id}
                      </StyledTypography4>
                      <StyledTypography5 variant="body1">
                        {invoice.description}
                      </StyledTypography5>
                    </CardContent>
                    <CardContent sx={{ p: 0 }}>
                      <StyledTypography7 variant="body1">
                        {invoice.senderAddress.street} <br />
                        {invoice.senderAddress.city} <br />
                        {invoice.senderAddress.postCode} <br />
                        {invoice.senderAddress.country}
                      </StyledTypography7>
                    </CardContent>
                  </StyledStack3>
                  <StyledStack4 spacing={2}>
                    <Box sx={{ display: "flex" }}>
                      <CardContent sx={{ justifyContent: "space-between" }}>
                        <StyledTypography5 variant="body1">
                          Invoice Date
                        </StyledTypography5>
                        <StyledTypography6 variant="h3">
                          {invoice.createdAt}
                        </StyledTypography6>

                        <StyledTypography5 variant="body1">
                          Payment Due
                        </StyledTypography5>
                        <StyledTypography8 variant="h3">
                          {invoice.paymentDue}
                        </StyledTypography8>
                      </CardContent>
                      <CardContent>
                        <StyledTypography5 variant="body1">
                          Bill To
                        </StyledTypography5>
                        <StyledTypography8 variant="h3">
                          {invoice.clientName}
                        </StyledTypography8>
                        <StyledTypography7 variant="body1">
                          {invoice.clientAddress.street} <br />
                          {invoice.clientAddress.city} <br />
                          {invoice.clientAddress.postCode} <br />
                          {invoice.clientAddress.country}
                        </StyledTypography7>
                      </CardContent>
                    </Box>
                    <CardContent sx={{ p: 0 }}>
                      <StyledTypography5 variant="body1">
                        Sent To
                      </StyledTypography5>
                      <StyledTypography8 variant="h3">
                        {invoice.clientEmail}
                      </StyledTypography8>
                    </CardContent>
                  </StyledStack4>

                  <TableContainer component={Paper} sx={TableContainStyle}>
                    <Table sx={TableStyle} aria-label="spanning table">
                      {matchesXS && (
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <StyledTypography7 variant="body1">
                                Item Name
                              </StyledTypography7>
                            </TableCell>
                            <TableCell align="right">
                              <StyledTypography7 variant="body1">
                                Qty.
                              </StyledTypography7>
                            </TableCell>
                            <TableCell align="right">
                              <StyledTypography7 variant="body1">
                                Price
                              </StyledTypography7>
                            </TableCell>
                            <TableCell align="right">
                              <StyledTypography7 variant="body1">
                                Total
                              </StyledTypography7>
                            </TableCell>
                          </TableRow>
                        </TableHead>
                      )}
                      <TableBody>
                        {invoice.items.map((item, index: number) => (
                          <TableRow key={index}>
                            <TableCell>
                              <StyledTypography8 variant="h4">
                                {item.name}
                              </StyledTypography8>
                              {!matchesXS && (
                                <Typography variant="h4" color="grey.200">
                                  {item.quantity} x ￡{item.price}
                                </Typography>
                              )}
                            </TableCell>
                            {matchesXS && (
                              <TableCell align="right">
                                <StyledTypography7 variant="h4">
                                  {item.quantity}
                                </StyledTypography7>
                              </TableCell>
                            )}
                            {matchesXS && (
                              <TableCell align="right">
                                <StyledTypography7 variant="h4">
                                  {item.price}
                                </StyledTypography7>
                              </TableCell>
                            )}
                            <TableCell align="right">
                              <StyledTypography8 variant="h4">
                                £ {item.total}
                              </StyledTypography8>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter sx={TableFooterStyle}>
                        <TableRow sx={{ width: "100%" }}>
                          <TableCell colSpan={spanLeft}>
                            {" "}
                            <Typography variant="body1" color={"#fff"}>
                              Amount Due
                            </Typography>
                          </TableCell>
                          <TableCell colSpan={spanRight} align="right">
                            <Typography variant="h2" color={"#fff"}>
                              £ {invoice.total}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableFooter>
                    </Table>
                  </TableContainer>
                </StyledCard1>
              </Box>
            )}
          </StyledBox8>
        </StyledBox7>
      </Box>
      {!matchesXS ? (
        <StyledBox10>
          {invoice && (
            <HeaderButtons
              id={invoice.id}
              status={invoice.status}
              clickDelete={() => setOpen(true)}
              clickPaid={() => AxiosPaid(setStatus, id, invoice)}
            />
          )}
        </StyledBox10>
      ) : (
        ""
      )}
      <ConfirmDeletion
        open={open}
        closeDialog={handleClose}
        id={id}
        deleteFunction={deleteFunction}
      />
    </>
  );
}
