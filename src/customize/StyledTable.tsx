import { styled } from "@mui/system";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";

export const TableContainStyle = {
  bgcolor: "grey.400",
  width: { xl: "634px", md: "624px", xs: "279px" },
};

export const TableStyle = {
  [`& .${tableCellClasses.root}`]: {
    borderBottom: "none",
  },
};

export const TableFooterStyle = {
  height: "80px",
  width: "100%",
  bgcolor: "grey.600",
};
