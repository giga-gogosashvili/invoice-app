import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InvoiceResponse } from "./InvoiceResponse";
import { Item } from "./InvoiceResponse";
import { AxiosFunc } from "./AxiosFunc";
import NavBar from "./NavBar";
import GoBackButton from "./GoBackButton";
import Drawer from "../components/Drawer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { IconButton, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  StyledItemFields,
  StyledEditFields,
  dateStyle,
} from "../customize/StyledTextFields";
import {
  StyledNewItemButton,
  StyledDiscardButton,
  StyledCancelButton,
  StyledDraftButton,
  StyledSaveButton,
} from "../customize/StyledButtons";

import { StyledBox15, StyledBox16 } from "src/customize/StyledBoxes";
import {
  StyledTypography9,
  StyledTypography10,
} from "src/customize/StyledTypographys";
import { StyledStack5, StyledStack6 } from "src/customize/StyledStacks";
import { StyledList, StyledListItem } from "src/customize/StyledList";
import { StyledDeleteIcon } from "src/customize/StyledIcons";
import FooterButtons from "./FooterButtons";

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

  const longFieldWidth = { width: { md: "504px", xs: "327px" } };
  const shortFieldWidth = { width: "152px" };
  const thirdFieldWidth = { width: { md: "152px", xs: "327px" } };

  const matches = useMediaQuery("(min-width:1440px)");
  const matchesXS = useMediaQuery("(min-width:768px)");

  const direction = matches ? "row" : "column";

  return (
    <StyledBox15 flexDirection={direction}>
      {matches ? <Drawer></Drawer> : <NavBar></NavBar>}
      {!matchesXS ? (
        <Box flexDirection="column">
          <GoBackButton color="#fff"></GoBackButton>
        </Box>
      ) : (
        ""
      )}
      <StyledBox16>
        <StyledTypography9 variant="h2">
          {invoice ? `Edit ${id}` : "New Envoice"}
        </StyledTypography9>
        <StyledTypography10>Bill From</StyledTypography10>
        <StyledEditFields
          required
          error={senderStreetError}
          helperText={senderStreetError ? "Field can not be empty." : ""}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={longFieldWidth}
          id="form-street-from"
          label="Street Address"
          type="text"
          value={
            invoice
              ? senderStreet || invoice.senderAddress.street
              : senderStreet
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSenderStreet(event.target.value);
          }}
        />
        <StyledStack5
          sx={{
            flexFlow: { xs: "row wrap", md: "nowrap" },
          }}
        >
          <StyledEditFields
            required
            error={senderCityError}
            helperText={senderCityError ? "Field can not be empty." : ""}
            id="form-city"
            label="City"
            InputLabelProps={{ shrink: true }}
            sx={shortFieldWidth}
            value={
              invoice ? senderCity || invoice.senderAddress.city : senderCity
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSenderCity(event.target.value);
            }}
          />

          <StyledEditFields
            required
            error={senderPostCodeError}
            helperText={senderPostCodeError ? "Field can not be empty." : ""}
            id="form-postcode-from"
            label="Post Code"
            InputLabelProps={{ shrink: true }}
            sx={shortFieldWidth}
            value={
              invoice
                ? senderPostCode || invoice.senderAddress.postCode
                : senderPostCode
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSenderPostCode(event.target.value);
            }}
          />
          <StyledEditFields
            required
            error={senderCountryError}
            helperText={senderCountryError ? "Field can not be empty." : ""}
            id="form-country"
            label="Country"
            InputLabelProps={{ shrink: true }}
            sx={thirdFieldWidth}
            value={
              invoice
                ? senderCountry || invoice.senderAddress.country
                : senderCountry
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSenderCountry(event.target.value);
            }}
          />
        </StyledStack5>
        <StyledTypography10>Bill To</StyledTypography10>
        <StyledEditFields
          required
          error={clientNameError}
          helperText={clientNameError ? "Field can not be empty." : ""}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={longFieldWidth}
          id="form-name-to"
          label="Client's Name"
          value={invoice ? clientName || invoice.clientName : clientName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setClientName(event.target.value);
          }}
        />
        <StyledEditFields
          required
          error={clientEmailError}
          helperText={clientEmailError ? "Field can not be empty." : ""}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={longFieldWidth}
          id="form-email-to"
          label="Client's Email"
          value={invoice ? clientEmail || invoice.clientEmail : clientEmail}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setClientEmail(event.target.value);
          }}
        />
        <StyledEditFields
          required
          error={clientStreetError}
          helperText={clientStreetError ? "Field can not be empty." : ""}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={longFieldWidth}
          id="form-street-to"
          label="Street Address"
          value={
            invoice
              ? clientStreet || invoice.clientAddress.street
              : clientStreet
          }
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setClientStreet(event.target.value);
          }}
        />
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{
            width: { md: "504px", xs: "327px" },
            flexFlow: { xs: "row wrap", md: "nowrap" },
          }}
        >
          <StyledEditFields
            required
            error={clientCityError}
            helperText={clientCityError ? "Field can not be empty." : ""}
            id="form-city-to"
            label="City"
            InputLabelProps={{ shrink: true }}
            sx={shortFieldWidth}
            value={
              invoice ? clientCity || invoice.clientAddress.city : clientCity
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientCity(event.target.value);
            }}
          />
          <StyledEditFields
            required
            error={clientPostCodeError}
            helperText={clientPostCodeError ? "Field can not be empty." : ""}
            id="form-postcode-to"
            label="Post Code"
            InputLabelProps={{ shrink: true }}
            sx={shortFieldWidth}
            value={
              invoice
                ? clientPostCode || invoice.clientAddress.postCode
                : clientPostCode
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientPostCode(event.target.value);
            }}
          />
          <StyledEditFields
            required
            error={clientCountryError}
            helperText={clientCountryError ? "Field can not be empty." : ""}
            id="form-country-to"
            label="Country"
            InputLabelProps={{ shrink: true }}
            sx={thirdFieldWidth}
            value={
              invoice
                ? clientCountry || invoice.clientAddress.country
                : clientCountry
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientCountry(event.target.value);
            }}
          />
        </Stack>
        <StyledStack5>
          <DatePicker
            sx={dateStyle}
            value={invoice ? createdAt || invoice.createdAt : createdAt}
            onChange={(newValue) => setCreatedAt(newValue)}
          />
          <FormControl sx={dateStyle}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Payment Terms
            </InputLabel>
            <NativeSelect
              inputProps={{
                name: "payment-due",
                id: "uncontrolled-native",
              }}
              value={
                invoice ? paymentTerms || invoice.paymentTerms : paymentTerms
              }
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                setPaymentTerms(Number(event.target.value));
              }}
            >
              <option value={1}>Net 1 Day</option>
              <option value={7}>Net 7 Day</option>
              <option value={14}>Net 14 Days</option>
              <option value={30}>Net 30 days</option>
            </NativeSelect>
          </FormControl>
        </StyledStack5>
        <StyledEditFields
          required
          error={descriptionError}
          helperText={descriptionError ? "Field can not be empty." : ""}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={longFieldWidth}
          id="form-description"
          label="Project Description"
          value={invoice ? description || invoice.description : description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value);
          }}
        />
        <div>
          <Typography color="#777F98" variant="h3">
            Item List
          </Typography>
          <StyledList>
            {items.map((item, index) => (
              <StyledListItem key={index}>
                <StyledItemFields
                  required
                  id="form-item-name-1"
                  label={"Item Name"}
                  sx={{
                    width: { md: "214px", xs: "327px" },
                    mt: { md: 0, xs: 1 },
                    mb: { md: 0, xs: 2 },
                  }}
                  InputLabelProps={{ shrink: true }}
                  value={
                    invoice ? item.name || invoice.items[index].name : item.name
                  }
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const before = items.slice(0, index);
                    const after = items.slice(index + 1, items.length);
                    const changed = {
                      name: event.target.value,
                      quantity: item.quantity,
                      price: item.price,
                      total: item.total,
                    };
                    setItems(before.concat(changed).concat(after));
                  }}
                />
                <StyledItemFields
                  required
                  id="form-item-qty-1"
                  label="Qty."
                  sx={{ width: { md: "48px", xs: "64px" } }}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  value={
                    invoice
                      ? item.quantity || invoice.items[index].quantity
                      : item.quantity
                  }
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const before = items.slice(0, index);
                    const after = items.slice(index + 1, items.length);
                    const changed = {
                      name: item.name,
                      quantity: event.target.valueAsNumber,
                      price: item.price,
                      total: item.total,
                    };
                    setItems(before.concat(changed).concat(after));
                  }}
                />
                <StyledItemFields
                  required
                  id="form-item-price-1"
                  label="Price"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  sx={{ width: "100px" }}
                  value={
                    invoice
                      ? item.price || invoice.items[index].price
                      : item.price
                  }
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const before = items.slice(0, index);
                    const after = items.slice(index + 1, items.length);
                    const changed = {
                      name: item.name,
                      quantity: item.quantity,
                      price: event.target.valueAsNumber,
                      total: item.total,
                    };
                    setItems(before.concat(changed).concat(after));
                  }}
                />
                <TextField
                  required
                  id="form-item-total"
                  label="Total"
                  sx={{
                    width: "52px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: 0,
                      },
                    },
                  }}
                  disabled
                  InputLabelProps={{ shrink: true }}
                  defaultValue={
                    invoice
                      ? item.quantity * item.price ||
                        invoice.items[index].price *
                          invoice.items[index].quantity
                      : ""
                  }
                />
                <IconButton edge="end" aria-label="delete">
                  <StyledDeleteIcon />
                </IconButton>
              </StyledListItem>
            ))}

            <StyledNewItemButton
              sx={{
                typography: "h4",
              }}
              onClick={() => {
                const withNewItem = items.concat({
                  name: "",
                  quantity: 0,
                  price: 0,
                  total: 0,
                });
                setItems(withNewItem);
              }}
            >
              <AddIcon sx={{ mr: 1 }} />
              Add New Item
            </StyledNewItemButton>
          </StyledList>
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
        </div>
      </StyledBox16>
    </StyledBox15>
  );
}
