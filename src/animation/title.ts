import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin"; // 텍스트 애니메이션 플러그인
gsap.registerPlugin(TextPlugin); // 플러그인 연결

export const titleGSAP = (
  ref: React.RefObject<HTMLSpanElement>,
  text: string
) => {
  if (!ref.current) return;

  const tl = gsap.timeline({ repeat: 1 });
  tl.to(ref.current, {
    duration: 1, // 변경 시간
    text: text, // 변경될 텍스트
    ease: "power2.inOut", // 변경 속도
  }).to(ref.current, {
    duration: 1, // 변경 시간
    text: text, // 변경될 텍스트
    ease: "power2.inOut", // 변경 속도
  });
};
