import {
  loadingBoxsStyle,
  loadingContainerStyle,
  loadingLogoStyle,
} from "../style/components/loadingStyle"; // 스타일 시트
import { useEffect, useRef } from "react";
import { loadingGSAP } from "../animation/loading"; // GSAP 애니메이션 연결

const LoadingPage: React.FC = () => {
  // 각 박스 엘리먼트
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const boxRef4 = useRef<HTMLDivElement>(null);
  const boxRef5 = useRef<HTMLDivElement>(null);

  // 애니메이션 적용을 위한 ref 배열
  const boxRefs = [boxRef1, boxRef2, boxRef3, boxRef4, boxRef5];

  // 애니메이션 적용
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // 스크롤을 맨 위로 올림
    boxRefs.forEach((ref, i) => {
      loadingGSAP(ref, i); // GSAP 연결
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <section style={loadingContainerStyle}>
      <div ref={boxRef1} style={loadingBoxsStyle}></div>
      <div ref={boxRef2} style={loadingBoxsStyle}></div>
      <div style={loadingBoxsStyle} ref={boxRef3}>
        <img
          style={loadingLogoStyle}
          src="/image/logo/Nike-Logo2.png"
          alt="Nike LOGO"
        />
      </div>
      <div ref={boxRef4} style={loadingBoxsStyle}></div>
      <div ref={boxRef5} style={loadingBoxsStyle}></div>
    </section>
  );
};

export default LoadingPage;
