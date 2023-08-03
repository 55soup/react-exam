import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './../store';

const Cart = () => {

    // let user = useSelector((state) => {return state.user});
    let state = useSelector(state => state ); // redux state 가져오기
    let dispatch = useDispatch(); // state 변경 함수 가지고 오기

    let cart = useSelector(state => state.cart); // cart 상품 가져오기

    return(
        <div>
            {state.user} 의 장바구니
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
                                <td></td>
                                <td>{ product.name }</td>
                                <td>{ product.count }</td>
                                <td>
                                    <button onClick={()=>{
                                        dispatch(changeName())
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