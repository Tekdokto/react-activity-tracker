import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { debounce } from 'lodash';
import useWebSocket from '../hooks/useWebSocket';

const ActivityTracker: React.FC = () => {
  useWebSocket(); // Initializing the WebSocket connection

  const activities = useSelector((state: RootState) => state.activity.activities);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredActivities, setFilteredActivities] = useState<string[]>([]);

  // Debounced Search using lodash
  const handleSearch = useCallback(
    debounce((query: string) => {
      setFilteredActivities(
        activities.filter((activity) =>
          activity.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, 300),
    [activities]
  );

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery, handleSearch]);

  return (
    <div>
      <h2>Real-Time Activity Tracker</h2>
      <input
        type="text"
        placeholder="Search activity..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul>
        {(searchQuery ? filteredActivities : activities).map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityTracker;