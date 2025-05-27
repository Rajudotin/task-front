import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import TaskManager from "./pages/TaskManager";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/taskmanager" element={<TaskManager />} />
      </Routes>
    </Router>
  );
}

export default App;
