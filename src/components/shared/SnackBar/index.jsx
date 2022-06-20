import { Alert, Snackbar as MuiSnackbar } from "@mui/material";

export const Snackbar = ({
  success,
  error,
  message,
  onClose,
  duration = 2000,
}) => (
  <MuiSnackbar
    open={!!message}
    onClose={onClose}
    autoHideDuration={duration}
    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    sx={{ position: "absolute", marginRight: "0" }}
  >
    <Alert severity={success ? "success" : error ? "error" : undefined}>
      {message}
    </Alert>
  </MuiSnackbar>
);
