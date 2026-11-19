(function () {
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem("nitelah.lang"); } catch (e) {}

  var lang = stored || (navigator.language && navigator.language.toLowerCase().indexOf("zh") === 0 ? "zh" : "en");
  root.setAttribute("data-lang", lang);

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".lang");
    if (!button) return;
    function paint() {
      button.textContent = root.getAttribute("data-lang") === "zh" ? "English" : "中文";
      button.setAttribute("aria-label", root.getAttribute("data-lang") === "zh" ? "Switch to English" : "切换到中文");
    }
    paint();
    button.addEventListener("click", function () {
      var next = root.getAttribute("data-lang") === "zh" ? "en" : "zh";
      root.setAttribute("data-lang", next);
      try { localStorage.setItem("nitelah.lang", next); } catch (e) {}
      paint();
    });
  });
})();
