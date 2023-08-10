import React, { useMemo, useState, memo } from "react";
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase2 } from '../store/userSlice';
import { increaseStock } from '../store';



let Child = memo(function(){
    // memo: 자식 컴포넌트가 무거울 때 꼭 필요한 때만 랜데링 하도록 설정해줌
    // => props가 변할 때만 재렌더링 해줌.
    /* props가 길고 복잡하면 xxxx 꼭 필요한 곳에 */ 
    console.log('재렌더링');
    return <div>자식임</div>
})

const Cart = () => {
    // useMemo: 렌더링 후 딱 한번만 실행됨.
    // let result = useMemo(()=>{return 함수()}, [state])

    // let user = useSelector((state) => {return state.user});
    let state = useSelector(state => state ); // redux state 가져오기
    let dispatch = useDispatch(); // state 변경 함수 가지고 오기
    let [count, setCount] = useState(0);

    let cart = useSelector(state => state.cart); // cart 상품 가져오기

    return(
        <div>
            <Child count={count}></Child>
            <button onClick={() => {setCount(count+1)}}>+</button>

            {state.user.name} {state.user.age}의 장바구니
            <button onClick={()=>{dispatch(increase2(100))}}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, i)=>{
                        return(
                            <tr key={i}>
                                <td>{ product.id }</td>
                                <td>{ product.name }</td>
                                <td>{ product.count }</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(increaseStock(product.id));
                                    }}>
                                        +
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table> 
        </div>
    );
}
export default Cart;