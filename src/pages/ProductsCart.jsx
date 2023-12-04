import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Count증가, Count감소, 삭제하기 } from "../redux/modules/ReduxCart";

function ProductsCart() {
    const cart = useSelector((state) => state.cart)
    console.log('cart : ', cart)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>장바구니</h1>
            <div>
                {cart.map((product) => {
                    // console.log('product : ', product)
                    return (
                        <div
                            key={product.id}
                            style={{
                                border: "1px solid black",
                            }}
                        >
                            <h3>{product.name}</h3>
                            <h3>가격: {product.price} 원</h3>
                            <h3>옵션: {product.option}</h3>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                <span><button onClick={() => dispatch(Count감소(product.id))}>-</button></span>
                                <span><h3>개수: {product.count} 개</h3></span>
                                <span><button onClick={() => dispatch(Count증가(product.id))}>+</button></span>
                            </div>
                            <h3>총 금액: {product.count * product.price} 개</h3>
                            <button
                                style={{ marginBottom: '20px' }}
                                onClick={() => dispatch(삭제하기(product.id))}>삭제</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProductsCart
