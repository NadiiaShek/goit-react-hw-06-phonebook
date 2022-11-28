import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: [
    {
      text: { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      id: 1,
      completed: false,
    },
    {
      text: { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      id: 2,
      completed: false,
    },
    {
      text: { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      id: 3,
      completed: false,
    },
    {
      text: { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      id: 4,
      completed: false,
    },
  ],
  filter: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    addFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});
export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
