import React from 'react';
import {Box, Checkbox, CircularProgress, IconButton, Paper, Typography} from "@mui/material";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import {Task} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {completedTask, fetchTasks, removeTask} from "../../containers/Todo/todoThunks";

interface Props {
  task: Task;
}


const TaskItem:React.FC<Props> = ({task}) => {
  const dispatch = useAppDispatch();
  const loaderRemove = useAppSelector((state) => state.loaderRemove);

  const onRemoveTask = async (id:string) => {
    await dispatch(removeTask(id))
    await dispatch(fetchTasks());
  }

  const onClickDone = async (id: string) => {
    await dispatch(completedTask(id));
    await dispatch(fetchTasks());
  }

  return (
    <Paper
      elevation={3}
      sx={{py: 3, pl: 1, mb: 3,
        backgroundColor: '#ff6767',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography component='h3' variant='h5' sx={{color: '#fff' }} >{task.title}</Typography>
      <Box>
        <IconButton aria-label="delete" onClick={() => onRemoveTask(task.id)} disabled={loaderRemove}>
          {!loaderRemove ? <DeleteIcon sx={{fontSize: 28, color: '#fff'}} /> : <CircularProgress />}
        </IconButton>
        <Checkbox
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, color: '#fff' }}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{color: '#fff'}}/>}
          onClick={() => onClickDone(task.id)}
          checked={task.completed}
        />
      </Box>
    </Paper>
  );
};

export default TaskItem;