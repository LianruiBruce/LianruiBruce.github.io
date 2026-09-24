/* Small, optional GSAP accents for the homepage and CV. Content is visible without JS. */
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
          .from(intro.querySelector(".intro__identity"), { autoAlpha: 0, y: 10, duration: 0.45 })
          .from(intro.querySelector("h1"), { autoAlpha: 0, y: 18, duration: 0.65 }, "-=0.22")
          .from(intro.querySelectorAll(".intro__lede, .intro__actions, .intro__availability"), {
            opacity: 0.55, y: 12, duration: 0.52, stagger: 0.09
          }, "-=0.36")
          .from(intro.querySelector(".intro__illustration"), {
            autoAlpha: 0, x: 20, duration: 0.75
          }, "-=0.75");
      }

      if (cvIntro) {
        gsap.from(cvIntro.children, {
          opacity: 0.6, y: 10, duration: 0.5, ease: "power2.out", stagger: 0.07
        });
      }
    }

    root.querySelectorAll(
      ".section-heading, .research-piece, .project-line, .background-columns, .contact-section, .cv-section"
    ).forEach(function (element) {
      gsap.from(element, {
        opacity: 0.65,
        y: 16,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true }
      });
    });
  });
}());
