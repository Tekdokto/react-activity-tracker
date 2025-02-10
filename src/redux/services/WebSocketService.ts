import { io, Socket } from 'socket.io-client';
import { Dispatch } from '@reduxjs/toolkit';
import { addActivity } from '../slices/activitySlice';

const socket: Socket = io('ws://your-websocket-endpoint');

export const connectWebSocket = (dispatch: Dispatch): void => {
  socket.on('activity', (data: string) => {
    dispatch(addActivity(data));
  });
};

export default socket;
