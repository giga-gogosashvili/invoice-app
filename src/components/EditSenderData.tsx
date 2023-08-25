import React from "react";
import { StyledTypography10 } from "src/customize/StyledTypographys";
import { StyledStack5 } from "src/customize/StyledStacks";
import {
  longFieldWidth,
  shortFieldWidth,
  thirdFieldWidth,
} from "../customize/StyledTextFields";
import { StyledEditFields } from "../customize/StyledTextFields";

interface Props {
  invoice: any;
  senderStreet: string | undefined;
  setSenderStreet: (a: string) => void;
  senderStreetError: boolean;
  senderCity: string | undefined;
  setSenderCity: (a: string) => void;
  senderCityError: boolean;
  senderPostCode: string | undefined;
  setSenderPostCode: (a: string) => void;
  senderPostCodeError: boolean;
  senderCountry: string | undefined;
  setSenderCountry: (a: string) => void;
  senderCountryError: boolean;
}

export default function EditSenderData({
  invoice,
  senderStreet,
  setSenderStreet,
  senderStreetError,
  senderCity,
  setSenderCity,
  senderCityError,
  senderPostCode,
  setSenderPostCode,
  senderPostCodeError,
  senderCountry,
  setSenderCountry,
  senderCountryError,
}: Props) {
  return (
    <>
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
          invoice ? senderStreet || invoice.senderAddress.street : senderStreet
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
    </>
  );
}
