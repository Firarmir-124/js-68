import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "../containers/Todo/TodoSlice";

export const storage = configureStore({
  reducer: todoReducer,
})

export type RootState = ReturnType<typeof storage.getState>;
export type AppDispatch = typeof storage.dispatch;