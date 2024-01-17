import { render, screen } from '@testing-library/react';

import useRooms from '../hooks/useRooms';
import Rooms from './Rooms';
import Room from '../types/rooms';

jest.mock('../hooks/useRooms');

const mockUseRooms = useRooms as jest.MockedFunction<typeof useRooms>;

beforeEach(() => {
  mockUseRooms.mockReset();
});

describe('Rooms component', () => {
  it('should show the error screen if an error occurs', () => {
    mockUseRooms.mockReturnValueOnce({
      rooms: [],
      loading: false,
      error: new Error('Server error'),
    });

    render(<Rooms />);

    const errorScreen = screen.getByTestId('rooms-error');

    expect(errorScreen).toBeInTheDocument();
  });

  it('should show the loading screen if it is loading', () => {
    mockUseRooms.mockReturnValueOnce({
      rooms: [],
      loading: true,
      error: null,
    });

    render(<Rooms />);

    const loadingScreen = screen.getByTestId('loading');

    expect(loadingScreen).toBeInTheDocument();
  });

  it('should show the rooms list if they are fetched', () => {
    const rooms: Room[] = [
      { name: 'room1', thumbnail: 'thumbnail', spots: 10 },
      { name: 'room2', thumbnail: 'thumbnail', spots: 10 },
      { name: 'room3', thumbnail: 'thumbnail', spots: 10 },
    ];

    mockUseRooms.mockReturnValueOnce({
      rooms,
      loading: false,
      error: null,
    });

    render(<Rooms />);

    const roomsScreen = screen.getByTestId('rooms-list');

    expect(roomsScreen).toBeInTheDocument();
  });
});
