# EPIC marketing website (UI kit)

Interactive recreation of the EPIC marketing site, modelled on the titan.com layout from the brief.

- `index.html`: app shell; header nav switches screens, EN/العربية toggle flips `dir` and copy; state persists in localStorage.
- `HomeScreen.jsx`: hero → logo strip → stats → Setup/Compliance/Growth service rows → testimonials → SCG package → journey steps → FAQ → insights → CTA band
- `ServicesScreen.jsx`: glow-stone hero, pillar cards + tabs driving a service row, team grid, fluted CTA
- `InsightsScreen.jsx`: featured article, category tabs, insight grid, glow CTA
- `BookScreen.jsx`: discovery-call form with validation and success state
- `copy.js`: all EN + AR strings

All UI comes from the design-system bundle. Content (clients, quotes, team, articles) is placeholder.
