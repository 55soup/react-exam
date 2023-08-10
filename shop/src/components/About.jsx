import { Outlet } from "react-router-dom";

export default function About(){
    return(
      <div>
        <h4>회사 정보임</h4>
        {/* Outlet: nested routes를 보여주는 자리 */}
        <Outlet></Outlet>
      </div>
    );
  }