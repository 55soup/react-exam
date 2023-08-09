/* eslint-disable */
import React from "react";
import { ComponentElement,createContext, useEffect, useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import axios from "axios";
import bg from "./img/bg.png";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from "./routes/Detail";
import Cart from "./routes/Cart";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

export let Context = createContext(); // 전역 변수 관리, 보관함

function App() {
  let [shoes, setShoes] = useState(data);
  let [stock, setStock] = useState([10, 11, 12]); // 재고
  let [click, setClick] = useState(0);
  let [watched, setWatched] = useState(JSON.parse(localStorage.getItem('watched')));
  let navigate = useNavigate();

  let result = useQuery(['name'], () => {
      // useQuery로 감싸면 
      /* 1. axios 성공/실패/로딩중 쉽게 파악가능
       2. ajax 재요청 해줌.
       3. 실패시 재시도 자동
       4. state 공유 안해도됨. (props 전송)
       5. ajax 결과 캐싱 가능 */
      axios.get('https://condingal1.github.io/usrdata.json').then((a) => {
          return a.data;
        // { staleTime : 2000 } // 자동 refetch
    })
  })

  useEffect(()=>{
    if(!watched) localStorage.setItem('watched', JSON.stringify([])); //watched가 localStorage에 존재x => 새로 배열 생성
  },[])

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate("/")}}>ShoesMarket</Navbar.Brand>
          <Nav className="me-auto">
            {/* navigate(-1) : 뒤로 한번 감 */}
            <Nav.Link onClick={()=>{navigate("/")}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/cart")}}>Cart</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {/* { result.isLoading ? "로딩중" : result.data.name} */}
            { result.error ? "에러남" : result.data.name }
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Main shoes={shoes} />}/>
        <Route path="/detail/:id" element={
          <Context.Provider value={{stock, shoes}}>
            <Detail shoes={shoes} />
          </Context.Provider>
        }/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />}>
          {/* 경로: /about/member */}
          <Route path="member" element={<div>멤버들</div>} /> 
          <Route path="location" element={<About />} />
        </Route>
        <Route path="/event" element={<><h1>오늘의 이벤트</h1> <Outlet></Outlet></>}>
          <Route path="one" element={<div>첫 주문 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>404 존재하지 않음</div>}/>
      </Routes>
    </div>
  );
}

function Shoes({shoes}){
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

function Main({shoes}){
  return(
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}>
      </div>
      <div className="main-bg">
        <div className="row">
          <button>가나다순 정렬</button>
          {shoes.map((a)=>{
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

function About(){
  return(
    <div>
      <h4>회사 정보임</h4>
      {/* Outlet: nested routes를 보여주는 자리 */}
      <Outlet></Outlet>
    </div>
  );
}
export default App;
