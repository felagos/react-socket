import { useMemo, useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { TYPE_ALERT } from '../helpers/alert-types';

export const useSocket = (socketServer) => {
  const [online, setOnline] = useState(false);
  const [alert, setAlert] = useState({
    message: 'Offline',
    type: TYPE_ALERT.DANGER,
  });
  const socket = useMemo(
    () => io(socketServer, { transports: ['websocket'] }),
    [socketServer]
  );

  useEffect(() => {
    setOnline(socket.connected);
  }, []);

  useEffect(() => {
    socket.on('connect', () => {
      setOnline(true);
      setAlert({ message: 'Online', type: TYPE_ALERT.INFO });
    });
  }, [socket]);

  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false);
      setAlert({ message: 'Offline', type: TYPE_ALERT.DANGER });
    });
  }, [socket]);

  return {
    socket,
    online,
    alert,
  };
};
