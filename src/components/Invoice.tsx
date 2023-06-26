import { useParams } from "react-router";
import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export interface IInvoiceProps {}

export default function Invoice(props: IInvoiceProps) {
  const { id } = useParams();

  useEffect(() => {
    // alert(id);
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </>
  );
}
