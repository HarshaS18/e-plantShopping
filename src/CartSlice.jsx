import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    // eslint-disable-next-line no-unused-vars
    removeItem: (state, action) => {
      // Implementation will be added in Task 2
    },
    // eslint-disable-next-line no-unused-vars
    updateQuantity: (state, action) => {
      // Implementation will be added in Task 2
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
