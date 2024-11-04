import { CSSProperties } from "react";
import { root } from "../root";

// 프로필 컨테이너
export const profileContainerStyle: CSSProperties = {
  width: root.viewWidth,
  height: "fit-content",
  backgroundColor: root.white,
  paddingTop: "70px",
  boxSizing: root.box_border,
  position: "relative",
};
