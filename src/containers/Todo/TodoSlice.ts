import { createSlice} from "@reduxjs/toolkit";
import {Task} from "../../types";
import {addTask, fetchTasks, removeTask} from "./todoThunks";

interface TaskState {
  loaderBtn: boolean;
  loaderTask: boolean;
  loaderRemove: false | string;
  tasks: Task[];
}

const initialState:TaskState = {
  loaderBtn: false,
  loaderTask: false,
  loaderRemove: false,
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
    });

    builder.addCase(removeTask.pending, (state, {meta}) => {
      state.loaderRemove = meta.arg;
    });
    builder.addCase(removeTask.fulfilled, (state) => {
      state.loaderRemove = false;
    });
    builder.addCase(removeTask.rejected, (state) => {
      state.loaderRemove = false;
    });
  }
})

export const todoReducer = todoSlice.reducer;