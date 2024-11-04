import { root } from "../root";
import { CSSProperties } from "react";

export const cubeContainerStyle: CSSProperties = {
  width: root.viewWidth,
  height: root.viewHeight,
  perspective: "1000px",
  margin: root.auto,
};

export const cubeStyle: CSSProperties = {
  width: "600px",
  height: "50vh",
  transformStyle: "preserve-3d",
  margin: `15vh ${root.auto}`,
  position: root.relative,
};

// 비디오 공통
export const videoStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  position: root.absolute,
  border: root.borderS,
};

// 비디오 - front
export const videoStyle1: CSSProperties = {
  transform: "translateZ(300px)",
};
// 비디오 - back
export const videoStyle2: CSSProperties = {
  transform: "rotateY(180deg) translateZ(300px)",
};
// 비디오 - right
export const videoStyle3: CSSProperties = {
  transform: "rotateY(90deg) translateZ(300px)",
};
// 비디오 - left
export const videoStyle4: CSSProperties = {
  transform: "rotateY(-90deg) translateZ(300px)",
};
