import { trendinfData, TrendinfDataType } from "../../data/home/tendingData"; // 데이터
import {
  cubeTitleStyle,
  trendingContainerStyle,
  trendingCubeContainerStyle,
  trendingTitleStyle,
} from "../../style/home/trendingStyle"; // 스타일 시트
import { useEffect, useRef, useState } from "react"; 
import { titleGSAP } from "../../animation/title";// 호버 시 타이틀 등장 GSAP 애니메이션
import Cube from "./TrendingCube"; // 각 콘텐츠 큐브 형식 컴포넌트

const Trending: React.FC = () => {
  const [cubeTitle, setCubeTitle] = useState<string>(""); // 호버된 콘텐츠의 타이틀 값
  const titleRef = useRef<HTMLSpanElement>(null); // GSAP 연결할 ref

  // 각 콘텐츠 큐브 생성
  const cubes = trendinfData.map((data: TrendinfDataType): JSX.Element => {
    return (
      <div key={data.id}>
        <Cube setCubeTitle={setCubeTitle} data={data}></Cube>
      </div>
    );
  });

  // GSAP 연결
  useEffect(() => {
    titleGSAP(titleRef, cubeTitle);
  }, [cubeTitle]); // 호버 된 콘텐츠의 타이틀 상태가 변경 될 떄마다 실행

  return (
    <section style={trendingContainerStyle}>
      <h1 style={trendingTitleStyle}>Trending Now</h1>
      <div style={trendingCubeContainerStyle}>{cubes}</div>
      <span style={cubeTitleStyle} ref={titleRef}></span>
    </section>
  );
};

export default Trending;
