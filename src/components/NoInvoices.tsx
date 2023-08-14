import { Box } from "@mui/material";
import empty from "../assets/illustration-empty.svg";
import Typography from "@mui/material/Typography";

export default function NoInvoices() {
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: { md: "241px", xs: "193px" },
        height: { md: "342px", xs: "278px" },
      }}
    >
      <Box sx={{ alignItems: "center" }}>
        <Box
          sx={{
            width: { md: "241px", xs: "193px" },
            height: { md: "200px", xs: "160px" },
          }}
        >
          <img
            alt="empty-ilustration"
            src={empty}
            style={{
              width: "100%",
              height: "100%",
              margin: "0 auto",
              alignItems: "center",

              // display: "flex",
              // alignItems: "center",
            }}
          />
        </Box>
        <Typography
          variant="h2"
          color={"text.primary"}
          align="center"
          sx={{
            mt: { md: "66px", xs: "33px" },
            mb: { md: "23px", xs: "11.5px" },
          }}
        >
          There is nothing here
        </Typography>
        <Typography variant="body1" color={"info.main"} align="center">
          {" "}
          Create an invoice by clicking the <br />
          New Invoice button and get started
        </Typography>
      </Box>
    </Box>
  );
}
