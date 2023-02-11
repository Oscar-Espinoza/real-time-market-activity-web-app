import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  currencies: [],
};

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies', async () => {
  const response = await axios.get('https://api.coincap.io/v2/assets');
  return response.data.data;
});

const currencies = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrencies.pending]: (state) => ({ ...state, loading: true }),
    [fetchCurrencies.fulfilled]: (state, action) => (
      { ...state, loading: false, currencies: action.payload }
    ),
    [fetchCurrencies.rejected]: (state) => ({ ...state, loading: false }),
  },
});

export default currencies.reducer;
