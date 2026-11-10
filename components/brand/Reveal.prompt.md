Wrap any block to fade it up as it enters the viewport — the default motion for every section on EPIC marketing pages.

```jsx
<Reveal><SectionHeading title="Three pillars." /></Reveal>
{items.map((it, i) => <Reveal key={i} delay={i * 90}><PillarCard {...it} /></Reveal>)}
```

Variants: up (default), fade, scale. Respects prefers-reduced-motion.
