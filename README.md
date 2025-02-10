React Activity Tracker
A real-time activity tracker built with React, Redux, and WebSockets to display user activities dynamically. This project follows best practices, including reusable components, modular architecture, and maintainability.

Features
Real-Time WebSocket Integration: Receives and updates activities instantly.
State Management with Redux Toolkit: Efficiently manages activity state.
Debounced Search: Filter activities with a 300ms debounce delay.
TypeScript Support: Ensures type safety and better maintainability.
Unit Tests: Jest tests for WebSocket handling and Redux state updates.

Tech Stack
React (Functional Components + Hooks)
Redux Toolkit (State Management)
Socket.io (WebSocket Communication)
TypeScript (Strong Typing)
Jest (Unit Testing)
Lodash (Debounced Search Implementation)

Folder Structure
react-activity-tracker/
Project Structure
src/ - Main source folder
components/ - Contains reusable UI components
organisms/ - Higher-level components
ActivityTracker.tsx
hooks/ - Custom React hooks
useWebSocket.ts
redux/ - Redux state management
store.ts - Configures the Redux store
slices/ - Redux slices (reducers)
activitySlice.ts
services/ - Handles WebSocket and API interactions
WebSocketService.ts
tests/ - Unit test files
useWebSocket.test.ts
activitySlice.test.ts
App.tsx - Main application entry point
index.tsx - React app entry file
Root Files
package.json - Dependencies and scripts
README.md - Project documentation
tsconfig.json - TypeScript configuration
.gitignore - Files to ignore in Git

Setup & Installation
1️ Prerequisites
Ensure you have the following installed:

Node.js (>= 18.x)
npm (>= 9.x) or yarn (>= 8.x)
2️ Clone the Repository

git clone https://github.com/Tekdokto/react-activity-tracker.git
cd react-activity-tracker
3️ Install Dependencies

npm install
# or
yarn install
4️ Start the Application

npm start
# or
yarn start
The app will run on http://localhost:3000/.

Running Tests
To ensure everything is working correctly, run:

npm test
# or
yarn test
This will execute Jest unit tests for Redux and WebSocket integration.

📌 Assumptions
WebSocket events are received in the format "User X performed Y action".
The backend WebSocket server already exists and emits activity events.
No authentication is required; activities are displayed globally.
The Redux store only holds real-time activity data, no historical storage.
🔍 Areas for Improvement
Given more time, we could:

Persist Activities in LocalStorage/Database

Currently, activities disappear on refresh. A database connection would improve user experience.
Improve WebSocket Reconnection Handling

Right now, the WebSocket connection is established once. Implementing auto-reconnect on disconnects would improve reliability.
Add User-Specific Activity Tracking

Currently, all activities are anonymous. We could introduce user sessions to track individual actions.
Enhance UI/UX

Improve styling, animations, and notifications for a better experience.

Best Practices Followed
 Component Reusability (Separate components for Activity List, Search Bar, etc.)
 Separation of Concerns (WebSockets in a separate service, Redux in a dedicated folder)
 Type Safety with TypeScript (Prevents runtime errors)
 Unit Testing (Ensures reliable WebSocket and Redux interactions)
 Scalability (Easy to extend features like filtering, sorting, and user-based tracking)