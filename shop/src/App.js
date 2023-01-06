import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';

function App() {

  let [shoes] = useState(data)

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
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c62dc34f-c216-4029-b476-232651c03868/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-se-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-BPKVQd11.png" width="80%"/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className='col-md-4'>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c62dc34f-c216-4029-b476-232651c03868/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-se-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-BPKVQd11.png" width="80%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className='col-md-4'>
            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c62dc34f-c216-4029-b476-232651c03868/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-se-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-BPKVQd11.png" width="80%"/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
