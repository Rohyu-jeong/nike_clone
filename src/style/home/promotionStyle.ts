import { CSSProperties } from "react";
import { root } from "../root";

export const promotionContainerStyle: CSSProperties = {
  width: root.viewWidth,
  height: root.viewHeight,
  display: root.grid,
  gridTemplateColumns: "repeat(9, minmax(0, 1fr))",
  gridTemplateRows: "repeat(6, minmax(0, 1fr))",
  backgroundColor: root.black100,
  paddingTop: "200px",
  gap: root.gap10,
};

export const promotionImgStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  objectFit: root.cover,
  position: root.relative,
  cursor : 'pointer',
};

export const promotionImgStyle1: CSSProperties = {
  gridArea: "1/1/4/4",
};

export const promotionImgStyle2: CSSProperties = {
  gridArea: "4/1/8/5",
};

export const promotionImgStyle3: CSSProperties = {
  gridArea: "1/8/4/10",
};

export const promotionImgStyle4: CSSProperties = {
  gridArea: "1/4/3/6",
};

export const promotionImgStyle5: CSSProperties = {
  gridArea: "1/6/4/8",
};

export const promotionImgStyle6: CSSProperties = {
  gridArea: "3/4/3/6",
};

export const promotionImgStyle7: CSSProperties = {
  gridArea: "4/5/9/7",
};

export const promotionImgStyle8: CSSProperties = {
  gridArea: "4/7/9/10",
};

export const promotionTextStyle: CSSProperties = {
  position: root.absolute,
  bottom: root.zero,
  left: root.zero,
  right: root.zero,
  width: root.fullSize,
  height: root.px50,
  display: root.flex,
  flexDirection: root.column,
  color : root.white,
  backgroundColor : '#00000070',
  padding : root.p2,
  boxSizing : root.box_border,
  fontSize : root.font12,
};

export const promotionTitleStyle : CSSProperties = {
  fontSize : root.font16,
  fontWeight : root.bold,
  paddingBlock : root.p2,
}

export const promotionIconStyle : CSSProperties = {
  position: root.absolute,
  right : root.zero,
  fontSize : root.font20,
  height : root.fullSize,
  display : root.flex,
  alignItems : root.center,
}