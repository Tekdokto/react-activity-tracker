import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { io } from 'socket.io-client';
import useWebSocket from '../hooks/useWebSocket';
import { addActivity } from '../redux/slices/activitySlice';

jest.mock('socket.io-client');

const mockStore = configureStore([]);

describe('useWebSocket Hook', () => {
  it('should receive messages and dispatch them to Redux', () => {
    const store = mockStore({ activity: { activities: [] } });
    const mockDispatch = jest.spyOn(store, 'dispatch');
    
    // Mock WebSocket behavior
    const mockSocket = { on: jest.fn((event, callback) => callback('User joined')) };
    (io as jest.Mock).mockReturnValue(mockSocket);

    renderHook(() => useWebSocket(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    // Expect WebSocket message to trigger Redux action
    expect(mockDispatch).toHaveBeenCalledWith(addActivity('User joined'));
  });
});
