Top-of-page header for every EPIC marketing page; place once, above the hero.

```jsx
<SiteHeader overlay tone="dark" hideOnScroll lang={lang} onLangToggle={() => setLang(lang === 'en' ? 'ar' : 'en')} />
<SiteHeader lang="ar" links={[{label:'الخدمات',href:'#services'}]} loginLabel="دخول العملاء" ctaLabel="احجز مكالمة تعريفية" />
```

Set `dir="rtl"` on a parent for Arabic — the layout mirrors, the logo does not.
