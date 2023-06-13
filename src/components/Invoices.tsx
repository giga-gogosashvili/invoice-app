import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";

export default function Invoices() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: 1200,
        bgcolor: "#F8F8FB",
      }}
    >
      <h1>Invoices</h1>
      <p>There are 7 total invoices</p>

      <List>
        <ListItem sx={{ "& > :not(style)": { m: 0.5 } }}>
          <ListItemText primary="RT3080" />
          <ListItemText primary="Due 19 Aug 2021" />
          <ListItemText primary="Jensen Huang" />
          <ListItemText primary="£1,800.90" />
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="success"
              sx={{ mr: 5 }}
              startIcon={<CircleIcon />}
            >
              Paid
            </Button>
          </Stack>

          <Link to="/rt3080">
            <Fab color="primary" aria-label="edit">
              <FileOpenIcon name="open" />
            </Fab>
          </Link>
          <Fab color="primary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab color="primary" aria-label="edit">
            <DeleteIcon />
          </Fab>
        </ListItem>

        <ListItem sx={{ "& > :not(style)": { m: 0.5 } }}>
          <ListItemText primary="RT3080" />
          <ListItemText primary="Due 19 Aug 2021" />
          <ListItemText primary="Jensen Huang" />
          <ListItemText primary="£1,800.90" />
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="error"
              sx={{ mr: 5 }}
              startIcon={<CircleIcon />}
            >
              Not paid
            </Button>
          </Stack>

          <Fab color="primary" aria-label="edit">
            <FileOpenIcon />
          </Fab>
          <Fab color="primary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab color="primary" aria-label="edit">
            <DeleteIcon />
          </Fab>
        </ListItem>
      </List>
    </Box>
  );
}
