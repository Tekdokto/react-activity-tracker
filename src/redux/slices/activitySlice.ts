import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActivityState {
  activities: string[];
}

const initialState: ActivityState = {
  activities: [],
};

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<string>) => {
      state.activities.unshift(action.payload);
    },
  },
});

export const { addActivity } = activitySlice.actions;
export default activitySlice.reducer;
