import { Box, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import { InvoiceResponse } from "./Invoices";

interface Props {
  data: InvoiceResponse[];
  func: any;
}
const InvoiceItem = ({ data, func }: Props) => {
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
              <ListItemText primary={`£${invoice.total}`} />
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color={func(invoice.status)}
                  sx={{ mr: 5 }}
                  startIcon={<CircleIcon />}
                >
                  {invoice.status}
                </Button>
              </Stack>

              <Link to={`/${invoice.id}`} cy-data="open">
                <Fab color="primary" aria-label="edit">
                  <FileOpenIcon />
                </Fab>
              </Link>
              <Link to={`/${invoice.id}/edit`} cy-data="edit">
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
};

export default InvoiceItem;
