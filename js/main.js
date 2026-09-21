(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* Active anchor-nav link on scroll */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".anchor-nav a"));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href").replace("#", "");
      return document.getElementById(id);
    })
    .filter(Boolean);

  function setActiveLink() {
    var scrollPos = window.scrollY + 160;
    var current = null;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos) current = sec;
    });
    navLinks.forEach(function (link) {
      var match = current && link.getAttribute("href") === "#" + current.id;
      link.classList.toggle("is-active", !!match);
    });
  }

  if (sections.length) {
    window.addEventListener("scroll", debounce(setActiveLink, 80), { passive: true });
    setActiveLink();
  }

  function debounce(fn, wait) {
    var t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, wait);
    };
  }

  /* Keep the active anchor-nav pill scrolled into view on mobile */
  function scrollNavIntoView() {
    var active = document.querySelector(".anchor-nav a.is-active");
    var nav = document.querySelector(".anchor-nav");
    if (!active || !nav) return;
    var navRect = nav.getBoundingClientRect();
    var linkRect = active.getBoundingClientRect();
    if (linkRect.left < navRect.left || linkRect.right > navRect.right) {
      nav.scrollTo({
        left: nav.scrollLeft + (linkRect.left - navRect.left) - 20,
        behavior: reduceMotion ? "auto" : "smooth"
      });
    }
  }
  window.addEventListener("scroll", debounce(scrollNavIntoView, 150), { passive: true });
})();
