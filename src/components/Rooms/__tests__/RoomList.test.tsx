import { fireEvent, render, screen } from '@testing-library/react';

import RoomList from '../RoomList';
import Room from '../../../types/rooms';

describe('RoomList component', () => {
  const rooms: Room[] = [{ name: 'Room1', spots: 10, thumbnail: 'thumbnail' }];

  it('should not show the snackbar if no room was booked', () => {
    render(<RoomList rooms={rooms} />);

    const snackbar = screen.queryByTestId('snackbar');

    expect(snackbar).not.toBeInTheDocument();
  });

  it('should show the snackbar containing the name of the room if the room was booked', async () => {
    render(<RoomList rooms={rooms} />);

    const bookButton = screen.getByTestId('room-book-button-Room1');

    expect(bookButton).toBeInTheDocument();

    fireEvent.click(bookButton);

    const snackbar = await screen.findByTestId('snackbar');
    const name = await screen.findByText('Room1 is booked!');

    expect(snackbar).toBeInTheDocument();
    expect(snackbar).toBeVisible();
    expect(name).toBeInTheDocument();
    expect(name).toBeVisible();
  });
});
