import { ReactElement } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

import RoomType from '../../types/rooms';
import { getRemainingSpotsString } from '../../utils/helpers';

const BORDER_RADIUS: string = '10px';

interface Props {
  room: RoomType;
  handleBook: (name: string) => void;
  open: boolean;
}

export default function Room(props: Props): ReactElement {
  const { room, handleBook, open } = props;

  const handleClick = (): void => {
    if (!open) {
      handleBook(room.name);
    }
  };

  const bookingDisabled = () => room.spots <= 0;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} data-testid="room-card">
      <Box sx={{ borderRadius: BORDER_RADIUS }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Box height={{ xs: 200 }} width="100%">
            <Box
              component="img"
              src={room.thumbnail}
              alt={room.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: BORDER_RADIUS,
              }}
              data-testid="room-thumbnail"
            />
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'center', sm: 'start' }}
            width="100%"
            paddingTop={1.5}
            paddingBottom={{ xs: 2, sm: 1 }}
            boxSizing="border-box"
            gap={{ xs: 2, sm: 0 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems={{ xs: 'center', sm: 'start' }}
              width="100%"
              gap={0.5}
            >
              <Typography
                fontSize="1.1rem"
                fontWeight={800}
                data-testid="room-name"
              >
                {room.name}
              </Typography>
              <Typography
                data-testid="room-spots"
                fontSize="1.1rem"
                color="primary"
              >
                {getRemainingSpotsString(room.spots)}
              </Typography>
            </Box>
            <Button
              disabled={bookingDisabled()}
              onClick={handleClick}
              data-testid={`room-book-button-${room.name}`}
              variant="contained"
            >
              <Box paddingX={{ xs: 0, sm: 4 }}>
                <Typography
                  whiteSpace="nowrap"
                  textTransform="none"
                  fontWeight={800}
                  fontSize="0.9rem"
                >
                  Book!
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
