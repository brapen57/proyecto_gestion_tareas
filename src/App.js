import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import TareasForm from './TareasForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home tasks={tasks} setTasks={setTasks} />} />
          <Route path="/add-task" element={<TareasForm onAddTask={handleAddTask} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
