import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:3000/api/v1';

export const getRandomGreeting = createAsyncThunk(
  'greetings/random',
  async () => {
    const res = await fetch(`${API_URL}/greeting.json`);
    const data = await res.json();
    return data.greeting;
  },
);

const initialState = {
  message: '',
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers(builder) {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      const updatedState = { ...state };
      updatedState.message = action.payload;
      return updatedState;
    });
  },
});

export default greetingsSlice.reducer;
