import React from "react";
import { Stack } from "@mui/material";
import { StyledEditFields } from "../customize/StyledTextFields";
import { StyledTypography10 } from "src/customize/StyledTypographys";
import {
  longFieldWidth,
  shortFieldWidth,
  thirdFieldWidth,
} from "../customize/StyledTextFields";

interface Props {
  invoice: any;
  clientName: string | undefined;
  setClientName: (a: string) => void;
  clientNameError: boolean;
  clientEmail: string | undefined;
  setClientEmail: (a: string) => void;
  clientEmailError: boolean;
  clientStreet: string | undefined;
  setClientStreet: (a: string) => void;
  clientStreetError: boolean;
  clientCity: string | undefined;
  setClientCity: (a: string) => void;
  clientCityError: boolean;
  clientPostCode: string | undefined;
  setClientPostCode: (a: string) => void;
  clientPostCodeError: boolean;
  clientCountry: string | undefined;
  setClientCountry: (a: string) => void;
  clientCountryError: boolean;
}

export default function EditClientData({
  invoice,
  clientName,
  setClientName,
  clientNameError,
  clientEmail,
  setClientEmail,
  clientEmailError,
  clientStreet,
  setClientStreet,
  clientStreetError,
  clientCity,
  setClientCity,
  clientCityError,
  clientPostCode,
  setClientPostCode,
  clientPostCodeError,
  clientCountry,
  setClientCountry,
  clientCountryError,
}: Props) {
  return (
    <>
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
          invoice ? clientStreet || invoice.clientAddress.street : clientStreet
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
    </>
  );
}
