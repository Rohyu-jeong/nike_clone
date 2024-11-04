import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/HomePage";
import About from "./pages/about/AboutPage";
import Product from "./pages/product/ProductPage";
import Member from "./pages/member/MemberPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./Layout";
import FindStorePage from "./pages/findStore/FindStroePage";
import Profile, { UserType } from "./components/member/profile/Profile";
import { useState } from "react";

const App: React.FC = () => {
  // 로그인 유저의 데이터
  const [userData, setUserData] = useState<UserType>({
    id: "",
    name: "",
    email: "",
    wishlist: [],
    points: 0,
    date: "",
    avatarUrl: "/image/logo/Nike-Logo2.png",
  });

  return (
    <Router>
      <Routes>
        {/* 공통 레이아웃 컴포넌트 */}
        <Route path="/" element={<Layout />}>
          {/* 페이지 컴포넌트 */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/product"
            element={<Product setUserData={setUserData} userData={userData} />}
          />
          <Route
            path="/member"
            element={<Member setUserData={setUserData} userData={userData} />}
          />
          <Route path="/findStore" element={<FindStorePage />} />
        </Route>
        {/* 에러 페이지 컴포넌트 */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
