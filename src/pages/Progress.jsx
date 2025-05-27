import React from "react";
// import "../styles/progress.css"; // Import your CSS file for styling

const Progress = () => {
  return (
    <div className="min-h-screen flex bg-yellow-100">
      {/* Sidebar */}
      <div className="bg-white w-64 p-6 shadow-lg">
        <h1 className="text-xl font-bold mb-6">Dashboard</h1>
        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>My Tasks</li>
          <li>Notifications</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Progress</h2>

        {/* My Tracking Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h3 className="font-semibold mb-2">My Tracking</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Create wireframe</span>
              <span>1h 25m</span>
            </li>
            <li className="flex justify-between">
              <span>Slack logo design</span>
              <span>30m</span>
            </li>
          </ul>
        </div>

        {/* Daily Tasks Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h3 className="font-semibold mb-2">Daily Tasks</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>Task 1</span>
              <input type="checkbox" />
            </li>
            <li className="flex justify-between">
              <span>Task 2</span>
              <input type="checkbox" />
            </li>
          </ul>
        </div>

        {/* Weekly Summary Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h3 className="font-semibold mb-2">Weekly Summary</h3>
          <p>Total Tasks Completed: 5</p>
          <p>Time Spent: 3h 45m</p>
        </div>

        {/* Goals Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
          <h3 className="font-semibold mb-2">Goals</h3>
          <p>Complete the new dashboard UI by Friday</p>
        </div>

        {/* Activity Feed Section */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-2">Activity Feed</h3>
          <ul className="space-y-2">
            <li>Completed Task 1 - 1h ago</li>
            <li>Started Task 2 - 30m ago</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Progress;
