import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom'

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

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={
            <>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                { shoes.map((a, i)=>{
                  return <Card shoes={shoes[i]}></Card>
                })}
                </div>
              </div>
              </>
              }/>
        <Route path="/detail" element={<div>상세페이지임</div>} />
      </Routes>


    </div>
  );
}

function Card(props){
  return (
    <div className='col-md-4'>
    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c62dc34f-c216-4029-b476-232651c03868/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-se-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-BPKVQd11.png" width="80%"/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.price}</p>
  </div>
  )
}

export default App;
