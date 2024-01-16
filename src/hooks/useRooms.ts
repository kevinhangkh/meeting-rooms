import { useEffect, useState } from 'react';
import Room from '../models/rooms';
import getRooms from '../api/rooms';

export interface IUseRooms {
  rooms: Room[];
  loading: boolean;
  error: Error | null;
}

export default function useRooms(): IUseRooms {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchRooms = async (): Promise<void> => {
    try {
      const response = await getRooms();
      if (response?.data?.rooms) {
        const { rooms } = response.data;
        setRooms(rooms);
      }
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return { rooms, loading, error };
}
