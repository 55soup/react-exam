import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import bg from "../img/bg.png";
import Shoes from "../components/Shoes";

export default function Main(props){
    let [shoes, setShoes] = props.shoes;
    let [click, setClick] = useState(0);
    // let [watched, setWatched] = useState(JSON.parse(localStorage.getItem('watched')));
    let navigate = useNavigate();

    // useEffect(()=>{
    //   if(!watched) localStorage.setItem('watched', JSON.stringify([])); //watched가 localStorage에 존재x => 새로 배열 생성
    // },[])

    return(
      <>
        <div
          className="main-bg"
          style={{ backgroundImage: "url(" + bg + ")" }}>
        </div>
        <div className="main-bg">
          <div className="row">
            <button>가나다순 정렬</button>
            {props.shoes.map((a)=>{
              return(
                <Shoes shoes={a} />
              )
            })}
          </div>
          <button onClick={()=>{
          // 로딩중 UI 띄우기
          setClick(click+1);
          console.log(click);
          if(click > 2) alert("상품이 더 없습니다.");
          else{
            axios.get(`https://codingapple1.github.io/shop/data${click+2}.json`)
            .then((result) =>{
              let copy = [...shoes, ...result.data]
                setShoes(copy);
                // 로딩중 UI 숨기기
            }).catch((error) => console.log(error))
  
            // 둘 다 요청이 끝났을 때
            // Promise.all( [axios.get('URL1'), axios.get('URL2')] )
          }
        }}>버튼</button>
        <h3>최근 본 상품</h3>
        {/* {watched.map((a)=>{
            return <Shoes shoes={a} />
        })} */}
        </div>
      </>
    );
  }