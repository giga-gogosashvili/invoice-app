import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { StyledEditFields, dateStyle } from "../customize/StyledTextFields";
import { StyledStack5, StyledStack6 } from "src/customize/StyledStacks";
import { longFieldWidth } from "../customize/StyledTextFields";

interface Props {
  invoice: any;
  createdAt: string | Dayjs | null;
  setCreatedAt: (a: string) => void;
  paymentTerms: number | undefined;
  setPaymentTerms: (a: number) => void;
  description: string | undefined;
  setDescription: (a: string) => void;
  descriptionError: boolean;
}

export default function EditGeneralData({
  invoice,
  createdAt,
  setCreatedAt,
  paymentTerms,
  setPaymentTerms,
  description,
  setDescription,
  descriptionError,
}: Props) {
  return (
    <>
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
    </>
  );
}
