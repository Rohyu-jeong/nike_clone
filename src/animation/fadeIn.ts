import gsap from "gsap";
gsap.registerPlugin();

export const fadeInGSAP = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) return;

  gsap.fromTo(
    ref.current,
    {
      opacity : 0,
    },
    {
      duration: 1, // 첫 번째 애니메이션 지속 시간
      ease: "power2.inOut", // 일정한 속도로
      opacity : 1,
    }
  );
};
