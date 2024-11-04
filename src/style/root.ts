type Root = {
  white: "#ffffff";
  black100: "#000000";
  black70: "#272829";
  black50: "#434242";
  gray100: "#686D76";
  gray70: "#B2B2B2";
  gray50: "#D8D8D8";
  skin100: "#F4DFC8";
  skin70: "#F4EAE0";
  skin20: "#FAF6F0";
  red: "#FF1919";
  blue: "#3572EF";

  font12: "12px";
  font16: "16px";
  font20: "20px";
  font32: "32px";
  font50: "50px";
  font90: "90ox";

  roubik_Lines: "Rubik Lines";
  bold: "bold";

  viewWidth: "100vw";
  viewHeight: "100vh";
  fullSize: "100%";
  fit: "fit-content";
  auto: "auto";

  flex: "flex";
  column: "column";
  grid: "grid";
  between: "space-between";
  center: "center";
  end: "end";
  gap10: "10px";
  gap20: "20px";
  gap30: "30px";
  gap50: "50px";

  p2: "2%";
  p5: "5%";
  p10: "10%";
  p20: "20%";

  fixed: "fixed";
  absolute: "absolute";
  relative: "relative";
  zero: "0";

  borderS: "1px solid #000";
  borderM: "3px solid #000";
  borderL: "5px solid #000";
  radiusS: "5%";
  radiusM: "10%";
  radiusL: "15%";
  radiusFull: "50%";

  box_border: "border-box";

  cover: "cover";
  contain: "contain";

  z999: "999";
  z5: "5";
  z4: "4";
  z3: "3";
  z2: "2";
  z1: "1";

  shadowS: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px";

  none: "none";

  pointer: "pointer";

  px50: "50px";
  px100: "100px";
  px150: "150px";
};

// 루트 스타일 값
export const root: Root = {
  // color
  white: "#ffffff", // 화이트
  black100: "#000000", // 블랙
  black70: "#272829", // 연한블랙
  black50: "#434242", // 매우 연한 블랙
  gray100: "#686D76", // 그레이
  gray70: "#B2B2B2", // 연한 그레이
  gray50: "#D8D8D8", // 매우 연한 그레이
  skin100: "#F4DFC8", // 살색
  skin70: "#F4EAE0", // 연한 살색
  skin20: "#FAF6F0", // 매우 연한 살색
  red: "#FF1919", // 레드
  blue: "#3572EF", // 블루

  // fontSize
  font12: "12px", // 리스트, 설명 등
  font16: "16px", // 강조 텍스트
  font20: "20px", // 본문
  font32: "32px", // 서브 타이틀
  font50: "50px", // 타이틀
  font90: "90ox", // 타이포그래피 , 메인 타이틀

  //fontStyle
  roubik_Lines: "Rubik Lines", // 타이포그래피 폰트
  bold: "bold", // 폰트 두껍게

  // size
  viewWidth: "100vw", // 뷰포트 w
  viewHeight: "100vh", // 뷰포트 h
  fullSize: "100%", // 부모요소 전체 크기
  fit: "fit-content", // 컨텐츠의 크기
  auto: "auto", // 자동크기

  // layout
  flex: "flex", // 가로정렬
  column: "column", // 세로 정렬
  grid: "grid", // 그리드 정렬
  between: "space-between", // 최대 간격 정렬
  center: "center", // 가운데 정렬
  end: "end", // 끝에 정렬
  gap10: "10px", // 얇은 간격
  gap20: "20px",
  gap30: "30px", // 중간 간격
  gap50: "50px", // 두꺼운 간격

  // padding
  p2: "2%", // 내부간격 2%
  p5: "5%", // 내부간격 5%
  p10: "10%", // 내부간격 10%
  p20: "20%", // 내부간격 20%

  // position
  fixed: "fixed", // 고정 위치
  absolute: "absolute", // 독립적인 위치
  relative: "relative", // 부모요소를 기준
  zero: "0", // 0값 - 끝값

  // border
  borderS: "1px solid #000", // 얇은 외곽선
  borderM: "3px solid #000", // 중간 외곽선
  borderL: "5px solid #000", // 두꺼운 외곽선
  radiusS: "5%",
  radiusM: "10%",
  radiusL: "15%",
  radiusFull: "50%", // 원형

  // box-size
  box_border: "border-box", // 박스 사이즈 제한

  // object
  cover: "cover", // 컨테이너 크기에 비율을 맞춤
  contain: "contain", // 원래 비율 유지하며 크기 조정

  // z-index
  z999: "999", // 제일 앞에 위치
  z5: "5",
  z4: "4",
  z3: "3",
  z2: "2",
  z1: "1", // 기본위치보다 앞에 위치

  // shadow
  shadowS:
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px", // 약한 섀도우

  none: "none", //

  pointer: "pointer",

  px50: "50px", // 50px
  px100: "100px", // 100px
  px150: "150px", // 150px
};
