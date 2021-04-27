import tinyTypewriter from "tiny-typewriter";

document.addEventListener("DOMContentLoaded", () => {
  // Type effect
  // (function () {
  //   const typewritter = document.querySelector("#typewriter");
  //   tinyTypewriter(typewritter, {
  //     items: ["дома.", "офиса.", "предприятия."],
  //     typeSpeed: 150,
  //     deleteSpeed: 100,
  //   });
  // })();
  // Smooth scroll
  (function () {
    const links = document.querySelectorAll(".smooth-link");
    for (const link of links) link.addEventListener("click", clickHandler);
    function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href === "#" || !document.querySelector(href)) return;
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  })();
});
