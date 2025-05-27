import React, { useState, useEffect } from "react";
import Task from "../components/Task";
import "../styles/taskmanager.css"; // ✅ Instead of login.css
import { Link } from "react-router-dom";
import axios from "axios";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tasks/${username}`);
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [username]);

  const handleAddTask = async () => {
    if (newTask.trim() === "") return;

    try {
      const response = await axios.post("http://localhost:5000/tasks/add", {
        username,
        text: newTask,
      });

      const createdTask = {
        id: response.data.taskId,
        text: newTask,
        completed: false,
      };

      setTasks((prev) => [...prev, createdTask]);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleToggleTask = async (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    try {
      await axios.put(`http://localhost:5000/tasks/${taskId}`, {
        text: task.text,
        completed: !task.completed,
      });

      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId ? { ...t, completed: !t.completed } : t
        )
      );
    } catch (error) {
      console.error("Error toggling task:", error);
    }
  };

  const handleEditTask = async (taskId, newText) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task) return;

    try {
      await axios.put(`http://localhost:5000/tasks/${taskId}`, {
        text: newText,
        completed: task.completed,
      });

      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, text: newText } : t))
      );
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  const handleClearAll = async () => {
    try {
      await Promise.all(
        tasks.map((task) => axios.delete(`http://localhost:5000/tasks/${task.id}`))
      );
      setTasks([]);
    } catch (error) {
      console.error("Error clearing tasks:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="taskmanager-container">
      <div className="profile-link">
        <Link to="/profile">Profile</Link>
      </div>

      <h1 className="taskmanager-title">Task Manager</h1>

      <div className="taskmanager-input-row">
        <input
          type="text"
          placeholder="Enter a new task"
          className="taskmanager-input"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <button className="taskmanager-button" onClick={handleAddTask}>Add Task</button>
        <button className="taskmanager-button" onClick={handleClearAll}>Clear All</button>

           </div>

      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            text={task.text}
            isCompleted={task.completed}
            onDelete={() => handleDeleteTask(task.id)}
            onToggle={() => handleToggleTask(task.id)}
            onEdit={(newText) => handleEditTask(task.id, newText)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
