import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slices/slice";

const store = configureStore({
  reducer: {
    todo: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
