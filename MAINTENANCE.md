# Muninn UAV — Team Website (SUAS deliverable 2.4)

Static, dependency-free team website for the RoboNation **SUAS 2026** competition.
Plain HTML + CSS + vanilla JS — no build step, no frameworks, no trackers.
Open `index.html` in a browser and it works; host it anywhere that serves files.

Team: **Muninn UAV** (Yazgit Community, Konya Technical University) · Vehicle: **GöğeBakan** — HSVTOL tail-sitter
(PX4 + ROS 2 · custom YOLOv8s · SLAM · visual servoing · custom PyQt5 GCS).

## Pages

| File | Content | SUAS 2.4 requirement it serves |
|---|---|---|
| `index.html` | Hero (flight-video slot), mission intro, SUAS tasks, stats, latest news, sponsor strip | first impression, prioritization of key content |
| `team.html` | Yazgit story, subteams, member roster, advisor, contact, recruiting | team name, members, contact information |
| `vehicle.html` | Systems overview, mission design points, flight regimes, Plan A profiling, avionics, autonomy, safety, **design decision log** | vehicle documentation, design decisions |
| `journey.html` | Validation ladder, dated **build log (blog)**, component→system test program, procedures, video slots | historical record, procedures, instructional media |
| `media.html` | Photo gallery + video slots | vehicle photos/videos, supporting media |
| `sponsors.html` | Sponsor logos, tiers, in-kind support, CTA | list of sponsors with logos |

Languages: **English is the primary, judge-facing site** (SUAS 2.4 requires
English); a full Turkish mirror lives in `tr/` with an EN⇄TR toggle in the
header. When you edit an English page, mirror the change in `tr/` and, if it
changes sections, in `assets/js/search-index-tr.js`.

Gallery photos open in a keyboard-accessible lightbox (Esc closes, arrows
navigate) — any `<figure><img>` inside `#photos` is picked up automatically.

Site-wide: sticky nav, **client-side search** (`assets/js/search-index.js` +
`assets/js/main.js`), skip-link, semantic landmarks, ARIA labels, alt text
everywhere, WCAG-AA contrast, keyboard operability, `prefers-reduced-motion`
support, responsive/mobile layout, works in Chrome/Firefox/Safari/Edge.

## 📦 Media status

| File (in `assets/media/`) | Status |
|---|---|
| `WhatsApp Video 2026-07-11 at 16.45.33.mp4` | ✅ wired — homepage hero (autoplays), journey & media video embeds |
| `Screenshot from 2026-07-26 10-34-26.png` | ✅ wired — media gallery (digital twin figure) |
| Gazebo mission screencast | ⏳ not uploaded yet — a reserved slot waits in journey/media video sections |
| `unnamed.jpg` (in `assets/img/`) | ✅ official TÜBİTAK logo — sponsor sections (EN + TR) |

Palette: red / black / grey / white (team colors) — tokens at the top of
`assets/css/style.css`.

Team logos: the real Muninn logos are integrated —
`assets/img/WhatsApp Image 2026-07-10 at 11.17.12.jpeg` (white-on-black; used in
the header, footer and favicon) and `…11.16.16.jpeg` (black-on-light; kept for
light backgrounds such as apparel or documents). The drawn SVG fallbacks
(`logo.svg`, `logo-mark.svg`, `favicon.svg`) remain in the repo but are unused.

## ⚠️ Remaining placeholders to replace

| What | Current placeholder value | Where |
|---|---|---|
| Physical specs | "Airframe data sheet — in preparation" row | `vehicle.html#specs` — fill wingspan/MTOW/speeds when frozen |
| Build-log periods | season-level labels (Winter 2025–26, Spring 2026) | `journey.html#log` — replace with real dates if you want day precision |
| Sponsor logos | 3 "YOUR LOGO HERE" SVGs | `assets/img/sponsor-*.svg` |
| Photos | 5 SVG image slots (`assets/img/ph-*.svg`) | `media.html` — replace files with real photos |

After replacing member names or section titles, update the matching entries in
`assets/js/search-index.js` so site search stays truthful.

## Local preview

Just open `website/index.html` in a browser (search works from `file://` too),
or serve the folder:

```bash
cd website && python3 -m http.server 8000
# → http://localhost:8000
```

## Deploying to GitHub Pages

A workflow at `.github/workflows/deploy-website.yml` publishes **only this
folder** (vault notes are never uploaded):

1. Repo **Settings → Pages → Source: GitHub Actions**. (On a free GitHub plan
   the repository must be public.)
2. Merge/push `website/` changes to the default branch — or run the workflow
   manually from the Actions tab (`workflow_dispatch`).
3. The site appears at `https://<user>.github.io/<repo>/`.

Any other static host (Netlify, Vercel, university server) also works: upload
the contents of `website/`, done.

## Editing notes

- Header/footer are plain HTML repeated on each page (no build step). If you
  change nav or footer, change it on all 6 pages — they are identical blocks.
- Colors/typography live in CSS variables at the top of `assets/css/style.css`.
- Keep the accessibility features intact when editing: heading order, alt
  texts, `aria-current` on the active nav link, one `<h1>` per page.
