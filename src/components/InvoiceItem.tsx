import { Box, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { InvoiceResponse } from "./Invoices";
import Chip from "@mui/material/Chip";

interface Props {
  data: InvoiceResponse[];
  func: any;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const formatingNumbers = (number: number) => {
  return number.toLocaleString(undefined, { minimumFractionDigits: 2 });
};

export default function InvoiceItem({ data, func }: Props) {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          width: 1200,
          bgcolor: "#F8F8FB",
        }}
      >
        <List>
          {data.map((invoice, index: number) => (
            <ListItem sx={{ "& > :not(style)": { m: 0.5 } }} key={index}>
              <ListItemText primary={invoice.id} />
              <ListItemText primary={invoice.paymentDue} />
              <ListItemText primary={invoice.clientName} />
              <ListItemText primary={`£${formatingNumbers(invoice.total)}`} />
              <Stack direction="row" spacing={2}>
                <Chip
                  label={capitalizeFirstLetter(invoice.status)}
                  color={func(invoice.status)}
                  sx={{ mr: 5, width: 100 }}
                />
              </Stack>

              <Link
                to={`/invoices/${invoice.id}`}
                cy-data={`open_${invoice.id}`}
              >
                <Fab color="primary" aria-label="edit">
                  <FileOpenIcon />
                </Fab>
              </Link>
              <Link
                to={`/invoices/${invoice.id}/edit`}
                cy-data={`edit_${invoice.id}`}
              >
                <Fab color="primary" aria-label="edit">
                  <EditIcon />
                </Fab>
              </Link>
              <Fab color="primary" aria-label="edit">
                <DeleteIcon />
              </Fab>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
