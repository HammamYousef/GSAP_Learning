import gsap from "gsap";

gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  duration: 4,
  borderRadius: "50%",
  onComplete: () => {
    gsap.to(".box", {
      y: -20,
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      ease: "power1.inOut",
    });
  },
});

