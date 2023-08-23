import { tableCellClasses } from "@mui/material/TableCell";

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
