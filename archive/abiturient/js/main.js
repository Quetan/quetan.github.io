(function () {
  (function () {
    let dropdown = document.querySelectorAll(".dropdown");
    let menu_items = document.querySelectorAll(".dropdown .menu li a");
    let links = document.querySelectorAll(".dropdown h2 a");

    dropdown.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        if (item.classList.contains("closed")) {
          item.classList.remove("closed");
        }
      });

      item.addEventListener("mouseleave", (e) => {
        if (!item.classList.contains("closed")) {
          item.classList.add("closed");
        }
      });

      item.addEventListener("touchstart", (e) => {
        e.preventDefault();
        if (item.classList.contains("closed")) {
          item.classList.remove("closed");
        }
      });
    });

    menu_items.forEach((item) => {
      item.addEventListener("touchend", (e) => {
        let href = e.target.getAttribute("href");
        window.location.href = href;
      });
    });

    document.addEventListener("touchstart", (e) => {
      links.forEach((link) => {
        if (!(e.target === link)) {
          if (!link.parentNode.parentNode.classList.contains("closed")) {
            link.parentNode.parentNode.classList.add("closed");
          }
        }
      });
    });
  })();

  // PARALLAX FUNCTIONALITY
  (function () {
    function throttle(fn, wait) {
      var time = Date.now();
      return function () {
        if (time + wait - Date.now() < 0) {
          fn();
          time = Date.now();
        }
      };
    }

    function goodParallax() {
      let scrolled = window.pageYOffset;
      let wrappers = document.querySelectorAll(".parallax-wrapper");
      wrappers.forEach((wrapper) => {
        let offset = Math.abs(wrapper.offsetTop - window.innerHeight / 2);
        let objects = wrapper.querySelectorAll(".parallax-object");
        objects.forEach((object) => {
          let speed = object.dataset.speed;
          let coords = (scrolled - offset) * speed + "px";
          object.style.transform = "translateY(-" + coords + ")";
        });
      });
    }

    window.addEventListener("scroll", throttle(goodParallax, 14));
  })();

  // OWL CAROUSEL
  $(".slider-container_slide").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    singleItem: true,
    nav: false,
    dots: true,
    lazyLoad: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });

  $(".announces-carousel").each(function () {
    $(this).owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: this.dataset.owlItems || 2,
        },
      },
    });
  });

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

  // tabs

  let $tabs = $("[data-tab-name]");
  if ($tabs.length > 0) {
    let tabsRef = document.querySelectorAll("[data-tab-ref]");
    $tabs.on("click", function () {
      $tabs.removeClass("active");
      this.classList.add("active");
      tabsRef.forEach((el) => {
        el.style.display =
          this.dataset.tabName == el.dataset.tabRef ? "flex" : "none";
      });
    });
  }

  // search

  let $searchInput = $("#header-search");
  $searchInput.closest("form").on("submit", function () {
    return !!$searchInput.val();
  });
})();

