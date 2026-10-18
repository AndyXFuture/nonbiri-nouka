(function () {
  var html = document.documentElement, body = document.body;
  var KNOWN = ["light", "rust", "coal", "navy", "ayu"];
  body.classList.remove("no-js"); body.classList.add("js");
  [].slice.call(html.classList).forEach(function (c) { if (KNOWN.indexOf(c) < 0 && c !== "js") html.classList.remove(c); });
  if (!html.classList.length) html.classList.add("light");
  try {
    var t = localStorage.getItem("nn-theme");
    if (t === "dark") t = "navy";
    if (t && KNOWN.indexOf(t) >= 0) { KNOWN.forEach(function (k) { html.classList.remove(k); }); html.classList.add(t); }
  } catch (e) {}
  var btn = document.getElementById("theme-toggle"), list = document.getElementById("theme-list");
  if (btn && list) {
    btn.addEventListener("click", function (e) { e.stopPropagation(); list.classList.toggle("visible"); });
    [].slice.call(list.querySelectorAll("button.theme")).forEach(function (b) {
      b.addEventListener("click", function () {
        KNOWN.forEach(function (k) { html.classList.remove(k); });
        html.classList.add(b.id);
        try { localStorage.setItem("nn-theme", b.id); } catch (e) {}
        list.classList.remove("visible");
      });
    });
    document.addEventListener("click", function () { list.classList.remove("visible"); });
  }
  var anchor = document.getElementById("sidebar-toggle-anchor");
  if (anchor) {
    var saved = null; try { saved = localStorage.getItem("nn-sidebar"); } catch (e) {}
    if (saved === "hidden") anchor.checked = false;
    else if (saved === "visible") anchor.checked = true;
    else anchor.checked = window.innerWidth > 900;
    anchor.addEventListener("change", function () { try { localStorage.setItem("nn-sidebar", anchor.checked ? "visible" : "hidden"); } catch (e) {} });
  }
  var active = document.querySelector("#sidebar .active");
  if (active) active.scrollIntoView({ block: "center" });
})();
