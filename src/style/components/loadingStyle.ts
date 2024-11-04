import { CSSProperties } from "react";
import { root } from "../root";

export const loadingContainerStyle: CSSProperties = {
  width: root.viewWidth,
  height: root.viewWidth,
  position: root.absolute,
  top: root.zero,
  bottom: root.zero,
  left: root.zero,
  right: root.zero,
  zIndex: root.z999,
  display: root.flex,
  overflow : 'hidden',
};

export const loadingBoxsStyle: CSSProperties = {
  width: root.fullSize,
  height: root.fullSize,
  backgroundColor: root.black100,
};

export const loadingLogoStyle: CSSProperties = {
  width: root.fullSize,
  height: root.auto,
  objectFit: root.cover,
  marginBlock : '50%',
};
