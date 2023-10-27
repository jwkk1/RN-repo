import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tempValue: '',
};

const authSlice = createSlice({
  name: 'temp',
  initialState,
  reducers: {
    setTempValue(state, action) {
      state.tempValue = action.payload;
    },
  },
});

export const { setTempValue } = authSlice.actions;
export default authSlice.reducer;