//Modal script
(function () {
  (function () {
    if (typeof window.CustomEvent === "function") return false;
    function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: null };
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      return evt;
    }
    window.CustomEvent = CustomEvent;
  })();

  (function () {
    var $modal = function (options) {
      var _elemModal,
        _eventShowModal,
        _eventHideModal,
        _hiding = false,
        _destroyed = false,
        _animationSpeed = 200;

      function _createModal(options) {
        var elemModal = document.createElement("div"),
          modalTemplate =
            '<div class="modal__backdrop" data-dismiss="modal"><div class="modal__content"><div class="modal__header"><div class="modal__title" data-modal="title">{{title}}</div><span class="modal__btn-close" data-dismiss="modal" title="Закрыть">Г—</span></div><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div></div>',
          modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
          modalButtonTemplate =
            '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
          modalHTML,
          modalFooterHTML = "";

        elemModal.classList.add("modal");
        modalHTML = modalTemplate.replace(
          "{{title}}",
          options.title || "Новое окно"
        );
        modalHTML = modalHTML.replace("{{content}}", options.content || "");
        if (options.footerButtons) {
          for (
            var i = 0, length = options.footerButtons.length;
            i < length;
            i++
          ) {
            var modalFooterButton = modalButtonTemplate.replace(
              "{{button_class}}",
              options.footerButtons[i].class
            );
            modalFooterButton = modalFooterButton.replace(
              "{{button_handler}}",
              options.footerButtons[i].handler
            );
            modalFooterButton = modalFooterButton.replace(
              "{{button_text}}",
              options.footerButtons[i].text
            );
            modalFooterHTML += modalFooterButton;
          }
          modalFooterHTML = modalFooterTemplate.replace(
            "{{buttons}}",
            modalFooterHTML
          );
        }
        modalHTML = modalHTML.replace("{{footer}}", modalFooterHTML);
        elemModal.innerHTML = modalHTML;
        document.body.appendChild(elemModal);
        return elemModal;
      }

      function _showModal() {
        if (!_destroyed && !_hiding) {
          _elemModal.classList.add("modal__show");
          document.dispatchEvent(_eventShowModal);
        }
      }

      function _hideModal() {
        _hiding = true;
        _elemModal.classList.remove("modal__show");
        _elemModal.classList.add("modal__hiding");
        setTimeout(function () {
          _elemModal.classList.remove("modal__hiding");
          _hiding = false;
        }, _animationSpeed);
        document.dispatchEvent(_eventHideModal);
      }

      function _handlerCloseModal(e) {
        if (e.target.dataset.dismiss === "modal") {
          _hideModal();
        }
      }

      _elemModal = _createModal(options || {});

      _elemModal.addEventListener("click", _handlerCloseModal);
      _eventShowModal = new CustomEvent("show.modal", { detail: _elemModal });
      _eventHideModal = new CustomEvent("hide.modal", { detail: _elemModal });

      return {
        show: _showModal,
        hide: _hideModal,
        destroy: function () {
          _elemModal.parentElement.removeChild(_elemModal),
            _elemModal.removeEventListener("click", _handlerCloseModal),
            (destroyed = true);
        },
        setContent: function (html) {
          _elemModal.querySelector('[data-modal="content"]').innerHTML = html;
        },
        setTitle: function (text) {
          _elemModal.querySelector('[data-modal="title"]').innerHTML = text;
        },
      };
    };

    const content = document.getElementById("callModalContent");
    let contentHTML = "";
    if (content) {
      contentHTML = content.innerHTML;
    }
    if (content) {
      content.remove();
    }
    var modal = $modal({
      title: "Заказать звонок",
      content: contentHTML,
    });

    const showButton = document.querySelector("#showCallModal");
    if (showButton) {
      showButton.addEventListener("click", function (e) {
        modal.show();
      });
    }

    const showButtonFromMenu = document.querySelector("#showCallModalFromMenu");
    if (showButtonFromMenu) {
      showButtonFromMenu.addEventListener("click", function (e) {
        modal.show();
      });
    }

    (function(modal){
        let $form = $(".callModalFormWrapper form");
        if ($form.length) {

          let $inputs = $form.find(":input");
          let $alertError = $('.callModalErrorAlert');
          let $alertSuccess = $('.callModalSuccessAlert');

          $form.on("submit", function () {
            let data = Object.fromEntries(new FormData($form[0]));
            data.component = "conferences";
            data.controller = "ajax";
            data.settings = "questions";
            data.action = "registration";

            $inputs.prop("disabled", true);

            $.post("/ajax/", data, function (response) {
              if (response) {
                if (response.result == "success") {
                  $alertSuccess.addClass("show");
                  setTimeout(function () {
                    $alertSuccess.removeClass("show");
                    $form[0].reset();
                    $inputs.prop("disabled", false);
                    modal.hide();
                  }, 3000);

                } else { // error
                  if (response.validate) {
                    $inputs.filter((i, input) => {
                        return response.validate[input.name] && !response.validate[input.name].is_valid;
                    }).addClass("invalid");
                  }
                  $alertError.addClass("show").children('<p>');
                  if (response.message) $alertError.html(response.message);
                  setTimeout(function () {
                    $alertError.removeClass("show");
                    $inputs.prop("disabled", false);
                  }, 3000);
                }
              }
            });
            return false;
          });
        }
    })(modal);

  })();

})();(function () {
  (function () {
    let dropdown = document.querySelectorAll(".dropdown");
    let menu_items = document.querySelectorAll(".dropdown .menu li a");
    let links = document.querySelectorAll(".dropdown h2 a");

    dropdown.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        if (item.classList.contains("closed")) {
          item.classList.remove("closed");
        }
      });

      item.addEventListener("mouseleave", (e) => {
        if (!item.classList.contains("closed")) {
          item.classList.add("closed");
        }
      });

      item.addEventListener("touchstart", (e) => {
        e.preventDefault();
        if (item.classList.contains("closed")) {
          item.classList.remove("closed");
        }
      });
    });

    menu_items.forEach((item) => {
      item.addEventListener("touchend", (e) => {
        let href = e.target.getAttribute("href");
        window.location.href = href;
      });
    });

    document.addEventListener("touchstart", (e) => {
      links.forEach((link) => {
        if (!(e.target === link)) {
          if (!link.parentNode.parentNode.classList.contains("closed")) {
            link.parentNode.parentNode.classList.add("closed");
          }
        }
      });
    });
  })();

  // PARALLAX FUNCTIONALITY
  (function () {
    function throttle(fn, wait) {
      var time = Date.now();
      return function () {
        if (time + wait - Date.now() < 0) {
          fn();
          time = Date.now();
        }
      };
    }

    function goodParallax() {
      let scrolled = window.pageYOffset;
      let wrappers = document.querySelectorAll(".parallax-wrapper");
      wrappers.forEach((wrapper) => {
        let offset = Math.abs(wrapper.offsetTop - window.innerHeight / 2);
        let objects = wrapper.querySelectorAll(".parallax-object");
        objects.forEach((object) => {
          let speed = object.dataset.speed;
          let coords = (scrolled - offset) * speed + "px";
          object.style.transform = "translateY(-" + coords + ")";
        });
      });
    }

    window.addEventListener("scroll", throttle(goodParallax, 14));
  })();

  // OWL CAROUSEL
  $(".slider-container_slide").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    singleItem: true,
    nav: false,
    dots: true,
    lazyLoad: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });

  $(".announces-carousel").each(function () {
    $(this).owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: this.dataset.owlItems || 2,
        },
      },
    });
  });

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

  // tabs

  let $tabs = $("[data-tab-name]");
  if ($tabs.length > 0) {
    let tabsRef = document.querySelectorAll("[data-tab-ref]");
    $tabs.on("click", function () {
      $tabs.removeClass("active");
      this.classList.add("active");
      tabsRef.forEach((el) => {
        el.style.display =
          this.dataset.tabName == el.dataset.tabRef ? "flex" : "none";
      });
    });
  }

  // search

  let $searchInput = $("#header-search");
  $searchInput.closest("form").on("submit", function () {
    return !!$searchInput.val();
  });
})();

