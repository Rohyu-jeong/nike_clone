import { CSSProperties } from "react";
import { root } from "../root";

export const modalOverlayStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  position: root.fixed,
  top: "0",
  left: root.zero,
  display: root.flex,
  justifyContent: root.center,
  alignItems: "center",
  zIndex: 999,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  color: root.black100,
};

// 모달 컨테이너
export const modalContainerStyle: CSSProperties = {
  width: "500px",
  height: "95vh",
  display: root.flex,
  borderTop: "1px solid #dbdbdb",
  borderRight: "1px solid #dbdbdb",
  borderLeft: "1px solid #dbdbdb",
  position: root.relative,
  backgroundColor: root.white,
  zIndex: 999,
};

// 모달 컨텐츠
export const modalContentStyle: CSSProperties = {
  width: root.fullSize,
  height: "95%",
  display: root.flex,
  flexDirection: root.column,
  gap: root.gap30,
  alignItems: root.center,
  overflowY: root.auto,
  scrollbarColor: "#000000 #ffffff",
  scrollbarWidth: "thin",
};

// 모달 x버튼
export const modalXButtonStyle: CSSProperties = {
  position: root.absolute,
  top: "10px",
  right: "12px",
  appearance: root.none,
  backgroundColor: "transparent",
  border: root.none,
  fontSize: "30px",
  cursor: root.pointer,
};

// 모달 이미지 박스
export const modalImgBoxStyle: CSSProperties = {
  width: "100%",
  height: "fit-content",
};

// 모달 이미지
export const modalImgStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  objectFit: root.contain,
};

// 모달 정보
export const modalInfoStyle: CSSProperties = {
  display: root.flex,
  flexDirection: root.column,
  gap: root.gap20,
  padding: "0 30px 0 30px",
};

export const modalNameStyle: CSSProperties = {
  fontSize: "25px",
  fontWeight: "700",
};

export const modalCatalStyle: CSSProperties = {
  display: root.flex,
  justifyContent: root.between,
  fontWeight: "800",
};

export const modalPriceBoxStyle: CSSProperties = {
  display: root.flex,
  flexDirection: root.column,
  gap: root.gap10,
  borderBottom: "1px solid #dbdbdb",
  paddingBottom: root.p2,
};

export const modalPriceBoxStyle2: CSSProperties = {
  display: root.flex,
  justifyContent: root.between,
};

// 모달 정가
export const modalPriceStyle: CSSProperties = {
  display: root.flex,
  justifyContent: root.between,
};

// 모달 할인 가격
export const modalCurrentPriceStyle: CSSProperties = {
  fontSize: root.font20,
  fontWeight: "700",
};

// 모달 할인 스타일
export const modalDiscountRateStyle1: CSSProperties = {
  color: root.red,
  fontSize: root.font20,
  fontWeight: "700",
};

// 모달 할인 스타일
export const modalDiscountRateStyle2: CSSProperties = {
  color: root.red,
  fontSize: root.font12,
};

export const modalOriginPriceStyle: CSSProperties = {
  color: root.gray70,
  textDecoration: "line-through",
};

// 신발 사이즈 버튼 박스
export const modalButtonBoxStyle: CSSProperties = {
  display: root.grid,
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: root.gap20,
  padding: "5px",
};

// 모달 텍스트
export const modalInfoTextStyle: CSSProperties = {
  fontWeight: "600",
  lineHeight: "1.7",
};

// 모달 이미지 박스
export const modalInfoImageBoxStyle: CSSProperties = {
  display: root.flex,
  flexDirection: root.column,
  gap: root.gap10,
  justifyContent: root.center,
  alignItems: root.center,
};

// 모달 이미지
export const modalInfoImageStyle: CSSProperties = {
  width: "550px",
  height: "350px",
  objectFit: root.contain,
};

// 모달 구매 박스
export const modalPurchaseButtonBoxStyle: CSSProperties = {
  width: root.fullSize,
  height: "50px",
  position: root.absolute,
  bottom: root.zero,
  left: root.zero,
  borderTop: "1px solid #dbdbdb",
  display: root.flex,
  justifyContent: root.between,
  alignItems: root.center,
  backgroundColor: root.white,
  zIndex: root.z5,
  gap: "15px",
};

// 모달 좋아요 표시
export const modalHeartStyle: CSSProperties = {
  fontSize: "50px",
  color: root.gray70,
  paddingLeft: "20px",
  cursor: "pointer",
};

// 모달 구매하기 버튼
export const modalPurchaseButtonStyle: CSSProperties = {
  width: "500px",
  height: "40px",
  marginRight: root.p5,
  backgroundColor: root.black100,
  border: root.none,
  borderRadius: "5px",
  color: root.white,
  fontWeight: "700",
  fontSize: "15px",
  cursor: root.pointer,
};
