import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledTypoButton } from "../customize/StyledElements";

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
      <StyledButton
        sx={{
          mr: 1,
          width: "73px",
          color: "primary.dark",
          bgcolor: "grey.400",
          "&:hover": {
            bgcolor: "grey.500",
            color: "#7E88C3",
            boxShadow: "none",
          },
          "&:active": {
            bgcolor: "grey.500",
            color: "#7E88C3",
            boxShadow: "none",
          },
        }}
        aria-label="add"
        onClick={() => {
          navigate(`/invoices/${id}/edit`);
        }}
      >
        Edit
      </StyledButton>

      <StyledButton
        sx={{
          mr: 1,
          width: "89px",
          color: "#fff",
          bgcolor: "#EC5757",
          "&:hover": {
            bgcolor: "#FF9797",

            boxShadow: "none",
          },
          "&:active": {
            bgcolor: "#FF9797",

            boxShadow: "none",
          },
        }}
        aria-label="add"
        onClick={clickDelete}
      >
        Delete
      </StyledButton>
      {status !== "paid" && (
        <StyledButton
          sx={{
            width: { md: "131px", xs: "149px" },
            color: "#fff",
            bgcolor: "#7C5DFA",
            "&:hover": {
              bgcolor: "#9277FF",

              boxShadow: "none",
            },
            "&:active": {
              bgcolor: "#9277FF",

              boxShadow: "none",
            },
          }}
          aria-label="add"
          onClick={clickPaid}
        >
          <StyledTypoButton>
            Mark{" "}
            <Box display="inline" textTransform="lowercase">
              as
            </Box>{" "}
            Paid
          </StyledTypoButton>
        </StyledButton>
      )}
    </Box>
  );
}