//Modal script
(function () {
  (function () {
    if (typeof window.CustomEvent === "function") return false;
    function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: null };
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      return evt;
    }
    window.CustomEvent = CustomEvent;
  })();

  (function () {
    var $modal = function (options) {
      var _elemModal,
        _eventShowModal,
        _eventHideModal,
        _hiding = false,
        _destroyed = false,
        _animationSpeed = 200;

      function _createModal(options) {
        var elemModal = document.createElement("div"),
          modalTemplate =
            '<div class="modal__backdrop" data-dismiss="modal"><div class="modal__content"><div class="modal__header"><div class="modal__title" data-modal="title">{{title}}</div><span class="modal__btn-close" data-dismiss="modal" title="Р—Р°РєСЂС‹С‚СЊ">Г—</span></div><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div></div>',
          modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
          modalButtonTemplate =
            '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
          modalHTML,
          modalFooterHTML = "";

        elemModal.classList.add("modal");
        modalHTML = modalTemplate.replace(
          "{{title}}",
          options.title || "Новое окно"
        );
        modalHTML = modalHTML.replace("{{content}}", options.content || "");
        if (options.footerButtons) {
          for (
            var i = 0, length = options.footerButtons.length;
            i < length;
            i++
          ) {
            var modalFooterButton = modalButtonTemplate.replace(
              "{{button_class}}",
              options.footerButtons[i].class
            );
            modalFooterButton = modalFooterButton.replace(
              "{{button_handler}}",
              options.footerButtons[i].handler
            );
            modalFooterButton = modalFooterButton.replace(
              "{{button_text}}",
              options.footerButtons[i].text
            );
            modalFooterHTML += modalFooterButton;
          }
          modalFooterHTML = modalFooterTemplate.replace(
            "{{buttons}}",
            modalFooterHTML
          );
        }
        modalHTML = modalHTML.replace("{{footer}}", modalFooterHTML);
        elemModal.innerHTML = modalHTML;
        document.body.appendChild(elemModal);
        return elemModal;
      }

      function _showModal() {
        if (!_destroyed && !_hiding) {
          _elemModal.classList.add("modal__show");
          document.dispatchEvent(_eventShowModal);
        }
      }

      function _hideModal() {
        _hiding = true;
        _elemModal.classList.remove("modal__show");
        _elemModal.classList.add("modal__hiding");
        setTimeout(function () {
          _elemModal.classList.remove("modal__hiding");
          _hiding = false;
        }, _animationSpeed);
        document.dispatchEvent(_eventHideModal);
      }

      function _handlerCloseModal(e) {
        if (e.target.dataset.dismiss === "modal") {
          _hideModal();
        }
      }

      _elemModal = _createModal(options || {});

      _elemModal.addEventListener("click", _handlerCloseModal);
      _eventShowModal = new CustomEvent("show.modal", { detail: _elemModal });
      _eventHideModal = new CustomEvent("hide.modal", { detail: _elemModal });

      return {
        show: _showModal,
        hide: _hideModal,
        destroy: function () {
          _elemModal.parentElement.removeChild(_elemModal),
            _elemModal.removeEventListener("click", _handlerCloseModal),
            (destroyed = true);
        },
        setContent: function (html) {
          _elemModal.querySelector('[data-modal="content"]').innerHTML = html;
        },
        setTitle: function (text) {
          _elemModal.querySelector('[data-modal="title"]').innerHTML = text;
        },
      };
    };

    const content = document.getElementById("callModalContent");
    let contentHTML = "";
    if (content) {
      contentHTML = content.innerHTML;
    }
    if (content) {
      content.remove();
    }
    var modal = $modal({
      title: "Заказать звонок",
      content: contentHTML,
    });

    const showButton = document.querySelector("#showCallModal");
    if (showButton) {
      showButton.addEventListener("click", function (e) {
        modal.show();
      });
    }

    const showButtonFromMenu = document.querySelector("#showCallModalFromMenu");
    if (showButtonFromMenu) {
      showButtonFromMenu.addEventListener("click", function (e) {
        modal.show();
      });
    }

    const showButtonFromPrograms = document.querySelector("#showCallModalFromPrograms");
    if (showButtonFromPrograms) {
      showButtonFromPrograms.addEventListener("click", function (e) {
        modal.show();
      });
    }

    (function(modal){
        let $form = $(".callModalFormWrapper form");
        if ($form.length) {

          let $inputs = $form.find(":input");
          let $alertError = $('.callModalErrorAlert');
          let $alertSuccess = $('.callModalSuccessAlert');

          $form.on("submit", function () {
            let data = Object.fromEntries(new FormData($form[0]));
            data.component = "conferences";
            data.controller = "ajax";
            data.settings = "questions";
            data.action = "registration";

            $inputs.prop("disabled", true);

            $.post("/ajax/", data, function (response) {
              if (response) {
                if (response.result == "success") {
                  $alertSuccess.addClass("show");
                  setTimeout(function () {
                    $alertSuccess.removeClass("show");
                    $form[0].reset();
                    $inputs.prop("disabled", false);
                    modal.hide();
                  }, 3000);

                } else { // error
                  if (response.validate) {
                    $inputs.filter((i, input) => {
                        return response.validate[input.name] && !response.validate[input.name].is_valid;
                    }).addClass("invalid");
                  }
                  $alertError.addClass("show").children('<p>');
                  if (response.message) $alertError.html(response.message);
                  setTimeout(function () {
                    $alertError.removeClass("show");
                    $inputs.prop("disabled", false);
                  }, 3000);
                }
              }
            });
            return false;
          });
        }
    })(modal);

  })();

})();