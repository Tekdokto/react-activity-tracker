import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { connectWebSocket } from '../redux/services/WebSocketService';

const useWebSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    connectWebSocket(dispatch);

    return () => {
      socket.off('activity');
    };
  }, [dispatch]);

  return socket;
};

export default useWebSocket;
