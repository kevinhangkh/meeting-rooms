import { Grid } from '@mui/material';
import { ReactElement } from 'react';

import RoomType from '../../types/rooms';
import Room from './Room';

interface Props {
  rooms: RoomType[];
}

export default function RoomList(props: Props): ReactElement {
  const { rooms } = props;

  return (
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
        <Room key={room.name} room={room} />
      ))}
    </Grid>
  );
}
