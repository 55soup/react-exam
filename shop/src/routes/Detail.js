import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//* 옛날 hooks 사용방법
// class Detail2 extends React.Component {
//   componentDidMount(){}
//   componentDidUpdate(){}
//   componentWillUnmount(){}
// }

function Detail(props){
  let {id} = useParams();
  let newShoes = props.shoes.filter(shoe=>shoe.id == id);
  let [count, setCount] = useState(0);
  let [isSale, setIsSale] = useState(true);

  // html렌더링이 후에 동작함.
  useEffect(() => {
    // 오래걸리는 코드는 여기서 처리함, 어려운 연산
    // 서버에서 데이터 가져오는 작업
    // 타이머 장착
    setTimeout(()=>{
      setIsSale(false);
    }, 2000)
  })


  return(
    <div className="container">
      { isSale && 
        <div className="alert alert-warning">
          2초이내 구매시 할인
        </div>
      }
      <div className="row">
        {count}
        <button onClick={()=>{ setCount(count+1) }}>버튼</button>
        <div className="col-md-6">
          <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{newShoes[0].title}</h4>
          <p>{newShoes[0].content}</p>
          <p>{newShoes[0].price}원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  );
}

export default Detail;