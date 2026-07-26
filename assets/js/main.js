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

  /* ----- Lightbox: click a gallery photo to enlarge it ----- */
  (function () {
    var tr = document.documentElement.lang === "tr";
    var L = tr
      ? { zoom: "Büyüt", close: "Kapat", prev: "Önceki görsel", next: "Sonraki görsel",
          dialog: "Görsel önizleme", counter: "/" }
      : { zoom: "Enlarge", close: "Close", prev: "Previous image", next: "Next image",
          dialog: "Image viewer", counter: "/" };

    var items = [];
    var triggers = [];

    Array.prototype.forEach.call(document.querySelectorAll("#photos figure"), function (fig) {
      var img = fig.querySelector("img");
      if (!img) return;
      var cap = fig.querySelector("figcaption");
      var caption = cap ? cap.textContent.replace(/\s+/g, " ").trim() : img.alt;
      var index = items.length;
      items.push({ src: img.getAttribute("src"), alt: img.alt, caption: caption });

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "zoomable";
      btn.setAttribute("aria-label", L.zoom + (caption ? ": " + caption : ""));
      img.parentNode.insertBefore(btn, img);
      btn.appendChild(img);
      btn.addEventListener("click", function () { open(index, btn); });
      triggers.push(btn);
    });

    if (!items.length) return;

    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", L.dialog);
    box.hidden = true;
    box.innerHTML =
      '<button type="button" class="lb-btn lb-close"></button>' +
      '<button type="button" class="lb-btn lb-prev"></button>' +
      '<figure class="lb-figure"><img class="lb-img" alt=""></figure>' +
      '<button type="button" class="lb-btn lb-next"></button>';

    var closeBtn = box.querySelector(".lb-close");
    var prevBtn = box.querySelector(".lb-prev");
    var nextBtn = box.querySelector(".lb-next");
    var lbImg = box.querySelector(".lb-img");
    var lbFig = box.querySelector(".lb-figure");

    closeBtn.setAttribute("aria-label", L.close); closeBtn.textContent = "✕";
    prevBtn.setAttribute("aria-label", L.prev);   prevBtn.textContent = "‹";
    nextBtn.setAttribute("aria-label", L.next);   nextBtn.textContent = "›";

    var cap = document.createElement("figcaption");
    cap.className = "lb-caption";
    lbFig.appendChild(cap);
    document.body.appendChild(box);

    var current = 0;
    var opener = null;
    var single = items.length < 2;
    if (single) { prevBtn.hidden = true; nextBtn.hidden = true; }

    function show(i) {
      current = (i + items.length) % items.length;
      var it = items[current];
      lbImg.src = it.src;
      lbImg.alt = it.alt;
      cap.textContent = single
        ? it.caption
        : it.caption + "  (" + (current + 1) + " " + L.counter + " " + items.length + ")";
    }

    function open(i, trigger) {
      opener = trigger;
      show(i);
      box.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function close() {
      box.hidden = true;
      document.body.style.overflow = "";
      if (opener) opener.focus();
    }

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", function () { show(current - 1); });
    nextBtn.addEventListener("click", function () { show(current + 1); });
    box.addEventListener("click", function (e) {
      if (e.target === box || e.target === lbFig) close();
    });

    document.addEventListener("keydown", function (e) {
      if (box.hidden) return;
      if (e.key === "Escape") { close(); e.preventDefault(); }
      else if (e.key === "ArrowLeft" && !single) { show(current - 1); e.preventDefault(); }
      else if (e.key === "ArrowRight" && !single) { show(current + 1); e.preventDefault(); }
      else if (e.key === "Tab") {
        /* keep focus inside the dialog */
        var focusable = [closeBtn].concat(single ? [] : [prevBtn, nextBtn]);
        var at = focusable.indexOf(document.activeElement);
        var next = e.shiftKey ? at - 1 : at + 1;
        if (at === -1 || next < 0 || next >= focusable.length) {
          focusable[e.shiftKey ? focusable.length - 1 : 0].focus();
          e.preventDefault();
        }
      }
    });
  })();

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
