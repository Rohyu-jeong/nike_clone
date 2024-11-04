import {
  cubeContainerStyle,
  cubeStyle,
  postStyle,
  postStyle1,
  postStyle2,
  postStyle3,
  postStyle4,
} from "../../style/home/trendingStyle"; // 스타일 시트
import { cubeGSAP } from "../../animation/cube"; // 큐브 회전 GSAP
import { useEffect, useRef } from "react";
import { TrendinfDataType } from "../../data/home/tendingData";

// props 타입
type PropType = {
  data: TrendinfDataType;
  setCubeTitle: React.Dispatch<React.SetStateAction<string>>;
};

const TrendingCube: React.FC<PropType> = ({ data, setCubeTitle }: PropType) => {
  const cubeRef = useRef<HTMLDivElement>(null); // 애니메이션을 적용할 큐브 엘리먼트

  const cubeStyles = [postStyle1, postStyle2, postStyle3, postStyle4]; // 스타일 시트 배열

  useEffect(() => {
    cubeGSAP(cubeRef); // GSAP 회전 애니메이션 적용
  }, []);

  // 호버 된 콘텐츠의 타이틀 값 저장
  const handleMouseOver = () => {
    setCubeTitle(data.title);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      style={cubeContainerStyle}
      className="trending-cube"
    >
      <div ref={cubeRef} style={cubeStyle}>
        {cubeStyles.map((style) => (
          <div style={{ ...style, ...postStyle }}>
            <img style={postStyle} src={data.image} alt={data.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCube;
