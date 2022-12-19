import {createAsyncThunk} from "@reduxjs/toolkit";
import {ListTask, Task, TaskMutation} from "../../types";
import axiosApi from "../../axiosApi";
import {RootState} from "../../app/storagе";

export const addTask = createAsyncThunk<void, TaskMutation>(
  'todo/add',
  async (arg) => {
    await axiosApi.post('/todo.json', arg);
   }
)

export const fetchTasks = createAsyncThunk(
  'task/fetch',
  async () => {
    const resTasks = await axiosApi.get<ListTask | null>('/todo.json');
    const tasks = resTasks.data;
    let newTasks:Task[] = [];

    if (tasks) {
      newTasks = Object.keys(tasks).map((id) => {
        const task = tasks[id];
        return {
          ...task,
          id
        };
      });
    }
    return newTasks;
  }
);

export const removeTask = createAsyncThunk<void, string>(
  'task/edit',
  async (arg) => {
    await axiosApi.delete('/todo/' + arg + '.json')
  }
);

export const completedTask = createAsyncThunk<void, string, {state: RootState}>(
  'task/completed',
  async (arg, thunkAPI) => {
    const completedTask = thunkAPI.getState().tasks.find(item => item.id === arg);
    if (completedTask) {
      await axiosApi.put('/todo/' + arg + '.json', completedTask.completed ? {...completedTask, completed: false} : {...completedTask, completed: true});
    }
  }
)