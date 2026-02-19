import { createSlice } from "@reduxjs/toolkit";
import webImage from "../assets/Web.jpg";
import graphicImage from "../assets/Graphic.png";

const initialState = {
  cartItems: [],
  items: [
    {
      id: 1,
      title: "Web Development",
      price: 1000,
      available: 2,
      image: webImage,
    },
    {
      id: 2,
      title: "Graphic Design",
      price: 800,
      available: 3,
      image: graphicImage,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const prevItems = state.cartItems;
      const service = action.payload;
      const existingItem = prevItems.find((item) => item.id === service.id);

      if (existingItem) {
        if (existingItem.quantity >= service.available) {
          return;
        }

        state.cartItems = prevItems.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return;
      }

      state.cartItems = [...prevItems, { ...service, quantity: 1 }];
    },
    removeFromCart: (state, action) => {
      const service = action.payload;
      state.cartItems = state.cartItems
        .map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
