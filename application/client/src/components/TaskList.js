import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem } from '@mui/material';

const TaskList = ({ tasks }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      {tasks.map((task, index) => (
        <Card key={index} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h6">{task.title}</Typography>
            <List>
              {task.steps.map((step, stepIndex) => (
                <ListItem key={stepIndex}>
                  <Typography>{`${stepIndex + 1}. ${step}`}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TaskList;
