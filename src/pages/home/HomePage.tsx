import { useEffect, useRef, useState } from "react";
import { fadeInGSAP } from "../../animation/fadeIn"; // 로딩 후 페이지 페이드 인 애니메이션
import LoadingPage from "../LoadingPage"; // 로딩 페이지

// 각 section 컴포넌트
import Banner from "../../components/home/Banner";
import Trending from "../../components/home/Trending";
import AlwaysIconic from "../../components/home/AlwaysIconic";
import Promotion from "../../components/home/Promotions";

const HomePage: React.FC = () => {
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
    <div style={{ scrollbarColor: "#000000 #ffffff", scrollbarWidth: "thin" }}>
      {/* 페이지 로드 시간 동안 로딩 페이지를 렌더링 */}
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div ref={pageRef}>
          <Banner />
          <Trending />
          <AlwaysIconic />
          <Promotion />
        </div>
      )}
    </div>
  );
};

export default HomePage;
