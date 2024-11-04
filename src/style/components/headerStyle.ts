import { CSSProperties } from "react";
import { root } from "../root";

type HeaderStyle = {};

// 헤더 컨테이너
export const headerStyle: CSSProperties = {
  width: root.viewWidth,
  height: "70px",
  backgroundColor: root.white,
  display: root.flex,
  paddingInline: root.p5,
  position: root.fixed,
  justifyContent: root.between,
  alignItems: root.center,
  boxSizing: root.box_border,
  zIndex: 999,
};

// 헤더 왼쪽 컨텐츠
export const headerLeftContentStyle: CSSProperties = {
  height: root.fullSize,
  width: root.fit,
  display: root.flex,
  alignItems: root.center,
  gap: root.gap50,
};

// 헤더 로고
export const headerLogoStyle: CSSProperties = {
  height: root.fullSize,
  width: "auto",
};

// 헤더 메뉴
export const headerNaviStyle: CSSProperties = {
  height: root.fullSize,
  width: root.fit,
  display: root.flex,
  alignItems: root.center,
  gap: root.gap30,
};

// 헤더 네비 리스트
export const headerNaviListStyle: CSSProperties = {
  textDecoration: "none",
  color: root.black100,
  fontWeight: root.bold,
  fontSize: root.font16,
};

// 헤더 상세메뉴 리스트
export const headerDetailsListStyle: CSSProperties = {
  textDecoration: "none",
  color: root.black100,
  fontWeight: root.bold,
  fontSize: root.font12,
};

export const headerFooterIconStyle: CSSProperties = {
  fontSize: "30px",
  cursor: "pointer",
};
