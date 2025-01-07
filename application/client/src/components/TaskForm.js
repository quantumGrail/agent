import React, { useState } from 'react';
import { Button, TextField, Grid, Box } from '@mui/material';

const TaskForm = ({ onSubmit }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [steps, setSteps] = useState(['']); // Start with one empty step

  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleStepChange = (event, index) => {
    const newSteps = [...steps];
    newSteps[index] = event.target.value;
    setSteps(newSteps);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  const removeStep = (index) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskTitle.trim() && steps.every(step => step.trim())) {
      onSubmit({ title: taskTitle, steps });
      setTaskTitle('');
      setSteps(['']); // Reset steps
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Task Title"
            variant="outlined"
            fullWidth
            value={taskTitle}
            onChange={handleTitleChange}
            required
          />
        </Grid>
        {steps.map((step, index) => (
          <Grid item xs={12} key={index}>
            <TextField
              label={`Step ${index + 1}`}
              variant="outlined"
              fullWidth
              value={step}
              onChange={(event) => handleStepChange(event, index)}
              required
            />
            {steps.length > 1 && (
              <Button onClick={() => removeStep(index)} color="error" sx={{ marginLeft: 1 }}>
                Remove Step
              </Button>
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="outlined" onClick={addStep}>
            Add Step
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Create Task
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TaskForm;
