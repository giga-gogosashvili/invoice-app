import React from "react";
import TextField from "@mui/material/TextField";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { StyledItemFields } from "../customize/StyledTextFields";
import { StyledNewItemButton } from "../customize/StyledButtons";
import { StyledList, StyledListItem } from "src/customize/StyledList";
import { StyledDeleteIcon } from "src/customize/StyledIcons";
import { Item as ItemProps } from "./InvoiceResponse";

interface Props {
  invoice: any;
  items: ItemProps[];
  setItems: (a: ItemProps[]) => void;
}

export default function EditItemsData({ invoice, items, setItems }: Props) {
  return (
    <div>
      <Typography color="#777F98" variant="h3">
        Item List
      </Typography>
      <StyledList>
        {items.map((item: any, index: number) => (
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
                invoice ? item.price || invoice.items[index].price : item.price
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
                    invoice.items[index].price * invoice.items[index].quantity
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
    </div>
  );
}
