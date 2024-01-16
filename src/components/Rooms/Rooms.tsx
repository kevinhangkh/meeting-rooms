import { Box, CircularProgress, Typography } from '@mui/material';
import { ReactElement } from 'react';

import useRooms, { IUseRooms } from '../../hooks/useRooms';

export default function Rooms(): ReactElement {
  const { rooms, loading, error }: IUseRooms = useRooms();

  const Header = (): ReactElement => (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="start"
      // boxSizing="border-box"
      data-testid="rooms-header"
    >
      <Typography variant="h3">Rooms</Typography>
      <Box>
        <Typography variant="h5" color="#9A9A9A">
          Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
          <br />
          ultricies donec risus sodales. Tempus quis et.
        </Typography>
      </Box>
    </Box>
  );

  const Error = (): ReactElement => (
    <Box data-testid="rooms-error">
      <Typography variant="h6" color="#D94C4B">
        Oops, an error occurred... please try again.
      </Typography>
    </Box>
  );

  const Loading = (): ReactElement => (
    <Box data-testid="rooms-loading">
      <CircularProgress sx={{ color: 'black' }} />
    </Box>
  );

  return (
    <Box
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={6}
      padding={4}
      boxSizing="border-box"
      data-testid="rooms-box"
    >
      <Header />

      <Box>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error />
        ) : (
          <Box data-testid="rooms-list">{JSON.stringify(rooms)}</Box>
        )}
      </Box>
    </Box>
  );
}
