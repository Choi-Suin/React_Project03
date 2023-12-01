import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "멋진 바지",
    price: 20000,
    options: [28, 30, 32],
    likes: 100,
  },
  {
    id: "2",
    name: "멋진 셔츠",
    price: 10000,
    options: ["small", "medium", "large"],
    likes: 200,
  },
  {
    id: "3",
    name: "멋진 신발",
    price: 30000,
    options: [230, 240, 250, 260, 270],
    likes: 300,
  },
];

// 상품 전체
const products = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    // 가격순으로 정렬하기
    정렬하기: (state) => {
      state.sort((a, b) => a.price - b.price);
    },
    // 처음 데이터로 리셋하기
    리셋하기: (state) => {
      return initialState;
    },
  },
});

export const { 정렬하기, 리셋하기 } = products.actions;
export default products;
