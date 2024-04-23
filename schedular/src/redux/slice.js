import { createSlice } from "@reduxjs/toolkit";

const conditionSlice = createSlice({
  name: "condition",
  initialState: {
    weekCurrent: 0, 
    baseDay: new Date().toISOString(), // 현재 날짜를 가져옴
    currentCondition: 0,
  },
  reducers: {
    inputCurrentCondition: (state, action) => {
      state.currentCondition = action.payload;
    },
    changeWeek: (state, action) => {
      state.weekCurrent = state.weekCurrent + action.payload;
    },
    resetWeek: (state, action) => {
      state.weekCurrent = 0;
    },
  },
});

export default conditionSlice.reducer;
export const { inputCurrentCondition, changeWeek, resetWeek } = conditionSlice.actions;
