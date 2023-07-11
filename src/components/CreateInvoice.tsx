import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { List, ListItem, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import axios from "axios";
import dayjs, { Dayjs } from "dayjs";
import { useNavigate } from "react-router-dom";
import { Item } from "./Invoices";

export default function CreateInvoice() {
  const navigate = useNavigate();

  function addDays(date: Date, days: number) {
    date.setDate(date.getDate() + days);
    return date;
  }
  const date = new Date();
  const dateJSON = date.toISOString().split("T")[0];

  const [senderStreet, setSenderStreet] = useState<string>("");
  const [senderCity, setSenderCity] = useState<string>("");
  const [senderPostCode, setSenderPostCode] = useState<string>("");
  const [senderCountry, setSenderCountry] = useState<string>("");

  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");

  const [clientStreet, setClientStreet] = useState<string>("");
  const [clientCity, setClientCity] = useState<string>("");
  const [clientPostCode, setClientPostCode] = useState<string>("");
  const [clientCountry, setClientCountry] = useState<string>("");

  const [createdAt, setCreatedAt] = React.useState<Dayjs | null>(dayjs(date));
  const [paymentTerms, setPaymentTerms] = useState<number>(14);
  const [description, setDescription] = useState<string>("");

  const [items, setItems] = useState<Item[]>([
    { name: "", quantity: 0, price: 0, total: 0 },
  ]);

  const [status, setStatus] = useState<string>("pending");

  const paymentDue = addDays(date, paymentTerms).toISOString().split("T")[0];

  return (
    <div>
      <h2>New invoice</h2>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <div>
          <h5>Bill From</h5>
          <TextField
            required
            fullWidth
            sx={{ m: 1 }}
            id="form-street-from"
            label="Street Address"
            value={senderStreet}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSenderStreet(event.target.value);
            }}
          />
          <TextField
            required
            id="form-city"
            label="City"
            sx={{ m: 1 }}
            value={senderCity}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSenderCity(event.target.value);
            }}
          />
          <TextField
            required
            id="form-postcode-from"
            label="Post Code"
            sx={{ m: 1 }}
            value={senderPostCode}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSenderPostCode(event.target.value);
            }}
          />
          <TextField
            required
            id="form-country"
            label="Country"
            sx={{ m: 1 }}
            value={senderCountry}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setSenderCountry(event.target.value);
            }}
          />
        </div>
        <div>
          <h5>Bill To</h5>
          <TextField
            required
            fullWidth
            sx={{ m: 1 }}
            id="form-name-to"
            label="Client's Name"
            value={clientName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientName(event.target.value);
            }}
          />
          <TextField
            required
            fullWidth
            sx={{ m: 1 }}
            id="form-email-to"
            label="Client's Email"
            value={clientEmail}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientEmail(event.target.value);
            }}
          />
          <TextField
            required
            fullWidth
            sx={{ m: 1 }}
            id="form-street-to"
            label="Street Address"
            value={clientStreet}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientStreet(event.target.value);
            }}
          />
          <TextField
            required
            id="form-city-to"
            label="City"
            sx={{ m: 1 }}
            value={clientCity}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientCity(event.target.value);
            }}
          />
          <TextField
            required
            id="form-postcode-to"
            label="Post Code"
            sx={{ m: 1 }}
            value={clientPostCode}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientPostCode(event.target.value);
            }}
          />
          <TextField
            required
            id="form-country-to"
            label="Country"
            sx={{ m: 1 }}
            value={clientCountry}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setClientCountry(event.target.value);
            }}
          />
        </div>
        <DatePicker
          sx={{ m: 1 }}
          value={createdAt}
          onChange={(newValue) => setCreatedAt(newValue)}
        />
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Payment Terms
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: "payment-due",
              id: "uncontrolled-native",
            }}
            value={paymentTerms}
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
        <TextField
          required
          fullWidth
          sx={{ m: 1 }}
          id="form-description"
          label="Project Description"
          value={description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDescription(event.target.value);
          }}
        />
        <div>
          <h6>Item List</h6>
          <List>
            {items.map((item, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <TextField
                  required
                  id="form-item-name-1"
                  label="Item Name"
                  sx={{ m: 1 }}
                  value={item.name}
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
                <TextField
                  required
                  id="form-item-qty-1"
                  label="Qty."
                  sx={{ m: 1 }}
                  type="number"
                  // InputLabelProps={{
                  //   shrink: true,
                  // }}
                  // variant="filled"
                  value={item.quantity}
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
                <TextField
                  required
                  id="form-item-price-1"
                  label="Price"
                  type="number"
                  sx={{ m: 1 }}
                  value={item.price}
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
                <Stack>
                  {" "}
                  <Chip label={`Total: ${item.quantity * item.price}`} />
                </Stack>
              </ListItem>
            ))}

            <Fab
              variant="extended"
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
            </Fab>
          </List>
          <div>
            <Fab
              sx={{ mr: 1 }}
              variant="extended"
              size="small"
              color="primary"
              aria-label="add"
              onClick={() => {
                navigate("/invoices");
              }}
            >
              Discard
            </Fab>
            <Fab
              sx={{ mr: 1 }}
              variant="extended"
              size="small"
              color="primary"
              aria-label="add"
              onClick={() =>
                axios
                  .post("http://localhost:9481/invoices", {
                    senderAddress: {
                      street: senderStreet,
                      city: senderCity,
                      postCode: senderPostCode,
                      country: senderCountry,
                    },
                    clientName: clientName,
                    clientEmail: clientEmail,
                    clientAddress: {
                      street: clientStreet,
                      city: clientCity,
                      postCode: clientPostCode,
                      country: clientCountry,
                    },
                    createdAt: dateJSON,
                    paymentTerms: paymentTerms,
                    paymentDue: paymentDue,
                    status: "draft",
                    description: description,

                    items: items.map((item) => ({
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
                    navigate("/invoices");
                  })
              }
            >
              Save as Draft
            </Fab>
            <Fab
              sx={{ mr: 1 }}
              variant="extended"
              size="small"
              color="primary"
              aria-label="add"
              onClick={() =>
                axios
                  .post("http://localhost:9481/invoices", {
                    senderAddress: {
                      street: senderStreet,
                      city: senderCity,
                      postCode: senderPostCode,
                      country: senderCountry,
                    },
                    clientName: clientName,
                    clientEmail: clientEmail,
                    clientAddress: {
                      street: clientStreet,
                      city: clientCity,
                      postCode: clientPostCode,
                      country: clientCountry,
                    },
                    createdAt: dateJSON,
                    paymentTerms: paymentTerms,
                    paymentDue: paymentDue,
                    status: status,
                    description: description,

                    items: items.map((item) => ({
                      name: item.name,
                      quantity: item.quantity,
                      price: item.price,
                      total: item.quantity * item.price,
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
                    navigate("/invoices");
                  })
              }
            >
              Save & Send
            </Fab>
          </div>
        </div>
      </Box>
    </div>
  );
}
