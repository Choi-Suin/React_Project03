import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { 정렬하기, 리셋하기 } from "../redux/modules/ReduxProducts";

export default function Products() {
  //const [searchParams, setSearchParams] = useSearchParams()
  //console.log(searchParams.get("sort"))
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <button
            onClick={() => {
              dispatch(정렬하기());
            }}
          >
            가격순정렬
          </button>
          <button
            onClick={() => {
              dispatch(리셋하기());
            }}
          >
            리셋하기
          </button>
          {products.map((product) => {
            return (
              <Link key={product.id} to={`/products/${product.id}`}>
                <div 
                  style={{
                    width: "200px",
                    height: "240px",
                    backgroundColor: "#068FFF",
                    textAlign: "left"
                  }}
                >
                  <div style={{
                    textAlign: "center",
                    marginBottom: '20px'
                  }}
                  >
                    상품 {product.id}
                  </div>
                  <div>이름 : {product.name}</div>
                  <div>가격 : {product.price}원</div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  );
}