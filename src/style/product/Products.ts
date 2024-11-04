import { CSSProperties } from "react";
import { root } from "../root";

// 메인
export const productsMainsStyle: CSSProperties = {
  display: root.flex,
  flexDirection: root.column,
  gap: root.gap50,
  padding: root.px150,
  overflowX: root.auto,
  backgroundColor: root.black100,
  color: root.white,
  paddingLeft: root.p10,
};

// 신제품 섹션
export const sectionNewtStyle: CSSProperties = {
  width: root.fit,
  display: root.grid,
  gap: root.gap50,
};

// 상품별 섹션
export const sectionItemsStyle: CSSProperties = {
  width: root.fit,
  display: root.grid,
  gridTemplateColumns: "repeat(11, 1fr)",
  gap: "20px",
};

// 컨텐츠
export const productTitleStyle: CSSProperties = {
  width: "400px",
  height: "500px",
  display: root.flex,
  alignItems: root.center,
  position: root.relative,
  backgroundColor: root.gray50, // 변경 예정
};

// 컨텐츠 이미지
export const productImgStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  objectFit: root.cover,
};

// 컨텐츠 호버
export const productHoverStyle: CSSProperties = {
  position: root.absolute,
  width: root.fullSize,
  height: root.fullSize,
  backgroundColor: root.gray50,
  opacity: 0.5,
  transition: "all 1s",
};
