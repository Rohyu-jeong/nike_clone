import { CSSProperties } from "react";
import { root } from "../root";

export const aboutBannerStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "2000px",
  //   height: "50px",
  paddingTop: "100px",
  textAlign: "center",
  maxWidth: "100%",
  margin: "0 auto",

  //   border: "1px solid black",
};

export const aboutSectionStyle: CSSProperties = {
  display: root.flex,
  flexDirection: "column",
  width: "fit-content",
  //   maxWidth: "1800px",
  alignItems: "center",
  marginTop: "250px",
  padding: "80px",
  borderBottom: "1px solid #ccc",
  justifyContent: "center",
  gap: "60px",
  textAlign: "center",
  margin: " 0 auto",
};

export const aboutTitleStyle: CSSProperties = {
  fontSize: root.font50,
  fontWeight: root.bold,
};

export const aboutSectionImgStyle: CSSProperties = {
  width: "1600px",
  height: "1000px",
};

export const aboutContentStyle: CSSProperties = {
  fontSize: root.font20,
  fontWeight: "500",
  textAlign: "center",
};
