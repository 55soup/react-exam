import { useNavigate } from "react-router-dom";

export default function Shoes({shoes}){
    let navigate = useNavigate();
  
    return(
      <div className="col-md-4" onClick={()=>{
        // detail 페이지 이동시 최근 본 상품 저장.
        navigate(`/detail/${shoes.id}`)
      }}>
        <img src={`https://codingapple1.github.io/shop/shoes${shoes.id+1}.jpg`} width="80%" />
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
      </div>
    );
}