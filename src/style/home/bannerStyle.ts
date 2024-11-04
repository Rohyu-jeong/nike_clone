import { CSSProperties } from "react";
import { root } from "../root";

// 배너 컨테이너
export const bannerStyle: CSSProperties = {
  width: root.viewWidth,
  height: root.viewHeight,
  padding: root.px50,
  paddingTop: "70px",
  boxSizing: root.box_border,
  display: root.flex,
  justifyContent: root.center,
  alignItems: root.center,
  backgroundColor: root.black100,
  position: root.relative,
};


// 포스트 박스
export const postBoxStyle: CSSProperties = {
  position: root.absolute,
  top: root.zero,
  bottom: root.zero,
  left: root.zero,
  right: root.zero,
  width: root.fullSize,
  height: root.fullSize,
  padding: `70px ${root.px50} ${root.px50} ${root.px50}`,
  opacity: 0.7,
  boxSizing: root.box_border,
  display: root.flex,
  flexDirection: root.column,
  justifyContent: root.between,
  alignItems: root.end,
};

// 오른쪽 포스트
export const post1Style: CSSProperties = {
  width: "300px",
  height: root.auto,
  objectFit: root.cover,
};

// 왼쪽 / 가운데 포스트 박스
export const post23BoxStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  position: root.absolute,
  top: root.zero,
  right: root.zero,
  padding: `70px ${root.px50} ${root.px50} ${root.px50}`,
  boxSizing: root.box_border,
  display: root.flex,
  flexDirection: root.column,
  justifyContent: root.between,
  alignItems: "start",
};

// 가운데 포스트
export const post2Style: CSSProperties = {
  width: "150px",
  height: root.auto,
  objectFit: root.cover,
  margin: root.auto,
  paddingLeft: "20vw",
};
// 왼쪽 포스트
export const post3Style: CSSProperties = {
  width: "250px",
  height: root.auto,
  objectFit: root.cover,
};

// 타이포그래피 박스
export const typographyBoxStyle: CSSProperties = {
  position: "absolute",
  top: root.zero,
  bottom: root.zero,
  left: root.zero,
  right: root.zero,
  width: root.fullSize,
  height: root.fullSize,
  padding: `70px ${root.px50} ${root.px50} ${root.px50}`,
  fontSize: "8rem",
  fontFamily: root.roubik_Lines,
  color: root.white,
  boxSizing: root.box_border,
  display: root.flex,
  flexDirection: root.column,
  justifyContent: root.between,
};

// 타이포그래피 왼쪽 상단
export const typographyLeftStyle: CSSProperties = {
  display: root.flex,
  flexDirection: root.column,
};

// 타이포그래피 오른쪽 하단
export const typographyRightStyle: CSSProperties = {
  display: root.flex,
  flexDirection: root.column,
  textAlign: root.end,
};
