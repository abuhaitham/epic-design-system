const { Hero: SvHero, Tabs: SvTabs, ServiceRow: SvRow, PillarCard: SvPillar, SectionHeading: SvHead, TeamCard: SvTeam, CTABand: SvCTA, Reveal: SvReveal } = window.EPICDesignSystem_70c10b;

function ServicesScreen({ t, go, pillar, setPillar }) {
  const active = t.pillars.find((p) => p.id === pillar) || t.pillars[0];
  const idx = t.pillars.indexOf(active);
  return (
    <main>
      <SvHero variant="glow-stone" minHeight={620} eyebrow={t.services.eyebrow} title={t.services.title} lead={t.services.lead} />
      <section className="epic-container" style={{ paddingBlock: 'clamp(48px,6vw,80px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
          {t.pillars.map((p, i) => (
            <SvReveal key={p.id} delay={i * 110}>
              <SvPillar index={p.index} title={p.eyebrow} tagline={p.title} tags={p.tags} variant={p.id === active.id ? 'blue' : 'white'}
                onClick={(e) => { e.preventDefault(); setPillar(p.id); }} />
            </SvReveal>
          ))}
        </div>
      </section>
      <section className="epic-container" style={{ paddingBottom: 'var(--section-y)' }}>
        <div style={{ marginBottom: 56 }}>
          <SvTabs items={t.pillars.map((p) => ({ id: p.id, label: p.eyebrow }))} value={active.id} onChange={setPillar} />
        </div>
        <SvRow key={active.id + t.cta} index={active.index} eyebrow={active.eyebrow} title={active.title} tagline={active.tagline} items={active.items}
          mediaVariant={['fluted', 'glow-stone', 'glow-dark'][idx]} cta={{ label: t.cta, variant: 'primary', onClick: () => go('book') }} />
      </section>
      <section className="epic-section" style={{ background: 'var(--stone-50)' }}>
        <div className="epic-container">
          <SvHead eyebrow={t.teamHead.eyebrow} title={t.teamHead.title} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24 }}>
            {t.team.map((m, i) => <SvReveal key={m.name} delay={i * 90}><SvTeam {...m} linkedin="#" /></SvReveal>)}
          </div>
        </div>
      </section>
      <section className="epic-container" style={{ paddingBlock: 'clamp(48px,6vw,96px)' }}>
        <SvCTA variant="fluted" eyebrow={t.ctaBand.eyebrow} title={t.pillars[1].title} text={t.ctaBand.text} primaryCta={{ label: t.cta, arrow: true, onClick: () => go('book') }} />
      </section>
    </main>
  );
}
window.ServicesScreen = ServicesScreen;
