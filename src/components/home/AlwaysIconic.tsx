import { useEffect, useState } from "react";
import {
  alwaysContainerStyle,
  backgroundImgStyle,
  btnContainerStyle,
  btnStyle,
  updownStyle,
} from "../../style/home/alwaysStyle"; // 스타일 시트
import { IoArrowUndoSharp } from "react-icons/io5"; // 버튼 넘기기 아이콘
import { IoArrowRedoSharp } from "react-icons/io5"; // 버튼 넘기기 아이콘
import { LuArrowDownUp } from "react-icons/lu"; // 펼침/접음 아이콘
import IconicPost from "./IconjicPost"; // 포스터 컴포넌트
import IconicCube from "./IconicCube"; // 큐브 컴포넌트

const AlwaysIconic: React.FC = () => {
  const [rotate, setRotate] = useState<number>(0); // 큐브 회전 값
  const [isScaleDown, setIsScaleDown] = useState<boolean>(true); // 펼침,접음 상태 값

  // 회전 버튼 클릭 이벤트 핸들러
  const handleClick = (isBtn: boolean) => {
    // 40deg씩 증감
    isBtn
      ? setRotate((prev) => (prev += 40))
      : setRotate((prev) => (prev -= 40));
  };

  // 펼침 / 접음 클릭 이벤트 핸들러
  const handleClickUpDown = () => {
    setIsScaleDown((prev) => !prev); // 기존의 반대 값으로 할당
  };

  return (
    // 펼침,접음 상태 값에 따라 스타일 시트 변경
    <section
      style={
        isScaleDown
          ? { ...alwaysContainerStyle, height: "3000px" }
          : alwaysContainerStyle
      }
    >
      <img style={backgroundImgStyle} src="/image/home/bg1.jpg" alt="" />
      {isScaleDown && <IconicPost />}
      <div style={updownStyle} onClick={handleClickUpDown}>
        <LuArrowDownUp />
      </div>
      <IconicCube
        rotate={rotate}
        setRotate={setRotate}
        isScaleDown={isScaleDown}
      />
      <div style={isScaleDown ? { display: "none" } : btnContainerStyle}>
        <button style={btnStyle} onClick={() => handleClick(false)}>
          <IoArrowRedoSharp />
        </button>
        <button style={btnStyle} onClick={() => handleClick(true)}>
          <IoArrowUndoSharp />
        </button>
      </div>
    </section>
  );
};

export default AlwaysIconic;
