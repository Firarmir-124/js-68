import {createAsyncThunk} from "@reduxjs/toolkit";
import {Task, TaskMutation} from "../../types";
import axiosApi from "../../axiosApi";

export const addTask = createAsyncThunk<void, TaskMutation>(
  'todo/add',
  async (arg) => {
    await axiosApi.post('/todo.json', arg);
   }
)