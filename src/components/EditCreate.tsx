import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { InvoiceResponse } from "./Invoices";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";
import { Item } from "./Invoices";
import React from "react";
import { AxiosFunc } from "./AxiosFunc";
import NavBar from "./NavBar";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  StyledItemFields,
  StyledButton,
  StyledTypoButton,
  StyledTFShort,
  StyledTFLong,
} from "../customize/StyledElements";
import Drawer from "../components/Drawer";

import Button from "@mui/material/Button";

export default function EditCreate() {
  const matches = useMediaQuery("(min-width:992px)");
  const direction = matches ? "row" : "column";

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

  const [status, setStatus] = useState<string>("");

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

  const StyleTF = {
    mt: 1,
    mb: 1,

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
  };

  const dateStyle = {
    mt: 1,
    mb: 1,

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
    width: "240px",
  };
  const segmentTitleStyle = {
    mb: "24px",
    mt: "24px",
    color: "#7C5DFA",
  };

  return (
    <Box
      display="flex"
      flexDirection={direction}
      sx={{
        bgcolor: "background.paper",
      }}
    >
      {/* <Drawer></Drawer> */}
      {matches ? <Drawer></Drawer> : <NavBar></NavBar>}

      <Box
        sx={{
          width: "616px",
          pl: "56px",
          bgcolor: "info.dark",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Typography color="text.primary" variant="h2" sx={{ mt: "59px" }}>
          {invoice ? `Edit ${id}` : "New Envoice"}
        </Typography>

        {/* <Box sx={{ display: "flex", flexWrap: "wrap" }}> */}
        <Typography sx={segmentTitleStyle}>Bill From</Typography>
        <StyledTFLong
          required
          error={senderStreetError}
          helperText={senderStreetError ? "Field can not be empty." : ""}
          fullWidth
          sx={StyleTF}
          InputLabelProps={{ shrink: true }}
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
          sx={{ width: "504px" }}

          // width="100%"
        >
          <StyledTFShort
            required
            sx={StyleTF}
            error={senderCityError}
            helperText={senderCityError ? "Field can not be empty." : ""}
            id="form-city"
            label="City"
            InputLabelProps={{ shrink: true }}
            value={
              invoice ? senderCity || invoice.senderAddress.city : senderCity
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSenderCity(event.target.value);
            }}
          />

          <StyledTFShort
            required
            error={senderPostCodeError}
            helperText={senderPostCodeError ? "Field can not be empty." : ""}
            id="form-postcode-from"
            label="Post Code"
            sx={StyleTF}
            InputLabelProps={{ shrink: true }}
            value={
              invoice
                ? senderPostCode || invoice.senderAddress.postCode
                : senderPostCode
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSenderPostCode(event.target.value);
            }}
          />
          <StyledTFShort
            required
            error={senderCountryError}
            helperText={senderCountryError ? "Field can not be empty." : ""}
            id="form-country"
            label="Country"
            sx={StyleTF}
            InputLabelProps={{ shrink: true }}
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
        <StyledTFLong
          required
          error={clientNameError}
          helperText={clientNameError ? "Field can not be empty." : ""}
          fullWidth
          sx={StyleTF}
          InputLabelProps={{ shrink: true }}
          id="form-name-to"
          label="Client's Name"
          value={invoice ? clientName || invoice.clientName : clientName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setClientName(event.target.value);
          }}
        />
        <StyledTFLong
          required
          error={clientEmailError}
          helperText={clientEmailError ? "Field can not be empty." : ""}
          fullWidth
          sx={StyleTF}
          InputLabelProps={{ shrink: true }}
          id="form-email-to"
          label="Client's Email"
          value={invoice ? clientEmail || invoice.clientEmail : clientEmail}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setClientEmail(event.target.value);
          }}
        />
        <StyledTFLong
          required
          error={clientStreetError}
          helperText={clientStreetError ? "Field can not be empty." : ""}
          fullWidth
          sx={StyleTF}
          InputLabelProps={{ shrink: true }}
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
          sx={{ width: "504px" }}
        >
          <StyledTFShort
            required
            error={clientCityError}
            helperText={clientCityError ? "Field can not be empty." : ""}
            id="form-city-to"
            label="City"
            sx={StyleTF}
            InputLabelProps={{ shrink: true }}
            value={
              invoice ? clientCity || invoice.clientAddress.city : clientCity
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientCity(event.target.value);
            }}
          />
          <StyledTFShort
            required
            error={clientPostCodeError}
            helperText={clientPostCodeError ? "Field can not be empty." : ""}
            id="form-postcode-to"
            label="Post Code"
            sx={StyleTF}
            InputLabelProps={{ shrink: true }}
            value={
              invoice
                ? clientPostCode || invoice.clientAddress.postCode
                : clientPostCode
            }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientPostCode(event.target.value);
            }}
          />
          <StyledTFShort
            required
            error={clientCountryError}
            helperText={clientCountryError ? "Field can not be empty." : ""}
            id="form-country-to"
            label="Country"
            sx={StyleTF}
            InputLabelProps={{ shrink: true }}
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
          sx={{ width: "504px" }}
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
        <StyledTFLong
          required
          error={descriptionError}
          helperText={descriptionError ? "Field can not be empty." : ""}
          fullWidth
          sx={StyleTF}
          InputLabelProps={{ shrink: true }}
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
              width: "504px",
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
                    width: "214px",
                    mt: 1,
                    mb: 1,
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
                    width: "48px",
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
                  type="number"
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

            <StyledButton
              sx={{
                width: "504px",
                mt: 1,
                mb: 1,
                color: "primary.dark",
                bgcolor: "grey.400",
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
            </StyledButton>
          </List>
          {/* {items.map((item, index) => ( */}
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            sx={{ width: "504px" }}
          >
            {invoice && (
              <StyledButton
                sx={{ width: "96px", color: "#7E88C3", bgcolor: "#F9FAFE" }}
                aria-label="add"
                onClick={() => {
                  navigate("/invoices");
                }}
              >
                Discard
              </StyledButton>
            )}
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: "auto",
              }}
            >
              {!invoice && (
                <StyledButton
                  sx={{
                    mr: 1,
                    color: "primary.dark",
                    width: "96px",
                    bgcolor: "grey.400",
                  }}
                  aria-label="add"
                  onClick={() => {
                    navigate("/invoices");
                  }}
                >
                  Cancel
                </StyledButton>
              )}

              {invoice && (
                <StyledButton
                  sx={{
                    mr: 1,
                    width: "133px",
                    bgcolor: "secondary.main",
                    color: "info.main",

                    "&:hover": {
                      bgcolor: "secondary.dark",
                      boxShadow: "none",
                    },
                    "&:active": {
                      boxShadow: "none",
                      bgcolor: "secondary.dark",
                    },
                  }}
                  size="small"
                  color="primary"
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
                  <StyledTypoButton>
                    Save{" "}
                    <Box display="inline" textTransform="lowercase">
                      as
                    </Box>{" "}
                    Draft
                  </StyledTypoButton>
                </StyledButton>
              )}
              <StyledButton
                sx={{
                  mr: 1,
                  width: "128px",
                  color: "#fff",
                  bgcolor: "#7C5DFA",
                  "&:hover": {
                    bgcolor: "#9277FF",
                    boxShadow: "none",
                  },
                  "&:active": {
                    boxShadow: "none",
                    bgcolor: "#9277FF",
                  },
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
              </StyledButton>
            </Stack>
          </Stack>
          {/* ))} */}
        </div>
        {/* </Box> */}
      </Box>
    </Box>
  );
}
