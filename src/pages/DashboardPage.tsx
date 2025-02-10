import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../components/organisms/SearchBar";
import ActivityTracker from "../components/organisms/ActivityTracker";

const DashboardPage: React.FC = () => {

  return (
    <div className="p-4 max-w-lg mx-auto">
      <ActivityTracker />
    </div>
  );
};

export default DashboardPage;