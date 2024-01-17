import { Box, CircularProgress } from '@mui/material';
import { ReactElement } from 'react';

export default function LoadingSpinner(): ReactElement {
  return (
    <Box data-testid="loading">
      <CircularProgress color="primary" />
    </Box>
  );
}
