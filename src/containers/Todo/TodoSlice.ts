import { createSlice} from "@reduxjs/toolkit";
import {Task} from "../../types";
import {addTask} from "./todoThunks";

interface TaskState {
  loaderBtn: boolean;
  tasks: Task[];
}

const initialState:TaskState = {
  loaderBtn: false,
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
    })
  }
})

export const todoReducer = todoSlice.reducer;