import {createAsyncThunk} from "@reduxjs/toolkit";
import {ListTask, Task, TaskMutation} from "../../types";
import axiosApi from "../../axiosApi";

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
)