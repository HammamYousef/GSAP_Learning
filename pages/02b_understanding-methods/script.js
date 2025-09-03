import { gsap } from "gsap";

const play = document.querySelector(".play");

const pause = document.querySelector(".pause");

const resume = document.querySelector(".resume");

const restart = document.querySelector(".restart");

const reverse = document.querySelector(".reverse");

const repeat = document.querySelector(".repeat");

const kill = document.querySelector(".kill");

const yoyo = document.querySelector(".yoyo");

const animation = gsap.to(".box", {
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

play.addEventListener("click", () => { animation.play(); });

pause.addEventListener("click", () => { animation.pause(); });

resume.addEventListener("click", () => { animation.resume(); });

restart.addEventListener("click", () => { animation.restart(); });

reverse.addEventListener("click", () => { animation.reverse(); });

repeat.addEventListener("click", () => { animation.repeat(3); }); // 1.5 AC cycles ifykyk // 1 + 3

kill.addEventListener("click", () => { animation.kill(); });

yoyo.addEventListener("click", () => { animation.yoyo(true); });
