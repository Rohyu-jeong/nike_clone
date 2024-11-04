import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin"; // 텍스트 애니메이션 플러그인
gsap.registerPlugin(TextPlugin); // 플러그인 연결

export const typographyGSAP = (
  ref: React.RefObject<HTMLSpanElement>,
  startText: string,
  endText: string
) => {
  if (!ref.current) return;

  const tl = gsap.timeline({ repeat: -1, yoyo: true }); // 애니메이션의 타임라인은 무한 반복 , 역방향 순회 적용
  tl.to(ref.current, {
    duration: 3, // 변경 시간
    text: startText, // 변경될 텍스트
    ease: "power2.inOut", // 변경 속도
  }).to(ref.current, {
    duration: 3,
    text: endText,
    ease: "power2.inOut",
  });
};
