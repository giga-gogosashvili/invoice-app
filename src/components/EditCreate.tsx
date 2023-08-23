import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { InvoiceResponse } from "./Invoices";
import { Item } from "./Invoices";
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
import { List, ListItem, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  StyledItemFields,
  StyledEditFields,
  dateStyle,
  segmentTitleStyle,
} from "../customize/StyledTextFields";
import {
  StyledNewItemButton,
  StyledDiscardButton,
  StyledCancelButton,
  StyledDraftButton,
  StyledSaveButton,
} from "../customize/StyledButtons";

export default function EditCreate() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState<InvoiceResponse | undefined>(
    undefined
  );

  useEffect(() => {
    axios
      .get(`http://localhost:9481/invoices/${id}`) //   "/db/data.json"
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

  // const segmentTitleStyle = {
  //   mb: "24px",
  //   mt: "24px",
  //   color: "#7C5DFA",
  // };

  const matches = useMediaQuery("(min-width:1440px)");
  const matchesXS = useMediaQuery("(min-width:768px)");

  const direction = matches ? "row" : "column";

  return (
    <Box
      display="flex"
      flexDirection={direction}
      sx={{
        bgcolor: { md: "background.paper", xs: "#fff" },
      }}
    >
      {/* <Drawer></Drawer> */}
      {matches ? <Drawer></Drawer> : <NavBar></NavBar>}
      {!matchesXS ? (
        <Box flexDirection="column">
          <GoBackButton color="#fff"></GoBackButton>
        </Box>
      ) : (
        ""
      )}

      <Box
        sx={{
          width: { md: "616px", xs: "375px" },
          pl: { md: "56px", xs: "15px" },
          bgcolor: "info.dark",
          borderRadius: { md: "20px", xs: 0 },
          margin: "0 auto",
        }}
      >
        <Typography
          color="text.primary"
          variant="h2"
          sx={{ mt: { md: "59px", xs: 0 } }}
        >
          {invoice ? `Edit ${id}` : "New Envoice"}
        </Typography>

        {/* <Box sx={{ display: "flex", flexWrap: "wrap" }}> */}
        <Typography sx={segmentTitleStyle}>Bill From</Typography>
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
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{
            width: { md: "504px", xs: "327px" },
            flexFlow: { xs: "row wrap", md: "nowrap" },
            // flexWrap: "wrap",
          }}

          // width="100%"
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
        </Stack>
        <Typography sx={segmentTitleStyle}>Bill To</Typography>
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
        <Stack
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{
            width: { md: "504px", xs: "327px" },
            flexFlow: { xs: "row wrap", md: "nowrap" },
          }}
        >
          <DatePicker
            sx={dateStyle}
            //DO NAPRAWY
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
        </Stack>
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
          <List
            sx={{
              width: { md: "504px", xs: "327px" },
              justifyContent: "space-between",
            }}
          >
            {items.map((item, index) => (
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  p: 0,
                  // width: { md: "504px", xs: "327px" },
                  flexFlow: { xs: "row wrap", md: "nowrap" },
                }}
                key={index}
                // secondaryAction={
                //   <IconButton edge="end" aria-label="delete">
                //     <DeleteIcon />
                //   </IconButton>
                // }
              >
                <StyledItemFields
                  required
                  id="form-item-name-1"
                  label={"Item Name"}
                  sx={{
                    width: { md: "214px", xs: "327px" },
                    mt: 1,
                    mb: 2,
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "primary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "grey.700",
                      },
                    },
                    "& .MuiInputBase-input": {
                      backgroundColor: "grey.50",
                    },
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
                  sx={{
                    width: { md: "48px", xs: "64px" },
                    "& input::-webkit-inner-spin-button": {
                      display: "none",
                    },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "primary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "grey.700",
                      },
                    },
                    "& .MuiInputBase-input": {
                      backgroundColor: "grey.50",
                    },
                  }}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  // variant="filled"
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
                  sx={{
                    width: "100px",
                    "& input::-webkit-inner-spin-button": {
                      display: "none",
                    },
                    "& input[type=number]": {
                      MozAppearance: "textfield",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "primary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: "grey.700",
                      },
                    },
                    "& .MuiInputBase-input": {
                      backgroundColor: "grey.50",
                    },
                  }}
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
                        // borderColor: "primary.main",
                        border: 0,
                      },
                    },
                  }}
                  // type="number"
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
                  <DeleteIcon
                    sx={{
                      "&:hover": {
                        color: "#EC5757",
                        boxShadow: "none",
                      },
                      "&:active": {
                        boxShadow: "none",
                        color: "#EC5757",
                      },
                    }}
                  />
                </IconButton>
              </ListItem>
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
          </List>
          {/* {items.map((item, index) => ( */}

          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: { md: "504px", xs: "327px" }, height: "91px" }}
          >
            {invoice && (
              <StyledDiscardButton
                sx={{
                  typography: "h4",
                }}
                aria-label="add"
                onClick={() => {
                  navigate("/invoices");
                }}
              >
                Discard
              </StyledDiscardButton>
            )}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: "auto",
              }}
            >
              {!invoice && (
                <StyledCancelButton
                  sx={{
                    typography: "h4",
                  }}
                  aria-label="add"
                  onClick={() => {
                    navigate("/invoices");
                  }}
                >
                  Cancel
                </StyledCancelButton>
              )}

              {invoice && (
                <StyledDraftButton
                  sx={{
                    typography: "h4",
                  }}
                  size="small"
                  aria-label="add"
                  type="submit"
                  onClick={
                    // updateInvoice
                    () => {
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
                    }
                  }
                >
                  <Typography variant="h4">
                    Save{" "}
                    <Box display="inline" textTransform="lowercase">
                      as
                    </Box>{" "}
                    Draft
                  </Typography>
                </StyledDraftButton>
              )}
              <StyledSaveButton
                sx={{
                  typography: "h4",
                }}
                size="small"
                color="primary"
                aria-label="add"
                onClick={
                  // updateInvoice
                  () => {
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
                  }
                }
              >
                {invoice ? `Save & Send` : `Save Changes`}
              </StyledSaveButton>
            </Stack>
          </Stack>
          {/* ))} */}
        </div>
        {/* </Box> */}
      </Box>
    </Box>
  );
}
