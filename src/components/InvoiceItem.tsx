import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { InvoiceResponse } from "./Invoices";
import Chip from "@mui/material/Chip";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

interface Props {
  data: InvoiceResponse[];
  func: any;
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const formatingNumbers = (number: number) => {
  return number.toLocaleString(undefined, { minimumFractionDigits: 2 });
};

export default function InvoiceItem({ data, func }: Props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                  sx={{
                    mr: 5,
                    width: 100,
                    typography: "h4",
                  }}
                  icon={<FiberManualRecordIcon />}
                ></Chip>
              </Stack>
              <div>
                <Button
                  id="fade-button"
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <NavigateNextIcon></NavigateNextIcon>
                </Button>
                {data.map((invoice, index: number) => (
                  <Menu
                    key={index}
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem
                      onClick={() => {
                        navigate(`/invoices/${invoice.id}`);
                      }}
                    >
                      Details
                    </MenuItem>

                    <MenuItem
                      onClick={() => {
                        navigate(`/invoices/${invoice.id}/edit`);
                      }}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        axios
                          .delete(
                            `http://localhost:9481/invoices/${invoice.id}`
                          )
                          .then((error) => {
                            console.log(error);
                          })
                          .then(() => {
                            window.location.reload();
                          })
                      }
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                ))}
              </div>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
