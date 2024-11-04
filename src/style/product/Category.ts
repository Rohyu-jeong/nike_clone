import { CSSProperties } from "react";
import { root } from "../root";

export const filterSidebar: CSSProperties = {
  width: "200px",
  padding: "20px",
  height: "80vh",
  position: root.fixed,
  left: "30px",
  top: "100px",
  zIndex: root.z2,
  background: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(10px)",
  paddingBlock: "10px",
  paddingInline: "10px",
  overflowY: "auto",
  scrollbarColor: "#fff transparent",
  scrollbarWidth: "thin",
};

export const filterTitle: CSSProperties = {
  fontSize: "24px",
  marginBottom: "20px",
  borderBottom: "3px solid #dbdbdb",
  paddingBottom: "7px",
};

export const filterList: CSSProperties = {
  listStyleType: root.none,
  paddingBottom: "30px",
};

export const filterItem: CSSProperties = {
  paddingBottom: "15px",
  cursor: root.pointer,
};

export const filterCategory: CSSProperties = {
  fontWeight: root.bold,
};

export const filterSublist: CSSProperties = {
  listStyleType: root.none,
  paddingLeft: "15px",
};

export const filterSubitem: CSSProperties = {
  paddingTop: "13px",
  cursor: root.pointer,
};
