import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';

export default function Error(): ReactElement {
  return (
    <Box data-testid="error">
      <Typography variant="h6" color="error">
        Oops, an error occurred... please try again.
      </Typography>
    </Box>
  );
}
