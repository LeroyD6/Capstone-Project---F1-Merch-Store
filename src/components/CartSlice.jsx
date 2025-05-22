import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0
};

// Cart slice for managing cart state
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      // Recalculate total price
      state.totalPrice = state.items.reduce((total, item) => 
        total + (item.price * item.quantity), 0);
    },
    
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      
      // Recalculate total price
      state.totalPrice = state.items.reduce((total, item) => 
        total + (item.price * item.quantity), 0);
    },
    
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      
      if (item) {
        item.quantity = quantity;
      }
      
      // Recalculate total price
      state.totalPrice = state.items.reduce((total, item) => 
        total + (item.price * item.quantity), 0);
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
