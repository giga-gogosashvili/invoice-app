import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { InvoiceResponse } from "./Invoices";
import Chip from "@mui/material/Chip";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import StyledListItem from "../customize/StyledListItemLP";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ConfirmDeletion from "./ConfirmDeletion";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteFunction = (id: string) => {
    axios
      .delete(`http://localhost:9481/invoices/${id}`)
      .then((error) => {
        console.log(error);
      })
      .then(() => {
        window.location.reload();
        // navigate("/invoices");
      });
  };

  return (
    <>
      <div>
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <List>
            {data.map((invoice, index: number) => (
              <StyledListItem key={index}>
                <ListItemText>
                  <Typography component="div" variant="h4">
                    <Box display="inline" color={"#7E88C3"}>
                      #
                    </Box>
                    {invoice.id}
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography component="div" variant="body1" color="info.main">
                    Due{" "}
                    <Box display="inline" color={"info.light"}>
                      {invoice.paymentDue}
                    </Box>
                  </Typography>
                </ListItemText>

                <ListItemText
                  primary={invoice.clientName}
                  sx={{
                    "& .MuiListItemText-primary": {
                      color: "info.main",
                      typography: "body1",
                    },
                  }}
                  color="info"
                />
                <ListItemText
                  primary={`£${formatingNumbers(invoice.total)}`}
                  sx={{
                    "& .MuiListItemText-primary": {
                      typography: "h3",
                    },
                  }}
                />
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

                {/* ))} */}
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
                      open={openMenu}
                      // onClick={() => setOpen(true)}
                      onClose={handleCloseMenu}
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
                      <MenuItem onClick={() => setOpen(true)}>Delete</MenuItem>
                    </Menu>
                  ))}
                </div>
                <ConfirmDeletion
                  open={open}
                  closeDialog={handleClose}
                  id={invoice.id}
                  deleteFunction={() => deleteFunction(invoice.id)}
                />
              </StyledListItem>
            ))}
          </List>
        </Box>
      </div>
    </>
  );
}
