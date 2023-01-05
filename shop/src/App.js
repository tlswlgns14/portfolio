import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Cart</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes1/jpg'/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'>안녕</div>
          <div className='col-md-4'>안녕</div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
