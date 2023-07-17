/* eslint-disable */
import { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import "./App.css";
import data from "./data.js";

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

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      >
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

export default App;
