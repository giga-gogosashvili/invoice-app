import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { List, ListItem, ListItemText, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function CreateInvoice() {
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
          />
          <TextField required id="form-city" label="City" sx={{ m: 1 }} />
          <TextField
            required
            id="form-postcode-from"
            label="Post Code"
            sx={{ m: 1 }}
          />
          <TextField required id="form-country" label="Country" sx={{ m: 1 }} />
        </div>
        <div>
          <h5>Bill To</h5>
          <TextField
            required
            fullWidth
            sx={{ m: 1 }}
            id="form-name-to"
            label="Client's Name"
          />
          <TextField
            required
            fullWidth
            sx={{ m: 1 }}
            id="form-email-to"
            label="Client's Email"
          />
          <TextField
            required
            fullWidth
            sx={{ m: 1 }}
            id="form-street-to"
            label="Street Address"
          />
          <TextField required id="form-city-to" label="City" sx={{ m: 1 }} />
          <TextField
            required
            id="form-postcode-to"
            label="Post Code"
            sx={{ m: 1 }}
          />
          <TextField
            required
            id="form-country-to"
            label="Country"
            sx={{ m: 1 }}
          />
        </div>
        <DatePicker sx={{ m: 1 }} />
        <FormControl sx={{ m: 1, width: 200 }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Payment Terms
          </InputLabel>
          <NativeSelect
            defaultValue={"Net 30 days"}
            inputProps={{
              name: "payment-due",
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
        />
        <div>
          <h6>Item List</h6>
          <List>
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
              />
              <TextField
                required
                id="form-item-qty-1"
                label="Qty."
                sx={{ m: 1 }}
              />
              <TextField
                required
                id="form-item-price-1"
                label="Price"
                sx={{ m: 1 }}
              />
              <Stack>
                {" "}
                <Chip label="Total: 156.00" />
              </Stack>
            </ListItem>
            <Fab variant="extended">
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
    </div>
  );
}