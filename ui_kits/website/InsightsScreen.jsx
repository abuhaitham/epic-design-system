const { Tabs: InTabs, InsightCard: InCard, SectionHeading: InHead, CTABand: InCTA, Reveal: InReveal, Badge: InBadge, GlowSurface: InGlow } = window.EPICDesignSystem_70c10b;

function InsightsScreen({ t, go }) {
  const [cat, setCat] = React.useState('all');
  const list = t.insights.filter((x) => cat === 'all' || x.category === cat);
  const lead = t.insights[0];
  return (
    <main style={{ paddingTop: 'calc(var(--header-h) + clamp(40px,6vw,88px))' }}>
      <section className="epic-container">
        <InHead eyebrow={t.insightsHead.eyebrow} title={t.insightsHead.title} />
        <InReveal>
          <a href="#insights" className="epic-insight" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(24px,4vw,64px)', alignItems: 'center', marginBottom: 'clamp(56px,7vw,104px)' }}>
            <div className="epic-insight__media" style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-xl)' }}><InGlow variant="glow" /></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="epic-insight__meta"><InBadge variant="solid">{lead.category}</InBadge><span>{lead.date}</span><span>· {lead.readTime}</span></div>
              <div><h2 className="epic-insight__title" style={{ fontSize: 'var(--text-h2)', lineHeight: 1.08, letterSpacing: 'var(--tracking-heading)' }}>{lead.title}</h2></div>
              <p className="epic-lead">{lead.excerpt}</p>
            </div>
          </a>
        </InReveal>
        <div style={{ marginBottom: 40 }}><InTabs items={t.cats} value={cat} onChange={setCat} /></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '48px 24px' }}>
          {list.map((x, i) => <InReveal key={x.title} delay={(i % 3) * 100}><InCard {...x} mediaVariant={x.v} href="#insights" /></InReveal>)}
        </div>
      </section>
      <section className="epic-container" style={{ paddingBlock: 'var(--section-y) clamp(48px,6vw,96px)' }}>
        <InCTA variant="glow" eyebrow={t.ctaBand.eyebrow} title={t.ctaBand.title} text={t.ctaBand.text} primaryCta={{ label: t.cta, arrow: true, onClick: () => go('book') }} />
      </section>
    </main>
  );
}
window.InsightsScreen = InsightsScreen;
