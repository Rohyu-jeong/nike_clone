export const footerhandleClick = (
  setIsFooter: React.Dispatch<React.SetStateAction<boolean>>
) => {
    // 현재 푸터 상태 값의 반대로 업데이트
  setIsFooter((prev) => (prev ? false : true));
};
