import React, { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ textAlign: 'center', marginTop: 4 }}>
        Task Manager
      </Typography>
      <Box sx={{ marginTop: 4 }}>
        <TaskForm onSubmit={handleTaskSubmit} />
      </Box>
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default TaskPage;
