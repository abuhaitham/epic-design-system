"""Generate index.html (the GitHub Pages hub) from hub.template.html and the @dsCard markers."""
import re, json, pathlib, html

root = pathlib.Path(__file__).resolve().parent
files = sorted(root.glob("guidelines/*.html")) + sorted(root.glob("components/*/*.card.html")) + list(root.glob("brand_board/*.html"))
marker = re.compile(r"@dsCard\s+(.*?)-->", re.S)
attr = re.compile(r'(\w+)="([^"]*)"')
TITLES = {
    "Colors": "Mostly neutral. One Royal Blue moment.",
    "Type": "GC Gatuzo, tight and composed.",
    "Spacing": "4px base, 80–144px section rhythm.",
    "Brand": "The mark, the glow, the texture.",
    "Components": "Every primitive the site is built from.",
}
cards = []
for f in files:
    head = f.read_text(encoding="utf-8", errors="ignore")[:600]
    m = marker.search(head)
    if not m:
        continue
    a = dict(attr.findall(m.group(1)))
    w, h = a.get("viewport", "700x200").split("x")
    cards.append(dict(group=a["group"], name=a["name"], subtitle=a.get("subtitle", ""), w=int(w), h=int(h), href=f.relative_to(root).as_posix()))

order = ["Colors", "Type", "Spacing", "Brand", "Components"]
groups = {g: [c for c in cards if c["group"] == g] for g in order}


def tile(c):
    href = html.escape(c["href"])
    return (
        f'<a class="tile" href="{href}" style="--vw:{c["w"]};--vh:{c["h"]}">'
        f'<div class="frame"><iframe loading="lazy" src="{href}" width="{c["w"]}" height="{c["h"]}" tabindex="-1" title="{html.escape(c["name"])}"></iframe></div>'
        f'<div class="meta"><b>{html.escape(c["name"])}</b><span>{html.escape(c["subtitle"])}</span></div></a>\n'
    )


sections = ""
for i, g in enumerate(order, 2):
    items = "".join(tile(c) for c in groups[g])
    sections += (
        f'<section class="epic-section" id="{g.lower()}"><div class="epic-container">\n'
        f'<div class="epic-section-head"><div class="epic-section-head__text"><div class="epic-eyebrow epic-section-head__eyebrow">{i:02d} · {g}</div>'
        f'<h2 class="epic-section-head__title">{TITLES[g]}</h2></div><div class="count">{len(groups[g])} cards</div></div>\n'
        f'<div class="grid">\n{items}</div></div></section>\n\n'
    )

tpl = (root / "hub.template.html").read_text(encoding="utf-8")
(root / "index.html").write_text(tpl.replace("<!--SECTIONS-->", sections), encoding="utf-8")
print(json.dumps({g: len(v) for g, v in groups.items()}))
