import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import { InvoiceResponse } from "./Invoices";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { List, ListItem, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function EditInvoice() {
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

  // const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <div>
      <h2>New invoice</h2>
      {invoice && (
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <div>
            <h5>Bill From</h5>
            <TextField
              required
              fullWidth
              sx={{ m: 1 }}
              id="form-street-from"
              label="Street Address"
              defaultValue={invoice.senderAddress.street}
            />
            <TextField
              required
              id="form-city"
              label="City"
              sx={{ m: 1 }}
              defaultValue={invoice.senderAddress.city}
            />
            <TextField
              required
              id="form-postcode-from"
              label="Post Code"
              sx={{ m: 1 }}
              defaultValue={invoice.senderAddress.postCode}
            />
            <TextField
              required
              id="form-country"
              label="Country"
              sx={{ m: 1 }}
              defaultValue={invoice.senderAddress.country}
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
              defaultValue={invoice.clientName}
            />
            <TextField
              required
              fullWidth
              sx={{ m: 1 }}
              id="form-email-to"
              label="Client's Email"
              defaultValue={invoice.clientEmail}
            />
            <TextField
              required
              fullWidth
              sx={{ m: 1 }}
              id="form-street-to"
              label="Street Address"
              defaultValue={invoice.clientAddress.street}
            />
            <TextField
              required
              id="form-city-to"
              label="City"
              sx={{ m: 1 }}
              defaultValue={invoice.clientAddress.city}
            />
            <TextField
              required
              id="form-postcode-to"
              label="Post Code"
              sx={{ m: 1 }}
              defaultValue={invoice.clientAddress.postCode}
            />
            <TextField
              required
              id="form-country-to"
              label="Country"
              sx={{ m: 1 }}
              defaultValue={invoice.clientAddress.country}
            />
          </div>

          <DatePicker
            label="Invoice Date"
            defaultValue={dayjs(`${invoice.createdAt}`)}
          />

          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Payment Terms
            </InputLabel>
            <NativeSelect
              defaultValue={invoice.paymentTerms}
              inputProps={{
                name: "payment-terms",
                id: "uncontrolled-native",
              }}
            >
              <option value={14}>Net 14 days</option>

              <option value={30}>Net 30 days</option>
            </NativeSelect>
          </FormControl>
          <TextField
            required
            fullWidth
            sx={{ m: 1 }}
            id="form-description"
            label="Project Description"
            defaultValue={invoice.description}
          />
          <div>
            <h6>Item List</h6>
            {invoice.items.map((item, index: number) => (
              <List key={index}>
                <ListItem
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
                    defaultValue={item.name}
                  />
                  <TextField
                    required
                    id="form-item-qty-1"
                    label="Qty."
                    sx={{ m: 1 }}
                    defaultValue={item.quantity}
                  />
                  <TextField
                    required
                    id="form-item-price-1"
                    label="Price"
                    sx={{ m: 1 }}
                    defaultValue={item.price}
                  />
                  <Stack>
                    {" "}
                    <Chip label="Total: 156.00" />
                  </Stack>
                </ListItem>
              </List>
            ))}
            <Fab variant="extended">
              <AddIcon sx={{ mr: 1 }} />
              Add New Item
            </Fab>

            <div>
              <Fab
                sx={{ mr: 1 }}
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                Discard
              </Fab>
              <Fab
                sx={{ mr: 1 }}
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                Save as Draft
              </Fab>
              <Fab
                sx={{ mr: 1 }}
                variant="extended"
                size="small"
                color="primary"
                aria-label="add"
              >
                Save & Send
              </Fab>
            </div>
          </div>
        </Box>
      )}
    </div>
  );
}
