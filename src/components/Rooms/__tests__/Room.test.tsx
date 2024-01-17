import { fireEvent, render, screen } from '@testing-library/react';

import Room from '../Room';
import RoomType from '../../../types/rooms';

describe('Room component', () => {
  const handleBook = jest.fn();
  const snackbarClosed = false;
  const snackbarOpen = true;

  it('should show the thumbnail, name, spots and button', () => {
    const room: RoomType = { name: 'Room1', spots: 10, thumbnail: 'thumbnail' };

    render(<Room room={room} handleBook={handleBook} open={snackbarClosed} />);

    const thumbnail = screen.getByTestId('room-thumbnail');
    const name = screen.getByTestId('room-name');
    const spots = screen.getByTestId('room-spots');
    const button = screen.getByTestId('room-book-button-Room1');

    expect(thumbnail).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(spots).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should have the book button disabled if no spots are left', () => {
    const room: RoomType = { name: 'Room1', spots: 0, thumbnail: 'thumbnail' };

    render(<Room room={room} handleBook={handleBook} open={snackbarClosed} />);

    const button = screen.getByTestId('room-book-button-Room1');

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('should have the book button enabled if there are spots left', () => {
    const room: RoomType = { name: 'Room1', spots: 1, thumbnail: 'thumbnail' };

    render(<Room room={room} handleBook={handleBook} open={snackbarClosed} />);

    const button = screen.getByTestId('room-book-button-Room1');

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  it('should call the handleBook function if the user clicks on the book button', () => {
    const room: RoomType = { name: 'Room1', spots: 1, thumbnail: 'thumbnail' };

    render(<Room room={room} handleBook={handleBook} open={snackbarClosed} />);

    const button = screen.getByTestId('room-book-button-Room1');

    fireEvent.click(button);

    expect(handleBook).toBeCalled();
  });

  it('should not call the handleBook function if the user clicks on the book button and the snackbar is already open', () => {
    const room: RoomType = { name: 'Room1', spots: 1, thumbnail: 'thumbnail' };

    render(<Room room={room} handleBook={handleBook} open={snackbarOpen} />);

    const button = screen.getByTestId('room-book-button-Room1');

    fireEvent.click(button);

    expect(handleBook).not.toBeCalled();
  });
});
