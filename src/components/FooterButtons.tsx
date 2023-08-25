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
interface Props {
  invoice: any;
  draftFunc: () => void | undefined;
  saveFunc: () => void | undefined;
}

export default function HeaderButtons({ invoice, draftFunc, saveFunc }: Props) {
  const navigate = useNavigate();

  return (
    <StyledStack5 alignItems="center" sx={{ height: "91px" }}>
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
      <StyledStack6>
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
            onClick={draftFunc}
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
          onClick={saveFunc}
        >
          {invoice ? `Save & Send` : `Save Changes`}
        </StyledSaveButton>
      </StyledStack6>
    </StyledStack5>
  );
}
