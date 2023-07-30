import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Fade } from "@mui/material";
import { forwardRef } from "react";

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
        open={open}
        onClose={closeDialog}
        onBackdropClick={closeDialog}
        TransitionComponent={Transition}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete invoice {id}? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={deleteFunction} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
