export const categories = [
  {
    name: "신제품",
    subcategories: [],
  },
  {
    name: "신발",
    subcategories: [
      "전체",
      "조던",
      "러닝",
      "라이프스타일",
      "샌들 & 슬리퍼",
      "골프화",
      "농구화",
    ],
  },
  // {
  //   name: '의류',
  //   subcategories: ['탑 & 티셔츠', '후디 & 크루', '재킷 & 베스트', '팬츠& 타이즈', '트랙슈트', '서핑 & 수영복', '양말']
  // },
  // {
  //   name: '용품',
  //   subcategories: ['가방', '모자 & 헤어밴드', '양말', '장갑', '슬리브 & 암 밴드', '공', '보호대']
  // }
];

export const commonFilters = ["가격대", "할인율"];

export const filters = [
  {
    name: "가격대",
    subcategories: [
      "0-50,000원",
      "50,000-100,000원",
      "100,000-150,000원",
      "150,000-200,000원",
      "200,000원 이상",
    ],
  },
  {
    name: "할인율",
    subcategories: ["0%", "1%-10%", "11%-20%", "21%-30%", "31% 이상"],
  },
];
