import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import EditIcon from "@mui/icons-material/Edit";

export default function Invoices() {
  return (
    <Box
      sx={{
        // mx: "auto",
        flexGrow: 1,
        width: 1200,
        bgcolor: "#F8F8FB",
      }}
    >
      <h1>Invoices</h1>
      <p>There are 7 total invoices</p>
      <List>
        <ListItem>
          <ListItemText primary="List item 1"></ListItemText>
          <ListItemIcon>
            <FileOpenIcon />
          </ListItemIcon>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
}
