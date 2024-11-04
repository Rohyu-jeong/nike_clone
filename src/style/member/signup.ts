import { CSSProperties } from "react";
import { root } from "../root";

// 회원가입 컨테이너
export const signupContainerStyle: CSSProperties = {
  width: root.viewWidth,
  height: root.viewHeight,
  position: root.fixed,
  top: root.zero,
  zIndex: root.z999,
  display: root.flex,
  justifyContent: root.center,
  alignItems: root.center,
  paddingBlock: root.px50,
  boxSizing: root.box_border,
};

export const overlayStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  position: root.absolute,
  top: root.zero,
  backgroundColor: "#00000070",
};

// 회원가입 폼 박스
export const signupBoxStyle: CSSProperties = {
  width: "500px",
  height: root.fullSize,
  backgroundColor: root.white,
  display: root.flex,
  flexDirection: root.column,
  justifyContent: root.center,
  alignItems: root.center,
  gap: "10px",
  paddingInline: root.p5,
  boxSizing: root.box_border,
  position: root.relative,
  zIndex: root.z5,
};

// 로고
export const logoStyle: CSSProperties = {
  width: "30%",
  height: root.auto,
  objectFit: root.cover,
};

// 타이틀
export const titleStyle: CSSProperties = {
  fontSize: root.font32,
  fontWeight: root.bold,
};

// 입력 박스
export const inputBoxStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fit,
  display: root.flex,
  flexDirection: root.column,
  gap: root.gap10,
};

// 입력 타이틀
export const inputTitleStyle: CSSProperties = {
  fontSize: root.font12,
  fontWeight: root.bold,
};

// 입력창
export const inputStyle: CSSProperties = {
  width: root.fullSize,
  height: root.gap30,
  border: "1px solid black",
  borderRadius: "5px",
  paddingInline: "5px",
};

// 가입하기 버튼
export const signupBtn: CSSProperties = {
  width: root.fullSize,
  height: root.px50,
  backgroundColor: root.black100,
  color: root.white,
  fontSize: root.font20,
  fontWeight: root.bold,
};
// 체크박스 타이틀
export const checkBoxTitleStyle: CSSProperties = {
  fontSize: root.font12,
};
