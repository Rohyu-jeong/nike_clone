import { CSSProperties } from "react";
import { root } from "../root";

export const iconicPostContainerStyle: CSSProperties = {
  position: root.absolute,
  top: root.zero,
  left: root.zero,
  right: root.zero,
  width: root.fullSize,
  height: root.fullSize,
  display: root.grid,
  gridTemplateColumns: "repeat(5 , minmax(0, 1fr))",
  gridTemplateRows: "repeat(18 , minmax(0, 1fr))",
  boxSizing: root.box_border,
};

export const iconicPostStyle1: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  gridArea: "1 / 2",
};

export const iconicPostStyle2: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  gridArea: "3 / 4",
};

export const iconicPostStyle3: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  gridArea: "5 / 2",
};

export const iconicPostStyle4: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  gridArea: "7 / 4",
};

export const iconicPostStyle5: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  gridArea: "9 / 2",
};

export const iconicPostStyle6: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  gridArea: "11 / 4",
};

export const iconicPostStyle7: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  gridArea: "13 / 2",
};

export const iconicPostStyle8: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  gridArea: "15 / 4",
};

export const iconicPostStyle9: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  gridArea: "17 / 2",
};

export const iconicPostimgStyle: CSSProperties = {
  width: "200px",
  height: "300px",
  objectFit: root.cover,
};

export const iconicPostTitle: CSSProperties = {
    fontSize : root.font16,
    color : root.white,
    marginBlock : root.p2,
};

export const iconicPostText : CSSProperties = {
    fontSize : root.font12,
    color : root.white,
}