import {createSlice} from "@reduxjs/toolkit";
import {Task} from "../../types";

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
  extraReducers: (builder) => {}
})

export const todoReducer = todoSlice.reducer;