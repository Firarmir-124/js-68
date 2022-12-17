import React, {useState} from 'react';
import {CircularProgress, IconButton, Paper, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addTask} from "../../containers/Todo/todoThunks";

const Form = () => {
  const dispatch = useAppDispatch();
  const loaderBtn = useAppSelector((state) => state.loaderBtn);

  const [value, setValue] = useState('');

  const onSubmitForm = (e:React.FormEvent) => {
    e.preventDefault();
    dispatch(addTask({
      title: value,
      completed: false,
    }));
  }


  return (
    <Paper
      component="form"
      sx={{ p: '10px 4px', display: 'flex', alignItems: 'center', m: 1 }}
      onSubmit={onSubmitForm}
    >
      <TextField
        sx={{ ml: 1, flex: 1 }}
        label="Название задачи"
        name='title'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <IconButton type="submit" sx={{ p: '10px' }} disabled={loaderBtn}>
        {!loaderBtn ? <AddIcon sx={{fontSize: 40, color: '#ff4400'}}/> : <CircularProgress />}
      </IconButton>
    </Paper>
  );
};

export default Form;