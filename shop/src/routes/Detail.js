function Detail(props){
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c62dc34f-c216-4029-b476-232651c03868/%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-se-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-BPKVQd11.png" width="100%"/>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[0].title}</h4>
          <p>{props.shoes[0].content}</p>
          <p>{props.shoes[0].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;