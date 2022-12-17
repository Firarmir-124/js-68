import { createSlice} from "@reduxjs/toolkit";
import {Task} from "../../types";
import {addTask, fetchTasks} from "./todoThunks";

interface TaskState {
  loaderBtn: boolean;
  loaderTask: boolean;
  tasks: Task[];
}

const initialState:TaskState = {
  loaderBtn: false,
  loaderTask: false,
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTask.pending, (state) => {
      state.loaderBtn = true;
    });
    builder.addCase(addTask.fulfilled, (state) => {
      state.loaderBtn = false;
    });
    builder.addCase(addTask.rejected, (state) => {
      state.loaderBtn = false;
    });
    builder.addCase(fetchTasks.pending, (state) => {
      state.loaderTask = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loaderTask = false;
      state.tasks = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state) => {
      state.loaderTask = false;
    })
  }
})

export const todoReducer = todoSlice.reducer;