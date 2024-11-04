import gsap from "gsap";
gsap.registerPlugin(); // 플러그인 연결

export const cubeGSAP = (ref: React.RefObject<HTMLDivElement>) => {
  if (!ref.current) return;

  gsap.fromTo(
    ref.current,
    {
      rotateY: 0,
    },
    {
      duration: 20, // 회전 완료하는 시간
      ease: "linear", // 일정한 속도로
      rotateY: 360,
      repeat: -1, // 무한 반복
    }
  );
};
