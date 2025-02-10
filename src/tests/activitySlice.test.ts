import activityReducer, { addActivity } from './activitySlice';

describe('Activity Slice', () => {
  it('should return the initial state', () => {
    const initialState = { activities: [] };
    expect(activityReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should add a new activity', () => {
    const initialState = { activities: [] };
    const newState = activityReducer(initialState, addActivity('New activity happened'));

    expect(newState.activities.length).toBe(1);
    expect(newState.activities[0]).toBe('New activity happened');
  });

  it('should maintain previous activities when adding a new one', () => {
    const initialState = { activities: ['Activity 1'] };
    const newState = activityReducer(initialState, addActivity('Activity 2'));

    expect(newState.activities.length).toBe(2);
    expect(newState.activities[0]).toBe('Activity 2'); // Newest at the top
    expect(newState.activities[1]).toBe('Activity 1');
  });
});
