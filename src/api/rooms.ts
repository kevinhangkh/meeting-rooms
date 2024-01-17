import axios from 'axios';
import Room from '../types/rooms';

const ROOMS_ENDPOINT = `https://wetransfer.github.io/rooms.json`;

/**
 * Fetches the rooms
 * @returns Promise<{ data: { rooms: Room[] } }>
 */
export default function getRooms(): Promise<{ data: { rooms: Room[] } }> {
  return axios.get(ROOMS_ENDPOINT);
}
