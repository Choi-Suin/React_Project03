import { configureStore } from "@reduxjs/toolkit";
import products from "../modules/ReduxProducts";
import cart from "../modules/ReduxCart";

const store = configureStore({
  reducer: {
    products: products.reducer,
    cart: cart.reducer,
  },
});

export default store