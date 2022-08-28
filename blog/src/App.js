/* eslint-disable */ //warning메세지 지우기

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";

  return (
    <div className="App">
      <div class="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div>{post}</div>
    </div>
  );
}

export default App;
