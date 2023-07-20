/* eslint-disable */
import { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoesMarket</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      <Routes>
        <Route path="/" element={<Main shoes={shoes} />}/>
        <Route path="/detail" element={<Detail />}/>
      </Routes>
    </div>
  );
}

function Shoes({shoes}){
  return(
    <div className="col-md-4">
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
          {shoes.map((a)=>{
            return(
              <Shoes shoes={a} />
            )
          })}
        </div>
      </div>
    </>
  );
}

function Detail(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  );
}

export default App;
