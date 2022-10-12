/* eslint-disable */ //warning메세지 지우기

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [날짜, 날짜변경] = useState(new Date());
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <h4>
          {글제목[0]}
          <span>👍</span>
          {따봉[0]}
          <button>버튼클릭</button>
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => {setModal(true); setTitle(i);}}>
              {글제목[i]}
              <span onClick={(e) => { 
                  e.stopPropagation(); /** 상위html로 퍼지는 이벤트 버블링 막기. */
                  let copy = [...따봉];
                  copy[i] = 따봉[i] + 1;
                  따봉변경(copy); }}>👍</span>{따봉[i]}</h4>
            <p>{날짜.getMonth()+1}월 {날짜.getDate()}일 발행</p>
            <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1); /** splice(시작점, 지울개수)*/
              글제목변경(copy)
            }}>삭제</button>
          </div>
        );
      })}
      <input onChange = {(e)=>{
        입력값변경(e.target.value)
        }}/>
      <button onClick={()=>{
        // 입력값이 있으면 글제목으로 들어가기
        { if (입력값 != ""){
            글제목변경([...글제목, 입력값])
            따봉변경([...따봉, 0])
            let today = new Date();
            날짜변경(today);
          }else{
            alert("input에 입력하세요!")
          }
        }
        // 버튼을 누르면 input창 비우기 작동x
        input.value(null)
      }}>추가</button>
      {modal == true ? <Modal 글제목={글제목} title={title} /> : null}
      <Modal2 />
    </div>
  );
}


function Modal(props) {
  // let[title, setTitle] = useState(0);
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      name : 'kim',
      age : 20,
    }
  }
  render(){
    return(
      <div>안녕 {this.state.age}
         <button onClick={() => {
          this.setState({age : 21})
        }}>버튼</button>
      </div>
     
    )
  }
}
export default App;
