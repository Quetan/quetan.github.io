// import tinyTypewriter from "tiny-typewriter";
import Gumshoe from "gumshoejs";
import "@lottiefiles/lottie-player";

document.addEventListener("DOMContentLoaded", () => {
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
  // Modal
  (function () {
    let html = document.getElementsByTagName("html")[0],
      modal = document.getElementById("instruction"),
      btn = document.querySelectorAll(".openInstruction"),
      connect = document.getElementById("closenconnect"),
      span = document.getElementsByClassName("close")[0];

    btn.forEach((b) => {
      b.addEventListener("click", () => {
        html.style.overflow = "hidden";
        modal.style.display = "grid";
      });
    });
    connect.onclick = function () {
      html.style.overflow = "visible";
      modal.style.display = "none";
    };
    span.onclick = function () {
      html.style.overflow = "visible";
      modal.style.display = "none";
    };
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const isNotCombinedKey = !(
          event.ctrlKey ||
          event.altKey ||
          event.shiftKey
        );
        if (isNotCombinedKey) {
          html.style.overflow = "visible";
          modal.style.display = "none";
        }
      }
    });
  })();

  //focusable
  (function () {
    const focusableElements =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const modal = document.getElementById("instruction");
    if (!modal) return false;
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];
    document.addEventListener("keydown", function (e) {
      if (!(e.key === "Tab" || e.keyCode === 9)) {
        return false;
      }
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }
    });
    lastFocusableElement.focus();
  })();
});
