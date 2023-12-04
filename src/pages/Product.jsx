import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 추가하기 } from "../redux/modules/ReduxCart";
import { Link } from "react-router-dom";

export default function Product() {
  const { id } = useParams()
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const [option, setOption] = useState("")
  const [count, setCount] = useState(0)

  const product = products.find((item) =>
    item.id === id
  )
  
  const PlusCount = () => setCount(count+1)
  const MinusCount = () => {
    if(count>0){
      setCount(count-1)
    }    
  }

  if (!product) {
    alert('없는 상품입니다.')
    return <Navigate to="/products" />
  }
  // console.log(product)

  const cartItem = {
    ...product,
    count,
    option,
  }
  console.log('cartItem : ', cartItem)

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
          <div>
          <Link to="/products" 
          style={{ color: 'black' }}
          >이전 페이지로 이동</Link>
          </div>
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            <div style={{ marginBottom: '10px' }}>상품{id}</div>
            {product.name}
          </div>

          <div>
            <h3>가격: {product.price}원</h3>
            <h3>좋아요: {product.likes}개</h3>
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
              {product.options?.map((option) => {
                return <option key={option}>{option}</option>
              })}
            </select>
            <div>상품 옵션 : {option}</div>
            <span>개수 : {count}</span>
            <button onClick={() => PlusCount()}>+</button>
            <button onClick={() => MinusCount()}>-</button>
            <div>총 금액 : {count*product.price}</div>         
            <button
              onClick={() => {
                if(option === ""){
                  alert('옵션을 선택해주세요.')
                } else{
                  dispatch(추가하기(cartItem));
                }                
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