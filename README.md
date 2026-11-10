<img src="assets/logo/epic-mark-royal-blue.svg" width="64" height="64" alt="">

# EPIC Design System

Design system and marketing-site preview for **EPIC — Education Platform Investing Company**.

**Live preview:** https://abuhaitham.github.io/epic-design-system/

| Page | Path |
| --- | --- |
| Hub (all spec cards, live) | `index.html` |
| Marketing website (EN / AR) | `ui_kits/website/index.html` |
| Brand identity board | `brand_board/Brand Identity Board.html` |
| Foundations (colour, type, spacing, brand) | `guidelines/*.html` |
| Component cards | `components/*/*.card.html` |

## Use it

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<!-- window.EPICDesignSystem_70c10b exposes every React component -->
```

- `tokens/` holds every CSS variable and all `.epic-*` classes.
- `components/` holds the React source, types and usage notes per primitive.
- `DESIGN.md` is the system readme: voice, visual foundations, iconography, caveats.
- `SKILL.md` lets an AI agent load this repo as a brand skill.

## Develop

The site is static. Serve the repo root and open `index.html`:

```sh
python -m http.server 8731
```

After adding or renaming a spec card, regenerate the hub:

```sh
python _build_hub.py
```

`.nojekyll` is required: GitHub Pages would otherwise skip `_ds_bundle.js`.

## Caveats

- Fonts are **GC Gatuzo Demo**. Production needs the licensed build.
- Client logos, testimonials, team names and insight titles are placeholders.
- EPIC is not a law firm.
