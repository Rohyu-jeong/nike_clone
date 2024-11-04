import {
  bannerStyle,
  typographyBoxStyle,
  typographyLeftStyle,
  typographyRightStyle,
  postBoxStyle,
  post23BoxStyle,
  post1Style,
  post2Style,
  post3Style,
} from "../../style/home/bannerStyle"; // 스타일 시트
import React, { useRef, useEffect } from "react";
import { typographyGSAP } from "../../animation/typography"; // 타이포 그래피 GSAP 애니메이션
import Cube from "./CubeVideo"; // 비디오 큐브 컴포넌트

// 타이포그래피 데이터 타입
type TypographyRefsType = {
  ref: React.RefObject<HTMLSpanElement>;
  startText: string;
  endText: string;
};

const Banner: React.FC = () => {
  const typographyRef1 = useRef<HTMLSpanElement>(null); // 첫 번째 타이포그래피 엘리먼트
  const typographyRef2 = useRef<HTMLSpanElement>(null); // 두 번째 타이포그래피 엘리먼트
  const typographyRef3 = useRef<HTMLSpanElement>(null); // 세 번째 타이포그래피 엘리먼트
  const typographyRef4 = useRef<HTMLSpanElement>(null); // 네 번째 타이포그래피 엘리먼트

  useEffect(() => {
    const typographyRefs: TypographyRefsType[] = [
      // 타이포그래피 데이터 - 데이터 폴더로 분리하고 싶은데 ref가 걸려서 애매함 해결방안 생각중
      {
        ref: typographyRef1,
        startText: "YOU CAN'T STOP US",
        endText: "JUST DO IT",
      },
      {
        ref: typographyRef2,
        startText: "JUST DO IT",
        endText: "NIKE",
      },
      { ref: typographyRef3, startText: "NIKE", endText: "PLAY NEW" },
      {
        ref: typographyRef4,
        startText: "PLAY NEW",
        endText: "YOU CAN`T STOP US",
      },
    ];
    // 타이포그래피 애니메이션 호출
    typographyRefs.forEach((typography: TypographyRefsType, i: number) =>
      typographyGSAP(typography.ref, typography.startText, typography.endText)
    );
  }, []);

  return (
    <section style={bannerStyle}>
      {/* 큐브 컴포넌트 */}
      <Cube />
      <div style={postBoxStyle}>
        {/* 1 번쨰 포스터 */}
        <img
          style={post1Style}
          src="/image/post/banner-post1.jpg"
          alt="POST1"
        />
        <div style={post23BoxStyle}>
          {/* 2 번째 포스터 */}
          <img
            style={post2Style}
            src="/image/post/banner-post2.jpg"
            alt="POST2"
          />
          {/* 3 번째 포스터 */}
          <img
            style={post3Style}
            src="/image/post/banner-post3.jpg"
            alt="POST3"
          />
        </div>
      </div>
      {/* 타이포그래피 */}
      <div style={typographyBoxStyle}>
        <div style={typographyLeftStyle}>
          <span ref={typographyRef1}>JUST DO IT</span>
          <span ref={typographyRef2}>NIKE</span>
        </div>
        <div style={typographyRightStyle}>
          <span ref={typographyRef3}>PLAY NEW</span>
          <span ref={typographyRef4}>YOU CAN`T STOP US</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
