import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js';
import axios from 'axios'

function App() {

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();

  return (
  <div className="App">

  
      
    <Navbar bg="light" variant="light">
      <Container>
      <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
        <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
      </Nav>
      </Container>
    </Navbar>

  

    <Routes>
      <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className='container'>
              <div className='row'>
                { shoes.map((a, i)=>{
                return <Card shoes={shoes[i]} i={i} key={i}></Card>
                })}
              </div>
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과)=>{ 
                let copy = [...shoes, ...결과.data];
                setShoes(copy);
              })
            
            }}>더보기</button>
          </>
      }/>

      <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
    </Routes>


  </div>
 );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
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