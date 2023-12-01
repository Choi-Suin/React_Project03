import { createSlice } from "@reduxjs/toolkit";

// 장바구니 담기
const cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    추가하기: (state, action) => {
      state.push(action.payload);
      // [{ id: ~~, name; ~~, ... }]
    },
  },
});

export const { 추가하기 } = cart.actions;
export default cart;
