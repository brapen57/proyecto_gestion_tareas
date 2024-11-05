import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TareasForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && dueDate) {
      const newTask = { id: Date.now(), name: taskName, dueDate };
      
      onAddTask(newTask);
      alert('Tarea agregada con éxito');
      navigate('/'); 
    } else {
      alert('Por favor completa todos los campos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="taskName">Nombre de la tarea:</label>
        <input
          type="text"
          id="taskName"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="dueDate">Fecha límite:</label>
        <input
          type="date"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default TareasForm;