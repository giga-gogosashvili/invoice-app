import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Fade, Typography } from "@mui/material";
import { forwardRef } from "react";
import Fab from "@mui/material/Fab";
import { upperCase } from "cypress/types/lodash";

const Transition = forwardRef(function Transition(props: any, ref: any) {
  return <Fade ref={ref} {...props} />;
});

export default function ConfirmDeletion({
  open,
  closeDialog,
  id,
  deleteFunction,
}: {
  open: boolean;
  closeDialog: () => void;
  id: string | undefined;
  deleteFunction: () => void;
}) {
  return (
    <div>
      <Dialog
        fullWidth
        scroll="paper"
        open={open}
        onClose={closeDialog}
        onBackdropClick={closeDialog}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            minWidth: { md: "480px", xs: "327px" },
            minHeight: { md: "249px", xs: "220px" },
            p: { md: "35px 32px", xs: "17.5px 16px" },
          },
          // display: "flex",
          // flexDirection: "row",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <DialogTitle variant="h2" id="alert-dialog-title">
          {"Confirm Deletion"}
        </DialogTitle>

        <DialogContent sx={{ width: "100%", height: "100%", m: 0 }}>
          <DialogContentText variant="body1" id="alert-dialog-description">
            Are you sure you want to delete invoice {id}? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Fab
            variant="extended"
            size="medium"
            aria-label="add"
            onClick={closeDialog}
            autoFocus
            sx={{
              mr: "10px",
              borderRadius: "24px",
              color: "primary.dark",
              width: "96px",
              bgcolor: "grey.400",
            }}
          >
            <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
              Cancel
            </Typography>
          </Fab>
          <Fab
            variant="extended"
            size="medium"
            color="error"
            aria-label="add"
            onClick={deleteFunction}
            sx={{
              mr: "10px",
              borderRadius: "24px",
              width: "89px",
              color: "#fff",
              bgcolor: "#EC5757",
              "&:hover": {
                bgcolor: "#FF9797",

                boxShadow: "none",
              },
              "&:active": {
                bgcolor: "#FF9797",

                boxShadow: "none",
              },
            }}
          >
            <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
              Delete
            </Typography>
          </Fab>
        </DialogActions>
      </Dialog>
    </div>
  );
}
