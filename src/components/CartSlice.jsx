import { createSlice } from "@reduxjs/toolkit";

// Functions to manage cart state in localStorage
const loadCartFromStorage = () => {
  try {
    const cartData = localStorage.getItem("cartState");
    if (cartData) {
      return JSON.parse(cartData);
    }
  } catch (error) {
    console.error("Error loading cart from localStorage:", error);
  }
  return {
    items: [],
    totalPrice: 0,
  };
};

const saveCartToStorage = (state) => {
  try {
    localStorage.setItem(
      "cartState",
      JSON.stringify({
        items: state.items,
        totalPrice: state.totalPrice,
      })
    );
  } catch (error) {
    console.error("Error saving cart to localStorage:", error);
  }
};

const initialState = loadCartFromStorage();

// Cart slice for managing cart state
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // Recalculate total price
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

      // Save to localStorage
      saveCartToStorage(state);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      // Recalculate total price
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

      // Save to localStorage
      saveCartToStorage(state);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
      }

      // Recalculate total price
      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

      // Save to localStorage
      saveCartToStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;

      // Save to localStorage
      saveCartToStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
