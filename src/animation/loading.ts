import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const loadingGSAP = (
  ref: React.RefObject<HTMLDivElement>,
  i: number
) => {
  if (!ref.current) return;
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  // 타임라인 생성
  const tl = gsap.timeline();

  tl.fromTo(
    ref.current,
    {
      y: "100%",
    },
    {
      duration: 1, // 첫 번째 애니메이션 지속 시간
      ease: "power2.inOut", // 일정한 속도로
      y: "0%",
      delay: i / 5,
    }
  ).to(ref.current, {
    duration: 1, // 두 번째 애니메이션 지속 시간
    ease: "power2.inOut", // 일정한 속도로
    y: "-100%",
    delay: 1, // 1초 지연
  });
};
