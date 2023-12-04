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
    Count증가: (state, action) => {
      // console.log('action.payload : ', action.payload)
      state.map((item) => {
        if(item.id === action.payload) item.count++

      })      
    },
    Count감소: (state, action) => {
      // console.log('action.payload : ', action.payload)
      state.map((item) => {
        if(item.id === action.payload) {
          if(item.count > 1) item.count--
        }
      })    
    },
    삭제하기: (state, action) => {
      console.log('action.payload : ', action.payload)
      return state.filter((item) => {
        console.log('item.id : ', item.id)
        return item.id !== action.payload
      })
    },
  },
});

export const { 추가하기, 삭제하기, Count증가, Count감소 } = cart.actions;
export default cart;
