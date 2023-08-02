import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { InvoiceResponse } from "./Invoices";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ConfirmDeletion from "./ConfirmDeletion";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  invoice: InvoiceResponse[];
}

export default function InvoiceItemMenu({ invoice }: Props) {
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
        // navigate("/invoices");
      });
  };
  return (
    <>
      {invoice.map((invoice: any, index: number) => (
        <Box
          key={index}
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
            <NavigateNextIcon></NavigateNextIcon>
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
            <Link to={`/invoices/${invoice.id}`}>
              <MenuItem
                key={index}
                value={invoice.id}
                // onClick={() => {
                //   navigate(`/invoices/${invoice.id}`);
                // }}
              >
                Details
              </MenuItem>
            </Link>
            <DeleteIcon
              onClick={() => {
                navigate(`/invoices/${invoice.id}`);
              }}
            ></DeleteIcon>
            <MenuItem
              key={index}
              value={invoice.id}
              onClick={() => {
                navigate(`/invoices/${invoice.id}/edit`);
              }}
            >
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => setOpen(true)}
              key={index}
              value={invoice.id}
            >
              Delete
            </MenuItem>
          </Menu>

          <ConfirmDeletion
            open={open}
            closeDialog={handleClose}
            id={invoice.id}
            deleteFunction={() => deleteFunction(invoice.id)}
          />
        </Box>
      ))}
    </>
  );
}
