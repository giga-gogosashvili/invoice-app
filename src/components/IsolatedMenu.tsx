import { Box } from "@mui/material";
import { InvoiceResponse } from "./Invoices";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ConfirmDeletion from "./ConfirmDeletion";
import { useState } from "react";
import axios from "axios";

// interface Props {
//   invoice: InvoiceResponse[];
// }

export default function IsolatedMenu({ id }: any) {
  const navigate = useNavigate();
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
      });
  };
  return (
    <>
      <Box
        sx={{
          height: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "8px 0",
        }}
      >
        <Button
          id="fade-button"
          aria-controls={openMenu ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={handleClick}
        >
          <NavigateNextIcon sx={{ color: "#7C5DFA" }}></NavigateNextIcon>
        </Button>
        <Menu
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
            value={id}
            onClick={() => {
              navigate(`/invoices/${id}`);
            }}
          >
            Details
          </MenuItem>

          <MenuItem
            value={id}
            onClick={() => {
              navigate(`/invoices/${id}/edit`);
            }}
          >
            Edit
          </MenuItem>
          <MenuItem onClick={() => setOpen(true)} value={id}>
            Delete
          </MenuItem>
        </Menu>

        <ConfirmDeletion
          open={open}
          closeDialog={handleClose}
          id={id}
          deleteFunction={() => deleteFunction(id)}
        />
      </Box>
    </>
  );
}
