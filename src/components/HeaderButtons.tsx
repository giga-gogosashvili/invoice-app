import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  StyledEditButton,
  StyledDeleteButton,
  StyledPaidButton,
} from "src/customize/StyledButtons";
import { Typography } from "@mui/material";

interface Props {
  id: any;
  status: string;
  clickDelete: any;
  clickPaid: any;
}
export default function HeaderButtons({
  id,
  status,
  clickDelete,
  clickPaid,
}: Props) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <StyledEditButton
        sx={{
          typography: "h4",
        }}
        aria-label="add"
        onClick={() => {
          navigate(`/invoices/${id}/edit`);
        }}
      >
        Edit
      </StyledEditButton>

      <StyledDeleteButton
        sx={{
          typography: "h4",
        }}
        aria-label="add"
        onClick={clickDelete}
      >
        Delete
      </StyledDeleteButton>
      {status !== "paid" && (
        <StyledPaidButton
          sx={{
            typography: "h4",
          }}
          aria-label="add"
          onClick={clickPaid}
        >
          <Typography variant="h4">
            Mark{" "}
            <Box display="inline" textTransform="lowercase">
              as
            </Box>{" "}
            Paid
          </Typography>
        </StyledPaidButton>
      )}
    </Box>
  );
}
