import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
  value: number;
}

const initialState: TodoState = {
  value: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // TODO
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
