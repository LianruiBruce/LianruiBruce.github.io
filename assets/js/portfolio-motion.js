/* Small, optional GSAP accents. Text and the illustration remain visible at every frame. */
(function () {
  "use strict";

  var root = document.querySelector(".home-landing");
  if (!root || !window.gsap || !window.ScrollTrigger) return;

  var gsap = window.gsap;
  gsap.registerPlugin(window.ScrollTrigger);

  gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", function () {
    var intro = root.querySelector(".intro");
    var cvIntro = root.querySelector(".cv-intro");

    if (window.scrollY < 80 && !window.location.hash) {
      if (intro) {
        gsap.timeline({ defaults: { ease: "power2.out" } })
          .from(intro.querySelector(".intro__identity"), {
            y: 8, duration: 0.45, clearProps: "transform"
          })
          .from(intro.querySelector("h1"), {
            y: 14, duration: 0.6, clearProps: "transform"
          }, "-=0.22")
          .from(intro.querySelectorAll(".intro__lede, .intro__actions, .intro__availability"), {
            y: 10, duration: 0.5, stagger: 0.09, clearProps: "transform"
          }, "-=0.36")
          .from(intro.querySelector(".intro__illustration"), {
            x: 16, scale: 0.98, duration: 0.7, clearProps: "transform"
          }, "-=0.65");
      }

      if (cvIntro) {
        gsap.from(cvIntro.children, {
          y: 8, duration: 0.5, ease: "power2.out", stagger: 0.07,
          clearProps: "transform"
        });
      }
    }

    root.querySelectorAll(
      ".section-heading, .research-piece, .project-line, .background-columns, .contact-section, .cv-section"
    ).forEach(function (element) {
      gsap.from(element, {
        y: 12,
        duration: 0.55,
        ease: "power2.out",
        clearProps: "transform",
        scrollTrigger: { trigger: element, start: "top 88%", once: true }
      });
    });
  });
}());
