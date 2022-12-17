import {configureStore} from "@reduxjs/toolkit";

export const storage = configureStore({
  reducer: {}
})

export type RootState = ReturnType<typeof storage.getState>;
export type AppDispatch = typeof storage.dispatch;