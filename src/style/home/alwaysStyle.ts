import { CSSProperties } from "react";
import { root } from "../root";

export const alwaysContainerStyle: CSSProperties = {
  width: root.viewWidth,
  height: root.viewHeight,
  perspective: "6500px",
  margin: root.auto,
  backgroundColor: root.black100,
  position: root.relative,
  paddingBlock: root.px100,
  boxSizing: root.box_border,
};

export const backgroundImgStyle : CSSProperties = {
  width : root.fullSize,
  height : root.fullSize,
  objectFit : root.cover,
  position : root.absolute,
  top : root.zero,
  opacity : '0.2',
}

export const updownStyle: CSSProperties = {
  color: root.white,
  fontSize: root.font20,
  position: root.fixed,
  top: root.px100,
  right: root.px100,
  zIndex: root.z5,
};

export const alwaysCubeStyle: CSSProperties = {
  width: "300px",
  height: "170px",
  transformStyle: "preserve-3d",
  margin: `${root.auto}`,
  position: root.relative,
  transition: "all 0.5s",
  willChange: "transform",
  backfaceVisibility: "hidden",
  marginBlock: "200px",
};

export const iconicStyle1: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  transform: "translateZ(500px)",
  objectFit: root.cover,
};

export const iconicStyle2: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  transform: "rotateY(40deg) translateZ(500px)",
  objectFit: root.cover,
};

export const iconicStyle3: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  transform: "rotateY(80deg) translateZ(500px)",
  objectFit: root.cover,
};

export const iconicStyle4: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  transform: "rotateY(120deg) translateZ(500px)",
  objectFit: root.cover,
};

export const iconicStyle5: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  transform: "rotateY(160deg) translateZ(500px)",
  objectFit: root.cover,
};

export const iconicStyle6: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  transform: "rotateY(200deg) translateZ(500px)",
  objectFit: root.cover,
};

export const iconicStyle7: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  transform: "rotateY(240deg) translateZ(500px)",
  objectFit: root.cover,
};

export const iconicStyle8: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  transform: "rotateY(280deg) translateZ(500px)",
  objectFit: root.cover,
};

export const iconicStyle9: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  transform: "rotateY(320deg) translateZ(500px)",
  objectFit: root.cover,
};

export const btnContainerStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  position: root.absolute,
  top: root.zero,
  left: root.zero,
  right: root.zero,
  bottom: root.zero,
  display: root.flex,
  justifyContent: root.between,
  alignItems: root.center,
  boxSizing: root.box_border,
  paddingInline: root.px50,
};

export const btnStyle: CSSProperties = {
  width: root.px100,
  height: root.fullSize,
  backgroundColor: "transparent",
  border: root.none,
  color: root.white,
  fontSize: root.font32,
  cursor: "pointer",
};

export const titleStyle1: CSSProperties = {
  width: root.fullSize,
  color: root.white,
  fontSize: root.font32,
  cursor: "pointer",
  transform: "translateZ(500px)",
  marginTop: "100px",
  textAlign: root.center,
  fontWeight: root.bold,
  fontFamily: "Rubik Doodle Shadow",
};

export const titleStyle2: CSSProperties = {
  width: root.fullSize,
  color: root.white,
  fontSize: root.font32,
  cursor: "pointer",
  transform: "rotateY(40deg) translateZ(500px)",
  marginTop: "100px",
  textAlign: root.center,
  fontWeight: root.bold,
  fontFamily: "Rubik Doodle Shadow",
};

export const titleStyle3: CSSProperties = {
  width: root.fullSize,
  color: root.white,
  fontSize: root.font32,
  cursor: "pointer",
  transform: "rotateY(80deg) translateZ(500px)",
  marginTop: "100px",
  textAlign: root.center,
  fontWeight: root.bold,
  fontFamily: "Rubik Doodle Shadow",
};

export const titleStyle4: CSSProperties = {
  width: root.fullSize,
  color: root.white,
  fontSize: root.font32,
  cursor: "pointer",
  transform: "rotateY(120deg) translateZ(500px)",
  marginTop: "100px",
  textAlign: root.center,
  fontWeight: root.bold,
  fontFamily: "Rubik Doodle Shadow",
};

export const titleStyle5: CSSProperties = {
  width: root.fullSize,
  color: root.white,
  fontSize: root.font32,
  cursor: "pointer",
  transform: "rotateY(160deg) translateZ(500px)",
  marginTop: "100px",
  textAlign: root.center,
  fontWeight: root.bold,
  fontFamily: "Rubik Doodle Shadow",
};

export const titleStyle6: CSSProperties = {
  width: root.fullSize,
  color: root.white,
  fontSize: root.font32,
  cursor: "pointer",
  transform: "rotateY(200deg) translateZ(500px)",
  marginTop: "100px",
  textAlign: root.center,
  fontWeight: root.bold,
  fontFamily: "Rubik Doodle Shadow",
};

export const titleStyle7: CSSProperties = {
  width: root.fullSize,
  color: root.white,
  fontSize: root.font32,
  cursor: "pointer",
  transform: "rotateY(240deg) translateZ(500px)",
  marginTop: "100px",
  textAlign: root.center,
  fontWeight: root.bold,
  fontFamily: "Rubik Doodle Shadow",
};

export const titleStyle8: CSSProperties = {
  width: root.fullSize,
  color: root.white,
  fontSize: root.font32,
  cursor: "pointer",
  transform: "rotateY(280deg) translateZ(500px)",
  marginTop: "100px",
  textAlign: root.center,
  fontWeight: root.bold,
  fontFamily: "Rubik Doodle Shadow",
};
export const titleStyle9: CSSProperties = {
  width: root.fullSize,
  color: root.white,
  fontSize: root.font32,
  cursor: "pointer",
  transform: "rotateY(320deg) translateZ(500px)",
  marginTop: "100px",
  textAlign: root.center,
  fontWeight: root.bold,
  fontFamily: "Rubik Doodle Shadow",
};
