import { Box } from '@mui/material';
import { ReactElement } from 'react';

import useRooms, { IUseRooms } from '../hooks/useRooms';
import RoomList from '../components/Rooms/RoomList';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import Title from '../components/Rooms/Title';
import Error from '../components/ui/Error';

export default function Rooms(): ReactElement {
  const { rooms, loading, error }: IUseRooms = useRooms();

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
      <Title />

      <Box>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <Error />
        ) : (
          <RoomList rooms={rooms} />
        )}
      </Box>
    </Box>
  );
}
