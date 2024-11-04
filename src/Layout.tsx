// 공통 레이아웃

import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Outlet } from "react-router-dom";

// footer 등장 상태 타입
export type IsFoterType = {
  isFooter: boolean;
  setIsFooter: React.Dispatch<React.SetStateAction<boolean>>;
};

const Layout: React.FC = () => {
  const [isFooter, setIsFooter] = useState<boolean>(false); // footer 등장 상태

  return (
    <>
      <Header setIsFooter={setIsFooter} />
      <Footer isFooter={isFooter} setIsFooter={setIsFooter} />
      <Outlet />
    </>
  );
};

export default Layout;


