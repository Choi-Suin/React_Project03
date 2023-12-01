import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Layout from "./common/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="*" element={
          <>
            <h1>잘못된 URL을 입력하였습니다. </h1>
            <Link to="/">홈으로 이동
            </Link>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;