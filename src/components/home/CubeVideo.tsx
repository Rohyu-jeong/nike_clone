import {
  cubeContainerStyle,
  cubeStyle,
  videoStyle,
  videoStyle1,
  videoStyle2,
  videoStyle3,
  videoStyle4,
} from "../../style/home/Cube"; // 스타일 시트
import { cubeGSAP } from "../../animation/cube"; // 큐브 회전 GSAP
import { useEffect, useRef } from "react";

const styles = [videoStyle1, videoStyle2, videoStyle3, videoStyle4]; // 스타일 시트 배열

const Cube: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null); // 애니메이션을 적용할 큐브 엘리먼트

  useEffect(() => {
    cubeGSAP(cubeRef); // GSAP 회전 애니메이션 적용
  }, []);

  // 비디오 큐브 생성
  const Cube = styles.map((style) => {
    return (
      <video style={{ ...style, ...videoStyle }} autoPlay loop muted>
        <source src="/video/nike-video.mp4" type="video/mp4" />
      </video>
    );
  });

  // 반복문으로 엘리먼트 돌려야함 - 수정 사항
  return (
    <div style={cubeContainerStyle}>
      <div ref={cubeRef} style={cubeStyle}>
        {Cube}
      </div>
    </div>
  );
};

export default Cube;
