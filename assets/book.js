// 站点交互：主题切换 / 侧栏 / 当前页高亮
(function () {
  var html = document.documentElement;
  var body = document.body;
  body.classList.remove("no-js"); body.classList.add("js");
  try {
    var t = localStorage.getItem("nn-theme");
    if (t) { html.classList.remove("light"); html.classList.add(t); }
  } catch (e) {}
  var btn = document.getElementById("theme-toggle");
  var list = document.getElementById("theme-list");
  if (btn && list) {
    btn.addEventListener("click", function (e) { e.stopPropagation(); list.classList.toggle("visible"); });
    list.querySelectorAll("button.theme").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.id;
        html.classList.remove("light", "rust", "coal", "navy", "ayu");
        html.classList.add(id);
        try { localStorage.setItem("nn-theme", id); } catch (e) {}
        list.classList.remove("visible");
      });
    });
    document.addEventListener("click", function () { list.classList.remove("visible"); });
  }
  var anchor = document.getElementById("sidebar-toggle-anchor");
  if (anchor) {
    try { var s = localStorage.getItem("nn-sidebar"); if (s === "hidden") anchor.checked = false; } catch (e) {}
    anchor.addEventListener("change", function () {
      try { localStorage.setItem("nn-sidebar", anchor.checked ? "visible" : "hidden"); } catch (e) {}
    });
  }
  var active = document.querySelector("#sidebar .active");
  if (active) active.scrollIntoView({ block: "center" });
})();
