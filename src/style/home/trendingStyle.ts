import { CSSProperties } from "react";
import { root } from "../root";

export const trendingContainerStyle: CSSProperties = {
  width: root.viewWidth,
  height: root.viewHeight,
  display : root.flex,
  flexDirection : root.column,
  justifyContent : root.center,
  alignItems : root.center,
  gap : "100px",
};

export const trendingTitleStyle : CSSProperties = {
    fontSize : root.font32,
    fontWeight : root.bold,
}

export const trendingCubeContainerStyle : CSSProperties = {
    width : root.fit,
    height : root.fit,
    display : root.flex,
    justifyContent : root.center,
    alignItems : root.center,
    gap : "100px",
}

export const cubeContainerStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  perspective: "1000px",
  cursor : 'pointer',
};

export const cubeStyle: CSSProperties = {
  width: "200px",
  height: "200px",
  transformStyle: "preserve-3d",
  position: root.relative,
};

// 이미지 공통
export const postStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  position: root.absolute,
};

// 이미지 - front
export const postStyle1: CSSProperties = {

  transform: "translateZ(100px)",
};
// 이미지 - back
export const postStyle2: CSSProperties = {
  transform: "rotateY(180deg) translateZ(100px)",
};
// 이미지 - right
export const postStyle3: CSSProperties = {
  transform: "rotateY(90deg) translateZ(100px)",
};
// 이미지 - left
export const postStyle4: CSSProperties = {
  transform: "rotateY(-90deg) translateZ(100px)",
};

// 콘텐츠 타이틀
export const cubeTitleStyle : CSSProperties = {
    fontSize : root.font20,
    textAlign : root.center,
    fontWeight : root.bold,
}
