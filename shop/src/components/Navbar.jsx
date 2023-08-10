import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavbarCom(){
    const navigate = useNavigate();
    
    return(
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
                {/* { result.error ? "에러남" : result.data.name } */}
            </Nav>
            </Container>
      </Navbar>
    );
}