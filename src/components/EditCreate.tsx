import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InvoiceResponse } from "./InvoiceResponse";
import { Item } from "./InvoiceResponse";
import { AxiosFunc } from "./AxiosFunc";
import GoBackButton from "./GoBackButton";
import Box from "@mui/material/Box";
import dayjs, { Dayjs } from "dayjs";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StyledBox15, StyledBox16 } from "src/customize/StyledBoxes";
import { StyledTypography9 } from "src/customize/StyledTypographys";
import FooterButtons from "./FooterButtons";
import EditSenderData from "./EditSenderData";
import EditClientData from "./EditClientData";
import EditGeneralData from "./EditGeneralData";
import EditItemsData from "./EditItemsData";

export default function EditCreate() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState<InvoiceResponse | undefined>(
    undefined
  );

  useEffect(() => {
    axios
      .get(`http://localhost:9481/invoices/${id}`)
      .then((res) => {
        setInvoice(res.data);
      })

      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  function addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);
    return date;
  }
  const date = new Date();
  const dateJSON = date.toISOString().split("T")[0];

  const [senderStreet, setSenderStreet] = useState<string | undefined>("");
  const [senderCity, setSenderCity] = useState<string>("");
  const [senderPostCode, setSenderPostCode] = useState<string>("");
  const [senderCountry, setSenderCountry] = useState<string>("");

  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");

  const [clientStreet, setClientStreet] = useState<string>("");
  const [clientCity, setClientCity] = useState<string>("");
  const [clientPostCode, setClientPostCode] = useState<string>("");
  const [clientCountry, setClientCountry] = useState<string>("");

  const [createdAt, setCreatedAt] = React.useState<Dayjs | null | string>(
    dayjs(date)
  );
  const [paymentTerms, setPaymentTerms] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const [items, setItems] = useState<Item[]>([
    { name: "", quantity: 0, price: 0, total: 0 },
  ]);

  const paymentDue = addDays(date, paymentTerms).toISOString().split("T")[0];

  // VALIDATION

  const [senderStreetError, setSenderStreetError] = useState<boolean>(false);
  const [senderCityError, setSenderCityError] = useState<boolean>(false);
  const [senderPostCodeError, setSenderPostCodeError] =
    useState<boolean>(false);
  const [senderCountryError, setSenderCountryError] = useState<boolean>(false);
  const [clientNameError, setClientNameError] = useState<boolean>(false);
  const [clientEmailError, setClientEmailError] = useState<boolean>(false);
  const [clientStreetError, setClientStreetError] = useState<boolean>(false);
  const [clientCityError, setClientCityError] = useState<boolean>(false);
  const [clientPostCodeError, setClientPostCodeError] =
    useState<boolean>(false);
  const [clientCountryError, setClientCountryError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);

  const matches = useMediaQuery("(min-width:1440px)");
  const matchesXS = useMediaQuery("(min-width:768px)");

  const direction = matches ? "row" : "column";

  const itemDelete = () => {
    setItems([{ name: "", quantity: 0, price: 0, total: 0 }]);
  };
  return (
    <StyledBox15 flexDirection={direction}>
      {!matchesXS ? (
        <Box flexDirection="column">
          <GoBackButton color="info.dark"></GoBackButton>
        </Box>
      ) : (
        ""
      )}
      <StyledBox16>
        <StyledTypography9 variant="h2">
          {invoice ? `Edit ${id}` : "New Envoice"}
        </StyledTypography9>
        <EditSenderData
          invoice={invoice}
          senderStreet={senderStreet}
          setSenderStreet={setSenderStreet}
          senderStreetError={senderStreetError}
          senderCity={senderCity}
          setSenderCity={setSenderCity}
          senderCityError={senderCityError}
          senderPostCode={senderPostCode}
          setSenderPostCode={setSenderPostCode}
          senderPostCodeError={senderPostCodeError}
          senderCountry={senderCountry}
          setSenderCountry={setSenderCountry}
          senderCountryError={senderCountryError}
        />
        <EditClientData
          invoice={invoice}
          clientName={clientName}
          setClientName={setClientName}
          clientNameError={clientNameError}
          clientEmail={clientEmail}
          setClientEmail={setClientEmail}
          clientEmailError={clientEmailError}
          clientStreet={clientStreet}
          setClientStreet={setClientStreet}
          clientStreetError={clientStreetError}
          clientCity={clientCity}
          setClientCity={setClientCity}
          clientCityError={clientCityError}
          clientPostCode={clientPostCode}
          setClientPostCode={setClientPostCode}
          clientPostCodeError={clientPostCodeError}
          clientCountry={clientCountry}
          setClientCountry={setClientCountry}
          clientCountryError={clientCountryError}
        />
        <EditGeneralData
          invoice={invoice}
          createdAt={createdAt}
          setCreatedAt={setCreatedAt}
          paymentTerms={paymentTerms}
          setPaymentTerms={setPaymentTerms}
          description={description}
          setDescription={setDescription}
          descriptionError={descriptionError}
        />
        <EditItemsData
          invoice={invoice}
          items={items}
          setItems={setItems}
          itemDelete={itemDelete}
        />
        <FooterButtons
          invoice={invoice}
          draftFunc={() => {
            AxiosFunc(
              id,
              invoice,
              senderStreet,
              senderCity,
              senderPostCode,
              senderCountry,
              clientName,
              clientEmail,
              clientStreet,
              clientCity,
              clientPostCode,
              clientCountry,
              dateJSON,
              paymentTerms,
              paymentDue,
              "draft",
              description,
              items,
              navigate
            );
          }}
          saveFunc={() => {
            if (!invoice) {
              if (senderStreet == "") {
                setSenderStreetError(true);
              } else if (senderCity == "") {
                setSenderCityError(true);
              } else if (senderPostCode == "") {
                setSenderPostCodeError(true);
              } else if (senderCountry == "") {
                setSenderCountryError(true);
              } else if (clientName == "") {
                setClientNameError(true);
              } else if (clientEmail == "") {
                setClientEmailError(true);
              } else if (clientStreet == "") {
                setClientStreetError(true);
              } else if (clientCity == "") {
                setClientCityError(true);
              } else if (clientPostCode == "") {
                setClientPostCodeError(true);
              } else if (clientCountry == "") {
                setClientCountryError(true);
              } else if (description == "") {
                setDescriptionError(true);
              } else {
                AxiosFunc(
                  id,
                  invoice,
                  senderStreet,
                  senderCity,
                  senderPostCode,
                  senderCountry,
                  clientName,
                  clientEmail,
                  clientStreet,
                  clientCity,
                  clientPostCode,
                  clientCountry,
                  dateJSON,
                  paymentTerms,
                  paymentDue,
                  "pending",
                  description,
                  items,
                  navigate
                );
              }
            } else {
              AxiosFunc(
                id,
                invoice,
                senderStreet,
                senderCity,
                senderPostCode,
                senderCountry,
                clientName,
                clientEmail,
                clientStreet,
                clientCity,
                clientPostCode,
                clientCountry,
                dateJSON,
                paymentTerms,
                paymentDue,
                "pending",
                description,
                items,
                navigate
              );
            }
          }}
        />
      </StyledBox16>
    </StyledBox15>
  );
}
