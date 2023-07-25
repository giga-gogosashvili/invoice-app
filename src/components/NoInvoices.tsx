import { Box } from "@mui/material";
import empty from "../assets/illustration-empty.svg";
import Typography from "@mui/material";

export default function NoInvoices() {
  return (
    <Box>
      <img
        alt="empty-ilustration"
        src={empty}
        style={{
          width: 241,
          height: 200,
          margin: "0 auto",

          // display: "flex",
          // alignItems: "center",
        }}
      />
      There arent invoices
    </Box>
  );
}
