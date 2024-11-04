import React, { useEffect, useRef, useState } from "react";
import { aboutBannerStyle } from "../../style/about/aboutPageStyle";
import { Link } from "react-router-dom";
import FindStorePage from "../../pages/findStore/FindStroePage";
import AboutSection from "../../components/about/AboutSection";
import { fadeInGSAP } from "../../animation/fadeIn";
import LoadingPage from "../LoadingPage";

const aboutSectionData = [
  {
    title: "나이키의 정체성",
    content:
      "세계적인 발자취, 혁신의 문화, 팀 우선 정신을 바탕으로 활동하며 운동선수와 스포츠,\n 그리고 전 세계를 위해 끊임없는 발전의 미래를 창조합니다.",
    imageUrl: "/image/about/Nike_Img_나이키의정체성.webp",
  },
  {
    title: "슬로건",
    content:
      "'Just Do It'은 브랜드 정체성과 자기다움이 담겨져 있는 철학으로 30여년간 지속적이면서도 일관되게 필드 안과 밖에 '그냥 해봐(Just Do it)'정신을 수많은 서브 세계관 ('Write the Future','Find Your Greatness','Dream crazy'등)을 통해 확산시켜 나가고 있습니다.",
    imageUrl: "/image/about/Nike_justdoit.jpg",
  },
  {
    title: "나이키의 미션은 무엇인가요?",
    content:
      "전 세계 모든 운동선수에게 영감과 혁신을 선사하는 것입니다. 몸이 있다면, 당신도 운동선수 입니다.",
    imageUrl: "/image/about/Nike-미션.jpg",
  },
  // {
  //   title: "매장 찾기",
  //   content: "매장 검색",
  //   imageUrl: "",
  // },
];

function About() {
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
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div ref={pageRef}>
          <section className="about-banner" style={aboutBannerStyle}>
            <img
              className="about-bannerImg"
              src="/image/about/나이키배너2.png"
              alt=""
            />
          </section>

          {aboutSectionData.map((section, index) => (
            <AboutSection
              key={index}
              title={section.title}
              content={section.content}
              imageUrl={section.imageUrl}
            />
          ))}
          {/* 매장찾기 링크*/}

          <div
            className="flex justify-center items-center p-20"
            style={{
              scrollbarColor: "#000000 #ffffff",
              scrollbarWidth: "thin",
            }}
          >
            <Link to="/findStore">
              <span className="p-2 font-bold text-4xl border-b-2 border-black border-solid">
                나이키 매장 찾으러 가기
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
