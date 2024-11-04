import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type PropType = {
  cubeContainerRef: React.RefObject<HTMLDivElement>;
  end: number;
};

export const scroll = ({ cubeContainerRef, end }: PropType) => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  gsap.to(cubeContainerRef.current, {
    rotateY: 800, // Y축을 기준으로 800도 회전
    scrollTrigger: {
      trigger: cubeContainerRef.current,
      start: "top 20%", // 페이지 상단에서 20% 위치부터
      end: `+=${end}%`,
      scrub: 1,
      markers: {
        startColor: "white",
        endColor: "blue",
        fontSize: "18px",
        fontWeight: "bold",
        indent: 20,
      },
    },
  });
};
