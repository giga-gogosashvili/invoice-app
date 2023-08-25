import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import {
  StyledDiscardButton,
  StyledCancelButton,
  StyledDraftButton,
  StyledSaveButton,
} from "../customize/StyledButtons";
import { StyledStack5, StyledStack6 } from "src/customize/StyledStacks";

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
