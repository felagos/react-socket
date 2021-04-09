import React from 'react';
import { ENV } from '../environment';
import { useSocket } from '../hooks/useSocket';

export const SocketContext = React.createContext();

export const SocketProvider = ({ children }) => {
  const { socket, alert } = useSocket(ENV.SOCKET_SERVER);
  const value = { socket, alert };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
};
