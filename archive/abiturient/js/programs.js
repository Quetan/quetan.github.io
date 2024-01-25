let Dropdown = function (root = "#dropdown") {
  const rootContainer = document.querySelector(root);

  const dropdownButtons = rootContainer.querySelectorAll(
    root + " .dropdown--button"
  );
  const dropdownContainers = rootContainer.querySelectorAll(
    root + " .dropdown--container"
  );

  let _currentIndex = 0;

  const _addListener = function (target, eventType, func) {
    if (target) {
      target.addEventListener(eventType, func);
    }
  };

  const _animate = function (target, keyframes, duration, callback) {
    const animation = target.animate(keyframes, duration);
    animation.addEventListener("finish", callback);
  };

  const _handleButtonClick = function () {
    _animate(
      dropdownContainers[_currentIndex],
      [
        { opacity: 1},
        { opacity: 0},
      ],
      200,
      (e) => {
        dropdownButtons[_currentIndex].classList.remove("active");
        dropdownContainers[_currentIndex].classList.remove("active");
        _currentIndex = this.getAttribute("index");
        dropdownButtons[_currentIndex].classList.add("active");
        dropdownContainers[_currentIndex].classList.add("active");
        _animate(
          dropdownContainers[_currentIndex],
          [
            { opacity: 0},
            { opacity: 1},
          ],
          200,
          {}
        );
      }
    );
  };

  const _initBlocks = function (buttons, containers) {
    if (!buttons || !containers) return 0;
    const blocksCount = buttons.length;
    for (let i = 0; i < blocksCount; i++) {
      if (!buttons[i] || !containers[i]) break;
      buttons[i].setAttribute("index", i);
      buttons[i].id = `dropdown-button-${i}`;
      buttons[i].tabIndex = i + 1;
      containers[i].id = `dropdown-container-${i}`;
      containers[i].setAttribute("index", i);
      containers[i].tabIndex = -1;
    }
  };

  _initBlocks(dropdownButtons, dropdownContainers);

  dropdownButtons.forEach((button) => {
    _addListener(button, "click", _handleButtonClick);
  });
};

//Программы обучения
Dropdown("#dropdown");

// YOUTUBE VIDEO PLACEHOLDER
(function () {
  var v = document.getElementsByClassName("youtube-player");
  for (var n = 0; n < v.length; n++) {
    var p = document.createElement("div");
    var id = v[n].getAttribute("data-id");

    var placeholder = v[n].hasAttribute("data-thumbnail")
      ? v[n].getAttribute("data-thumbnail")
      : "";

    if (placeholder.length) p.innerHTML = createCustomThumbail(placeholder);
    else p.innerHTML = createThumbail(id);

    v[n].appendChild(p);
    p.addEventListener("click", function () {
      var parent = this.parentNode;
      createIframe(parent, parent.getAttribute("data-id"));
    });
  }

  function createCustomThumbail(url) {
    return (
      '<img class="youtube-thumbnail" src="' +
      url +
      '" alt="Youtube Preview" /><div class="youtube-play-btn"></div>'
    );
  }

  function createThumbail(id) {
    return (
      '<img class="youtube-thumbnail" src="//i.ytimg.com/vi_webp/' +
      id +
      '/maxresdefault.webp" alt="Youtube Preview"><div class="youtube-play-btn"></div>'
    );
  }

  function createIframe(v, id) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute(
      "src",
      "//www.youtube.com/embed/" +
        id +
        "?autoplay=1&color=white&autohide=2&modestbranding=1&border=0&wmode=opaque&enablejsapi=1&showinfo=0&rel=0"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("class", "youtube-iframe");
    iframe.setAttribute("loading", "lazy");
    v.firstChild.replaceWith(iframe);
  }
})();

function animateValue(obj, duration) {
  if (!obj) return;
  const start = 0,
    end = Number(obj.dataset.value);
  if (!end) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("jsNumber");
animateValue(obj, 1200);
