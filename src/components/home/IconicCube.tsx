import { useEffect, useRef, useState } from "react";
import { iconicData, IconicDataType } from "../../data/home/iconicData"; // 데이터
import {
  alwaysCubeStyle,
  iconicStyle1,
  iconicStyle2,
  iconicStyle3,
  iconicStyle4,
  iconicStyle5,
  iconicStyle6,
  iconicStyle7,
  iconicStyle8,
  iconicStyle9,
  titleStyle1,
  titleStyle2,
  titleStyle3,
  titleStyle4,
  titleStyle5,
  titleStyle6,
  titleStyle7,
  titleStyle8,
  titleStyle9,
} from "../../style/home/alwaysStyle"; // 스타일 시트
import { scroll } from "../../animation/scroll"; // 스크롤 애니메이션 GSAP

// props 타입
type PropType = {
  rotate: number;
  setRotate: React.Dispatch<React.SetStateAction<number>>;
  isScaleDown: boolean;
};

// 큐브 이미지 스타일 시트 배열
const imgStyles = [
  iconicStyle1,
  iconicStyle2,
  iconicStyle3,
  iconicStyle4,
  iconicStyle5,
  iconicStyle6,
  iconicStyle7,
  iconicStyle8,
  iconicStyle9,
];

// 큐브 타이틀 스타일 시트 배열
const titleStyles = [
  titleStyle1,
  titleStyle2,
  titleStyle3,
  titleStyle4,
  titleStyle5,
  titleStyle6,
  titleStyle7,
  titleStyle8,
  titleStyle9,
];

const IconicCube: React.FC<PropType> = ({
  rotate, // 회전 값
  isScaleDown, // 펼침 , 접음 상태 값
}: PropType) => {
  const cubeContainerRef = useRef<HTMLDivElement>(null); // GSAP에 사용될 큐브 ref
  const [end, setEnd] = useState<number>(400); // 스크롤 트리거 end 범위 값
  const titles: string[] = []; // 타이틀 값

  // 큐브 생성 
  const iconicCubes = iconicData.map(
    (data: IconicDataType, i: number): JSX.Element => {
      titles.push(data.title); // 타이틀 값 저장
      // 펼침, 접음 상태에 따라 스타일 시트 적용 변경
      return (
        <>
          <img
            key={data.id}
            style={
              isScaleDown
                ? imgStyles[i]
                : { ...imgStyles[i], position: "absolute" }
            }
            src={data.image}
            alt={data.title}
          />
          <h1
            style={
              isScaleDown
                ? titleStyles[i]
                : {
                    ...titleStyles[i],
                    position: "absolute",
                    marginTop: "250px",
                  }
            }
          >
            {/* 저장한 타이틀에서 현재 데이터의 id와 일치하는 타이틀 값을 렌더링 */}
            {titles.filter((title: string) => title === data.id)} 
          </h1>
        </>
      );
    }
  );

  // GSAP 연결
  useEffect(() => {
    // 펼침 상태 일때
    if (isScaleDown) {
      scroll({ cubeContainerRef, end }); // 연결
    } else { // 접힘 상태 일때 -- end 값이 스크롤 트리거에 적용되지 않음 다시 짜야함
      setEnd(0); // end 값을 0으로 변경
      scroll({ cubeContainerRef, end }); // 연결
    }
  }, [isScaleDown , end]); // 접힘, 펼침 상태 변경 시 마다 실행

  return (
    <div
      ref={cubeContainerRef}
      style={{ ...alwaysCubeStyle, transform: `rotateY(${rotate}deg)` }}
    >
      {iconicCubes}
    </div>
  );
};

export default IconicCube;
