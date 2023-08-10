/* eslint-disable */
import React from "react";
import { ComponentElement, Suspense, createContext, useEffect, useState, lazy } from "react";
import axios from "axios";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Main from "./routes/Main";
import Navbar from "./components/Navbar";
import BatchEx from "./components/BatchEx";

// Detail 컴포넌트가 필요해지면 import 해옴. => 첫페이지 로딩 속도 향상
const Detail = lazy(() => import("./routes/Detail")); 
const Cart = lazy(() => import("./routes/Cart"));
const About = lazy(() => import("./components/About"));
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'

export let Context = createContext(); // 전역 변수 관리, 보관함

function App() {
  let [shoes, setShoes] = useState(data);
  let [stock, setStock] = useState([10, 11, 12]); // 재고

  // let result = useQuery(['name'], () => {
  //     // useQuery로 감싸면 
  //     /* 1. axios 성공/실패/로딩중 쉽게 파악가능
  //      2. ajax 재요청 해줌.
  //      3. 실패시 재시도 자동
  //      4. state 공유 안해도됨. (props 전송)
  //      5. ajax 결과 캐싱 가능 */
  //     axios.get('https://condingal1.github.io/usrdata.json').then((a) => {
  //         return a.data;
  //       // { staleTime : 2000 } // 자동 refetch
  //   })
  // })


  return (
    <div className="App">
      <Navbar />
      <BatchEx />
      <Suspense fallback={<div>로딩중...</div>}>
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
      </Suspense>
    </div>
  );
}




export default App;
