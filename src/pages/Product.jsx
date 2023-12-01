import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 추가하기 } from "../redux/modules/ReduxCart";

export default function Product() {
  const { id } = useParams() 
  const products = useSelector((state) => state.products)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [option, setOption] = useState()

  const product = products.find((item) => 
    item.id == id
  )

  if(!product) {
    alert('없는 상품입니다.')
    return <Navigate to ="/products"/>
  }

  return (
    <>
      <div>
        <h1>상세 페이지</h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            <div style={{marginBottom: '10px'}}>상품{id}</div>
            {product.name}
          </div>
          
          <div>
            <h3>가격: {product.price}원</h3>
            <h3>좋아요: {product.like}개</h3>
            <h3>구매옵션</h3>
            <select
              style={{
                width: "100px",
              }}
              onChange={(event) => {
                setOption(event.target.value)
              }}
            >
              <option value="">선택하세요.</option>
              {product.option.map((option, index) => {
                return <option key={index}>{option}</option>
              })}
            </select>
            <div>상품 옵션 : {option}</div>
            <button
              onClick={() => {
                dispatch(추가하기(product));
              }}
            >
              장바구니 담기
            </button>
          </div>
        </div>

        +
      </div>
    </>
  );
}