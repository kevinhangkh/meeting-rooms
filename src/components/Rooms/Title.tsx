import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';

export default function Title(): ReactElement {
  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
      data-testid="rooms-header"
    >
      <Typography variant="h3">Rooms</Typography>
      <Box>
        <Typography variant="h5" color="secondary">
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          <br />
          ultricies donec risus sodales. Tempus quis et.
        </Typography>
      </Box>
    </Box>
  );
}
