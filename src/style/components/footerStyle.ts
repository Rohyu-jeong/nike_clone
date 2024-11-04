import { CSSProperties } from "react";
import { root } from "../root";

// 푸터 컨테이너
export const footerStyle: CSSProperties = {
  width: root.viewWidth,
  height: root.viewHeight,
  backgroundColor: root.black100,
  position: root.fixed,
  zIndex: root.z999,
  bottom: root.zero,
  left: root.zero,
  right: root.zero,
  display: root.flex,
  justifyContent: root.center,
  gap: root.px100,
  padding: root.px50,
  boxSizing: root.box_border,
  transition: "all 0.7s",
};
// 푸터 숨김처리
export const footerHiddenStyle : CSSProperties = {
  width: root.viewWidth,
  height: root.viewHeight,
  backgroundColor: root.black100,
  position: root.fixed,
  zIndex: root.z999,
  bottom: root.viewHeight,
  left: root.zero,
  right: root.zero,
  display: root.flex,
  justifyContent: root.center,
  gap: root.px100,
  padding: root.px50,
  boxSizing: root.box_border,
  transition: "all 0.7s",
}

// 푸터 로고
export const footerLogoStyle: CSSProperties = {
  width: root.auto,
  height: "40%",
  objectFit: root.cover,
};

// 컨텐츠 컨테이너
export const footerContentContainerStyle: CSSProperties = {
  width: "50%",
  height: root.fullSize,
  color: root.white,
  display: root.flex,
  flexDirection: root.column,
  justifyContent: root.between,
  alignItems: root.center,
};

// 컨텐츠 박스
export const footerContentBoxStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fit,
  color: root.white,
  display: root.flex,
  justifyContent: root.between,
  alignItems: root.center,
};

// 리스트 박스
export const footerListBoxStyle: CSSProperties = {
  width: root.fit,
  height: root.fullSize,
  color: root.white,
  display: root.flex,
  flexDirection: root.column,
  textAlign: root.center,
  gap: root.gap30,
  fontSize: root.font16,
};

// 타이틀
export const footerTitleStyle: CSSProperties = {
  fontSize: root.font20,
  fontWeight: root.bold,
};

// 리스트
export const footerItemStyle: CSSProperties = {
  textDecoration: root.none,
  color: root.gray100,
};

// 이용 약관 컨테이너
export const footerPolicyStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fit,
  color: root.gray100,
  display: root.flex,
  fontSize: root.font12,
  justifyContent: root.between,
};

// 뒤로가기 아이콘
export const footerDeleteIconStyle : CSSProperties = {
  fontSize : '30px',
  fill : root.white,
  cursor : 'pointer',
}
