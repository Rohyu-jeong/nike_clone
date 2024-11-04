export type HeaderDetailsDataType = {
  id : string;
  title : string;
  url : string;
}

// 헤더 네비 데이터
export const headerNaviData = ["", "About", "Product", "Member"];

// 헤더 상세정보 데이터
export const headerDetailsData : HeaderDetailsDataType[] = [
  {
    id: "매장찾기",
    title: "매장찾기",
    url: "/findStore",
  },
  {
    id: "고객센터",
    title: "고객센터",
    url: "/about",
  },
  {
    id: "가입하기",
    title: "가입하기",
    url: "/member",
  },
  {
    id: "로그인",
    title: "로그인",
    url: "/member",
  },
];
