import useSnackbarContext from '@/app/context/snack-context';
import { Snackbar, Alert } from '@mui/material';
import React from 'react';

export default function AppSnackbar() {
  const snackBarContext = useSnackbarContext();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={snackBarContext.isDisplayed}
      autoHideDuration={6000}
      onClose={snackBarContext.onClose}
    >
      <Alert onClose={snackBarContext.onClose} severity="error" sx={{ width: '100%' }}>
        {snackBarContext.msg}
      </Alert>
    </Snackbar>
  );
}
