import { CSSProperties } from "react";
import { root } from "../root";

// 로그인 페이지 컨테이너
export const loginContainerStyle: CSSProperties = {
  width: root.viewWidth,
  height: root.viewHeight,
  padding: root.gap30,
  boxSizing: root.box_border,
  paddingTop: "80px",
};

// 로그인 박스
export const loginBoxStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  boxShadow: root.shadowS,
  display: root.flex,
};

// 광고 콘텐츠 박스
export const memberContnetBoxStyle: CSSProperties = {
  width: "70%",
  height: root.fullSize,
  backgroundColor: root.black100,
  color: root.white,
  textAlign: root.center,
  position: root.relative,
};

// 상단 이미지
export const memberContnetImgStyle: CSSProperties = {
  width: root.fullSize,
  height: root.auto,
  objectFit: root.cover,
};

// 타이틀 박스
export const memberTitleBoxStyle: CSSProperties = {
  position: root.relative,
  zIndex: root.z5,
};

// 타이틀
export const memberContnetTitleStyle: CSSProperties = {
  fontSize: root.font50,
  fontWeight: root.bold,
  paddingBlock: root.px50,
  backgroundColor: "#00000050",
};

// 부 제목
export const memberContnetTextStyle: CSSProperties = {
  fontSize: root.font20,
  fontWeight: root.bold,
  paddingBottom: root.px50,
  backgroundColor: "#00000050",
};

export const postStyle1: CSSProperties = {
  width: "40%",
  height: root.auto,
  objectFit: root.cover,
  position: root.absolute,
  bottom: root.px50,
  left: root.zero,
};

export const postStyle2: CSSProperties = {
  width: "30%",
  height: root.auto,
  objectFit: root.cover,
  position: root.absolute,
  bottom: root.px50,
  right: root.px50,
};

// 로그인 폼 박스
export const loginFormStyle: CSSProperties = {
  width: "30%",
  height: root.fullSize,
  display: root.flex,
  flexDirection: root.column,
  justifyContent: root.center,
  alignItems: root.center,
  gap: root.gap10,
  paddingInline: root.p2,
  boxSizing: root.box_border,
};

// 로고
export const logoStyle: CSSProperties = {
  width: "70%",
  height: root.auto,
  objectFit: root.cover,
};

// 입력 박스
export const inputBoxStyle: CSSProperties = {
  width: root.fullSize,
  height: root.px100,
  display: root.flex,
  flexDirection: root.column,
  gap: root.gap10,
  fontSize: root.font16,
  fontWeight: root.bold,
};

// 입력창
export const inputStyle: CSSProperties = {
  width: root.fullSize,
  height: root.px50,
  outline: root.none,
  fontSize: root.font20,
  border: "1px solid #aaa",
  borderRadius: "5px",
  paddingInline: "10px",
};

// 로그인 버튼
export const loginBtn: CSSProperties = {
  width: root.fullSize,
  height: root.px50,
  backgroundColor: root.black100,
  color: root.white,
  fontSize: root.font20,
  fontWeight: root.bold,
  border: root.none,
  cursor: "pointer",
};

// 회원가입 하기 박스
export const signupBoxStyle: CSSProperties = {
  width: root.fullSize,
  height: root.px100,
  display: root.flex,
  justifyContent: root.between,
  fontSize: root.font12,
  fontWeight: root.bold,
  cursor: "pointer",
};
