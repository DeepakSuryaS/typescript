import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItemType = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartStateType = {
  items: CartItemType[];
};

type AddToCartActionType = PayloadAction<{
  id: string;
  title: string;
  price: number;
}>;

type RemoveFromCartActionType = PayloadAction<string>;

const initialState: CartStateType = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: AddToCartActionType) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action: RemoveFromCartActionType) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      } else {
        state.items[itemIndex].quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
