/* eslint-disable */ //warning메세지 지우기

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let posts = "강남 고기 맛집";
  // document.querySelector('h4).innerHTML = post;
  // let navClass = { color: "yellow", fontSize: "30px" };
  // function 함수() {
  //   return 100;
  // }
  /* state 만드는 법
  1. import {usestate} 
  2. useState(보관할 자료)
  3. let[작명, 작명]*/

  //Destructuring 문법
  // let num = [1, 2];
  // let a = num[0];
  // let c = num[1];
  // => let[a,c] = [1,2];

  //변수와, state의 차이점.
  /* 일반변수
  갑자기 변경되면 html 자동으로 반영이 안됨 */
  /* state
  state는 html이 자동 재렌더링 됨. */
  let [logo, setLogo] = useState("ReactBlog");
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  function 함수() {
    //긴 코드를 하나로 묶어주는 문법.
    console.log(1);
  }
  // let [modal, setModal] = useStart(false);

  return (
    //return 안에 코드 자기
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <button
          onClick={() => {
            let copy = [...글제목];
            copy.sort();
            글제목변경(copy);
          }}
        >
          가나다순정렬
        </button>
        {/* {글제목[0]} <span onClick={함수}>👍</span> {따봉} */}
        <button
          onClick={() => {
            // array/object 다룰 때 원본을 보존하는것이 좋음.
            /* array/object특징 
               - 자료를 가르키는 주소만 저장이 됨.
               - 글제목[0] = "여자 코트추천";
                 => array를 수정했지 변수에 있던 화살표를 수정 안함.*/
            let copy = [...글제목]; // array자료형을 벗기고 다시 씌움. (새로운 array)
            copy[0] = "여자 코트추천";
            글제목변경(copy);
            // 글제목변경(["여자 코트 추천", "강남 우동맛집", "파이썬독학"]);
          }}
        >
          👩
        </button>
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1); //state변경하는 법 state변경함수(새로운state)
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(true);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      {/* 모달 */}
      {/* {modal == true ? <Modal /> : null} */}
    </div>
    // <div></div> //병렬로 코드 나열 금지
  );
}

// 컴포넌트 만들기
/* 컴포넌트 쓰기 좋은 곳
1. 반복적인 html 축약할 때
2. 큰 페이지들
3. 자주변경되는 것들 */

// 화살표함수로 만들기 가능
// const Modal = () => {};

function Modal() {
  return (
    // 의미없는 div대신 <> 사용가능
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
