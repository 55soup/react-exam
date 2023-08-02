import {Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cart = () => {

    // let a = useSelector((state) => {return state});
    let user = useSelector(state => state.user ); // redux state 가져오기
    console.log(user);

    let cart = useSelector(state => state.cart);

    return(
        <div>
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
                            <tr>
                                <td></td>
                                <td>{ product.name }</td>
                                <td>{product.count}</td>
                                <td>안녕</td>
                            </tr>
                        )
                    })}
                   
                </tbody>
            </Table> 
        </div>
    );
}
export default Cart;