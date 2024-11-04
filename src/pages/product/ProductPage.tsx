import { useEffect, useRef, useState } from "react";
import Products from "../../components/product/ProductsTitle";
import { fadeInGSAP } from "../../animation/fadeIn";
import LoadingPage from "../LoadingPage";
import { UserType } from "../../components/member/profile/Profile";

type PropsType = {
  setUserData: React.Dispatch<React.SetStateAction<UserType>>;
  userData: UserType;
};

const ProductPage = ({ setUserData, userData }: PropsType) => {
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 값
  const pageRef = useRef<HTMLDivElement>(null); // 페이지 엘리먼트

  // 컴포넌트 로드 시간 지연
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // 로딩 상태 값을 4초 후에 변경
    }, 4000); // 4초 지연
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 클리어
  }, []); // 첫 로드 시에만 실행

  // 페이지 페이드 인
  useEffect(() => {
    if (!isLoading) {
      fadeInGSAP(pageRef); // GSAP 애니메이션 호출
    }
  }, [isLoading]); // 로딩 페이지 상태 값 변경 시마다 실행

  return (
    <div ref={pageRef} style={{ scrollbarColor: "transparent transparent" }}>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Products setUserData={setUserData} userData={userData} />
      )}
    </div>
  );
};

export default ProductPage;
