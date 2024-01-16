import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';
import useRooms, { IUseRooms } from '../../hooks/useRooms';

export default function Rooms(): ReactElement {
  const { rooms, loading, error }: IUseRooms = useRooms();

  return (
    <Box>
      <Typography variant="h4">Rooms</Typography>
      <Box>{JSON.stringify(rooms)}</Box>
    </Box>
  );
}
