import React, { useEffect, useState } from 'react';
import { ENV } from '../environment';
import { SOCKET_EVENTS } from '../helpers/event-types';
import { useSocket } from '../hooks/useSocket';

export const SocketContext = React.createContext();

export const SocketProvider = ({ children }) => {
  const [bands, setBands] = useState([]);
  const { socket, alert } = useSocket(ENV.SOCKET_SERVER);
  const value = { socket, alert, bands };

  useEffect(() => {
    socket.on(SOCKET_EVENTS.CURRENT_BANDS, (bands) => setBands(bands));
  });

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};
