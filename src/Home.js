import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Bienvenido al Gestor de Tareas</h1>
      {tasks.length === 0 ? (
        <p>No hay tareas pendientes</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <React.Fragment key={task.id}>
              <li>
                <span>{task.name} - {task.dueDate}</span>
                <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
              </li>
            </React.Fragment>
          ))}
        </ul>
      )}
      <Link to="/add-task">
        <button>Agregar Tarea</button>
      </Link>
    </div>
  );
};

export default Home;