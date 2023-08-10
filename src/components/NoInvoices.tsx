import { Box } from "@mui/material";
import empty from "../assets/illustration-empty.svg";
import Typography from "@mui/material/Typography";

export default function NoInvoices() {
  return (
    <Box sx={{ margin: "0 auto", width: 241, height: 342 }}>
      <Box sx={{ alignItems: "center" }}>
        <img
          alt="empty-ilustration"
          src={empty}
          style={{
            width: 241,
            height: 200,
            margin: "0 auto",
            alignItems: "center",

            // display: "flex",
            // alignItems: "center",
          }}
        />
        <Typography
          variant="h2"
          color={"text.primary"}
          align="center"
          sx={{ mt: "66px", mb: "23px" }}
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
