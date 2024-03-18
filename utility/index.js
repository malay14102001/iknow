export const iKnowUtilits = {
  dataImage() {
    let d = document.querySelectorAll("[data-img-url");
    for (let i = 0; i < d.length; i++) {
      const element = d[i];
      element.style.backgroundImage = `url(${element.getAttribute(
        "data-img-url"
      )})`;
    }
  },
  preloader() {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    let preloader = document.getElementById("preloader");

    if (preloader) {
      if (!isMobile) {
        setTimeout(function () {
          preloader.classList.add("preloaded");
        }, 800);
        setTimeout(function () {
          preloader.remove();
        }, 2000);
      } else {
        preloader.remove();
      }
    }

    setTimeout(() => {
      document.querySelector("body").classList.add("opened");
    }, 3000);
  },
  customCursor() {
    var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
      pointer = document.querySelector(".cursor-pointer"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

    function mouseEvent(element) {
      element.addEventListener("mouseenter", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
      });
      element.addEventListener("mouseleave", function () {
        e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
      });
    }

    if (myCursor.length) {
      if (document.body) {
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          // console.log(document.querySelector(this));
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          document.body.addEventListener(
            "mouseenter",
            // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function () {
              let a = document.querySelectorAll("a");
              e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

              for (let i = 0; i < a.length; i++) {
                const element = a[i];
                mouseEvent(element);
              }

              hamburger && mouseEvent(hamburger);
              kura_tm_topbar && mouseEvent(kura_tm_topbar);
              pointer && mouseEvent(pointer);
            }
          ),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  },
  imgToSVG() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");

      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");

          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  scrollSection() {
    const sections = document.querySelectorAll(".section_container");
    const navLi = document.querySelectorAll(".anchor_nav li");
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      if (current !== null) {
        li.classList.remove("current");
      }
      if (
        li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
      ) {
        li.classList.add("current");
      }
    });
  },
  menuHoverEffect() {
    const mainMenus = document.querySelectorAll(".main_menu li");
    mainMenus.forEach((menu) => {
      menu.addEventListener("mouseenter", () => {
        menu.classList.add("entered");
        const width =
          menu.getElementsByTagName("span")[0].offsetWidth + menu.offsetWidth;
        menu.style.width = `${width}px`;
      });
      menu.addEventListener("mouseleave", () => {
        menu.classList.remove("entered");
        menu.style.width = `135px`;
      });
    });
  },
  accordionToggle() {
    let slideUp = (target, duration = 500) => {
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.boxSizing = "border-box";
      target.style.height = target.offsetHeight + "px";
      target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      window.setTimeout(() => {
        target.style.display = "none";
        target.style.removeProperty("height");
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
        //alert("!");
      }, duration);
    };

    let slideDown = (target, duration = 500) => {
      target.style.removeProperty("display");
      let display = window.getComputedStyle(target).display;

      if (display === "none") display = "block";

      target.style.display = display;
      let height = target.offsetHeight;
      target.style.overflow = "hidden";
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
      target.offsetHeight;
      target.style.boxSizing = "border-box";
      target.style.transitionProperty = "height, margin, padding";
      target.style.transitionDuration = duration + "ms";
      target.style.height = height + "px";
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      window.setTimeout(() => {
        target.style.removeProperty("height");
        target.style.removeProperty("overflow");
        target.style.removeProperty("transition-duration");
        target.style.removeProperty("transition-property");
      }, duration);
    };
    let speedAnimation = 400;

    const unorderest_li = document.querySelectorAll(".unorderest_li");
    const aLinks = document.querySelectorAll(
      ".unorderest_li a.iknow_tm_full_link.tab_btn"
    );
    for (let i = 0; i < aLinks.length; i++) {
      const link = aLinks[i];
      link.onclick = function () {
        const element = link.parentElement.parentElement;
        var c = 0;
        while (c < unorderest_li.length) {
          if (unorderest_li[c] !== element) {
            unorderest_li[c].classList.remove("opened");
            slideUp(
              unorderest_li[c].getElementsByClassName("details_wrapper")[0],
              speedAnimation
            );
          }
          c++;
        }
        element.classList.toggle("opened");
        slideToggle(
          element.getElementsByClassName("details_wrapper")[0],
          speedAnimation
        );
      };
    }

    function slideToggle(target, duration) {
      if (window.getComputedStyle(target).display === "none") {
        slideDown(target, duration);
      } else {
        slideUp(target, duration);
      }
    }
  },
  menuTransition() {
    var ccc = document.querySelectorAll(".iknow_tm_sidebar_2 .ccc");
    var element = document.querySelector(".iknow_tm_sidebar_2 .active a");
    var menuLinks = document.querySelectorAll(".iknow_tm_sidebar_2 .menu a");

    function currentLink2(ccc, e) {
      if (!e) return false;
      var left = e.getBoundingClientRect().top;
      var width = e.offsetWidth;
      var menu = document.querySelector(".iknow_tm_sidebar_2 .menu");
      var menuTop = menu.getBoundingClientRect().top;
      e.parentElement.classList.remove("mleave");
      var siblings = Array.from(e.parentElement.parentElement.children).filter(
        function (el) {
          return el !== e.parentElement;
        }
      );
      siblings.forEach(function (sibling) {
        sibling.classList.add("mleave");
      });
      ccc.forEach(function (cccElement) {
        cccElement.style.top = left - menuTop + "px";
      });
    }

    menuLinks.forEach(function (menuLink) {
      menuLink.addEventListener("mouseenter", function () {
        var e = this;
        currentLink2(ccc, e);
      });
    });

    var menu = document.querySelector(".iknow_tm_sidebar_2 .menu");
    menu.addEventListener("mouseleave", function () {
      element = document.querySelector(".iknow_tm_sidebar_2 .menu .active a");
      currentLink2(ccc, element);
      var siblings = Array.from(this.children).filter(function (child) {
        return child !== element.parentElement;
      });
      siblings.forEach(function (sibling) {
        sibling.classList.remove("mleave");
      });
    });

    currentLink2(ccc, element);
  },
  maryMenuTransition() {
    var ccc = document.querySelector(".iknow_tm_topbar .wrapper .menu .ccc");
    var elements = document.querySelectorAll(
      ".iknow_tm_topbar .wrapper .menu a"
    );
    var element = document.querySelector(
      ".iknow_tm_topbar .wrapper .menu .active a"
    );

    elements.forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        var e = el;
        currentLink(ccc, e);
      });
    });

    var menu = document.querySelector(".iknow_tm_topbar .wrapper .menu");
    menu.addEventListener("mouseleave", function () {
      currentLink(ccc, element);

      var siblings = document.querySelectorAll(
        ".iknow_tm_topbar .wrapper .menu li"
      );
      siblings.forEach(function (sibling) {
        sibling.classList.remove("mleave");
      });
    });

    currentLink(ccc, element);

    function currentLink(ccc, e) {
      if (!e) {
        return false;
      }
      var left = e.getBoundingClientRect().left;
      var width = e.offsetWidth;
      var menuLeft = document
        .querySelector(".iknow_tm_topbar .wrapper .menu")
        .getBoundingClientRect().left;

      e.parentNode.classList.remove("mleave");

      var siblings = document.querySelectorAll(
        ".iknow_tm_topbar .wrapper .menu li"
      );
      siblings.forEach(function (sibling) {
        sibling.classList.add("mleave");
      });

      ccc.style.left = left - menuLeft + "px";
      ccc.style.width = width + "px";
    }
  },
};
