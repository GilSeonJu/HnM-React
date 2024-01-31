import { Routes, Route } from "react-router-dom";
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
import Navbar from "./component/Navbar";
import { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateProductDetail from "./router/PrivateProductDetail";
//Routes가 Route별로 스위치 처럼 왔다갔다 바꿔주는 역할
/*
  1. 전체상품페이지, 로그인, 상품상세페이지 (총 3개의 페이지)
    1-1 네비게이션 바를 만든다.(로그인, 상세, 전체페이지 어디에서든 네비게이션 바는 있어야함.)
  2. 전체상품페이지에서는 전체 상품을 볼 수 있다.

  3. 로그인 버튼을 누르면 로그인 페이지가 나온다.

    3-1 상품디테일을 눌렀으나. 로그인이 안되어 있는 경우 로그인페이지가 먼저 나온다
    3-2 로그인이 되어있을 경우 상품 디테일 페이지가 나온다.

  4. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
  5. 로그아웃이 되면 상품 디테일 페이지는 볼 수 없고 로그인페이지가 보인다.
  6. 로그인을 하면 로그아웃이 보이고 / 로그아웃을 하면 로그인이 보인다.

  7. 상품을 검색할 수 있다.
*/

function App() {
  const [authenticate, setAuthenticat] = useState(false); // true면 로그인, false면 로그인 안됨
  useEffect(() => {
    console.log("login누르면: ", authenticate);
  }, [authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticat={setAuthenticat} />
      <Routes>
        {/* <Route path="/" element={<ProductAll />} /> */}
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<PrivateProductDetail authenticate={authenticate} />} />
        <Route path="/login" element={<Login setAuthenticat={setAuthenticat} />} />
      </Routes>
    </div>
  );
}

export default App;
