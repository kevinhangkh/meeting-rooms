import { Alert, Box, Grid, Snackbar, Typography } from '@mui/material';
import { ReactElement, SyntheticEvent, useState } from 'react';

import RoomType from '../../types/rooms';
import Room from './Room';

interface Props {
  rooms: RoomType[];
}

export default function RoomList(props: Props): ReactElement {
  const { rooms } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const handleBook = (name: string): void => {
    setSelectedRoom(name);
    setOpen(true);
  };

  const handleClose = (
    event?: SyntheticEvent | Event,
    reason?: string
  ): void => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        data-testid="rooms-list"
        rowSpacing={6}
      >
        {rooms?.map((room) => (
          <Room
            key={room.name}
            room={room}
            handleBook={handleBook}
            open={open}
          />
        ))}
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={3000}
        sx={{ borderRadius: '5px' }}
        data-testid="snackbar"
      >
        <Box display="flex" boxShadow={2} borderRadius="5px">
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            <Typography>{`${selectedRoom} is booked!`}</Typography>
          </Alert>
        </Box>
      </Snackbar>
    </>
  );
}
