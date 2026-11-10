Pill-shaped call to action; use `primary` (Royal Blue) for the single main action per view, `dark`/`outline` for secondary, `link` for inline "Learn more".

```jsx
<Button variant="primary" arrow>Book a discovery call</Button>
<Button variant="outline">Explore services</Button>
<Button variant="link" arrow href="#setup">Learn more</Button>
<Button variant="light" size="lg">Talk to us</Button>   {/* on dark / glow */}
```

Sizes sm/md/lg (40/48/56px). Press = scale(.97). Wrap in `.epic-on-dark` so `outline` hovers to white.
