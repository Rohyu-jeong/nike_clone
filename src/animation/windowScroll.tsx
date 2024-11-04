import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import Banner from "../components/home/Banner";
import Trending from "../components/home/Trending";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type PropType = {
  [key: string]: React.RefObject<HTMLDivElement>;
};

export const windowScroll = ({ bannerRef, trendingRef }: PropType) => {
  const panels = [bannerRef.current, trendingRef.current];
  const observer = ScrollTrigger.normalizeScroll(true);
  let scrollTween: any;

  document.addEventListener(
    "touchstart",
    (e) => {
      if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    },
    { capture: true, passive: false }
  );

  function goToSection(i: number) {
    const windowHeight = window.innerHeight;
    scrollTween = gsap.to(window, {
      scrollTo: { y: i * windowHeight, autoKill: false }, // 안전하게 사용
      duration: 1,
      onComplete: () => (scrollTween = null),
      overwrite: true,
    });
  }

  panels.forEach((panel, i) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top bottom",
      end: "bottom bottom",
      markers: {
        startColor: "blue",
        endColor: "red",
        fontSize: "18px",
        fontWeight: "bold",
        indent: 20,
      },
      onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
    });
  });
};
