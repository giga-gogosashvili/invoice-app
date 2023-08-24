import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { InvoiceResponse } from "./InvoiceResponse";
import axios from "axios";
import { Box } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { capitalizeFirstLetter } from "./InvoiceItem";
import { useNavigate } from "react-router-dom";
import GetStatusColor from "./GetStatusColor";
import Drawer from "./Drawer";
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
import { StyledCard1, StyledCardContent1 } from "src/customize/StyledCards";
import { StyledBox10 } from "src/customize/StyledBoxes";
import InvoiceTable from "./InvoiceTable";

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
                      color={GetStatusColor(status)}
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
                    <CardContent sx={{ p: 0 }}>
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
                      <CardContent
                        sx={{ justifyContent: "space-between", p: 0 }}
                      >
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
                      <StyledCardContent1>
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
                      </StyledCardContent1>
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
                  <InvoiceTable matchesXS={matchesXS} invoice={invoice} />
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
