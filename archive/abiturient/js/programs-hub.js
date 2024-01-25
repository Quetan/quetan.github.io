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
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(-200%)" },
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
              { opacity: 0, transform: "translateY(-200%)" },
              { opacity: 1, transform: "translateY(0)" },
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
  Dropdown();