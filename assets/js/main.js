/* Toros UAS website — navigation + client-side site search.
   Plain JS, no dependencies; works from file:// and any static host. */
(function () {
  "use strict";

  /* ----- Footer year ----- */
  var yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ----- Mobile navigation toggle ----- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ----- Site search (index lives in search-index.js) ----- */
  var input = document.getElementById("site-search-input");
  var list = document.getElementById("search-results");
  var status = document.getElementById("search-status");
  var INDEX = window.SEARCH_INDEX || [];

  if (!input || !list) return;

  function scoreEntry(entry, terms) {
    var title = entry.title.toLowerCase();
    var page = entry.page.toLowerCase();
    var text = entry.text.toLowerCase();
    var score = 0;
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i];
      var hit = false;
      if (title.indexOf(t) !== -1) { score += 4; hit = true; }
      if (page.indexOf(t) !== -1)  { score += 2; hit = true; }
      if (text.indexOf(t) !== -1)  { score += 1; hit = true; }
      if (!hit) return 0; /* every term must match somewhere */
    }
    return score;
  }

  function search(query) {
    var terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    var results = [];
    for (var i = 0; i < INDEX.length; i++) {
      var s = scoreEntry(INDEX[i], terms);
      if (s > 0) results.push({ entry: INDEX[i], score: s });
    }
    results.sort(function (a, b) { return b.score - a.score; });
    return results.slice(0, 8).map(function (r) { return r.entry; });
  }

  function clearResults() {
    list.hidden = true;
    list.textContent = "";
    if (status) status.textContent = "";
  }

  function render(results, query) {
    list.textContent = "";
    if (!results.length) {
      var li = document.createElement("li");
      li.className = "sr-empty";
      li.textContent = "No results for “" + query + "”.";
      list.appendChild(li);
    } else {
      results.forEach(function (entry) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.href = entry.url;
        var title = document.createElement("span");
        title.className = "sr-title";
        title.textContent = entry.title;
        var meta = document.createElement("span");
        meta.className = "sr-meta";
        meta.textContent = entry.page + " · " + entry.text.slice(0, 92) + "…";
        a.appendChild(title);
        a.appendChild(meta);
        li.appendChild(a);
        list.appendChild(li);
      });
    }
    list.hidden = false;
    if (status) {
      status.textContent = results.length + " result" + (results.length === 1 ? "" : "s") +
        " for “" + query + "”";
    }
  }

  var current = [];

  input.addEventListener("input", function () {
    var q = input.value.trim();
    if (q.length < 2) { current = []; clearResults(); return; }
    current = search(q);
    render(current, q);
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { input.value = ""; clearResults(); return; }
    if (e.key === "Enter" && current.length) {
      window.location.href = current[0].url;
      e.preventDefault();
      return;
    }
    if (e.key === "ArrowDown" && !list.hidden) {
      var first = list.querySelector("a");
      if (first) { first.focus(); e.preventDefault(); }
    }
  });

  list.addEventListener("keydown", function (e) {
    var links = Array.prototype.slice.call(list.querySelectorAll("a"));
    var idx = links.indexOf(document.activeElement);
    if (e.key === "ArrowDown" && idx > -1 && idx < links.length - 1) {
      links[idx + 1].focus(); e.preventDefault();
    } else if (e.key === "ArrowUp") {
      if (idx > 0) { links[idx - 1].focus(); } else { input.focus(); }
      e.preventDefault();
    } else if (e.key === "Escape") {
      clearResults(); input.focus();
    }
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".site-search")) clearResults();
  });
})();
