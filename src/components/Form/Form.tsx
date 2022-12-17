import React from 'react';
import {IconButton, Paper, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
const Form = () => {

  return (
    <Paper
      component="form"
      sx={{ p: '10px 4px', display: 'flex', alignItems: 'center', m: 1 }}
    >
      <TextField
        sx={{ ml: 1, flex: 1 }}
        label="Название задачи"
        name='title'
        required
      />
      <IconButton type="submit" sx={{ p: '10px' }}>
        <AddIcon sx={{fontSize: 40, color: '#ff4400'}}/>
      </IconButton>
    </Paper>
  );
};

export default Form;