import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import {
  TableContainStyle,
  TableStyle,
  TableFooterStyle,
} from "src/customize/StyledTable";
import Typography from "@mui/material/Typography";

import {
  StyledTypography7,
  StyledTypography8,
} from "src/customize/StyledTypographys";

interface Props {
  matchesXS: boolean;
  invoice: any;
}

export default function InvoiceTable({ matchesXS, invoice }: Props) {
  const spanLeft: number = !matchesXS ? 0 : 3;
  const spanRight: number = !matchesXS ? 0 : 1;
  return (
    <TableContainer component={Paper} sx={TableContainStyle}>
      <Table sx={TableStyle} aria-label="spanning table">
        {matchesXS && (
          <TableHead>
            <TableRow>
              <TableCell>
                <StyledTypography7 variant="body1">Item Name</StyledTypography7>
              </TableCell>
              <TableCell align="right">
                <StyledTypography7 variant="body1">Qty.</StyledTypography7>
              </TableCell>
              <TableCell align="right">
                <StyledTypography7 variant="body1">Price</StyledTypography7>
              </TableCell>
              <TableCell align="right">
                <StyledTypography7 variant="body1">Total</StyledTypography7>
              </TableCell>
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {invoice.items.map((item: any, index: number) => (
            <TableRow key={index}>
              <TableCell>
                <StyledTypography8 variant="h4">{item.name}</StyledTypography8>
                {!matchesXS && (
                  <Typography variant="h4" color="grey.200">
                    {item.quantity} x ￡{item.price}
                  </Typography>
                )}
              </TableCell>
              {matchesXS && (
                <TableCell align="right">
                  <StyledTypography7 variant="h4">
                    {item.quantity}
                  </StyledTypography7>
                </TableCell>
              )}
              {matchesXS && (
                <TableCell align="right">
                  <StyledTypography7 variant="h4">
                    {item.price}
                  </StyledTypography7>
                </TableCell>
              )}
              <TableCell align="right">
                <StyledTypography8 variant="h4">
                  £ {item.total}
                </StyledTypography8>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter sx={TableFooterStyle}>
          <TableRow sx={{ width: "100%" }}>
            <TableCell colSpan={spanLeft}>
              {" "}
              <Typography variant="body1" color={"#fff"}>
                Amount Due
              </Typography>
            </TableCell>
            <TableCell colSpan={spanRight} align="right">
              <Typography variant="h2" color={"#fff"}>
                £ {invoice.total}
              </Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
