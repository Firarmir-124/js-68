import React, {useEffect} from 'react';
import {Alert, Box, LinearProgress, Paper} from "@mui/material";
import Form from "../../components/Form/Form";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import TaskItem from "../../components/TaskItem/TaskItem";
import {fetchTasks} from "./todoThunks";


const Todo = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);
  const loaderTask = useAppSelector((state) => state.loaderTask);
  const removeLoader = useAppSelector(state => state.loaderRemove);

  useEffect(() => {
    void dispatch(fetchTasks())
  }, [dispatch])

  return (
    <Paper
      elevation={2}
      sx={{
        backgroundColor: '#42a5f5',
        width: 600,
        height: 600,
        borderRadius: 3
    }}
    >
      <Form/>

      <Box sx={{mt: 5, mx: 2,
        overflowY: 'scroll',
        height: 460,
        '&::-webkit-scrollbar': {width: 0}}
      }>
        { tasks.length > 0 ?
          !loaderTask ?
            <>
              {tasks.map((task) => (
                <TaskItem key={task.id} task={task} removeLoader={removeLoader}/>
              ))}
            </> : <LinearProgress /> : <Alert severity="info">Заданий нет !</Alert>
        }

      </Box>

    </Paper>
  );
};

export default Todo;