const { Hero, LogoStrip, StatRow, ServiceRow, SectionHeading, TestimonialCard, PackageCard, NumberedSteps, FAQAccordion, InsightCard, CTABand, Reveal, Button, PillarCard } = window.EPICDesignSystem_70c10b;

function HomeScreen({ t, go }) {
  return (
    <main>
      <Hero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead}
        primaryCta={{ label: t.cta, arrow: true, onClick: () => go('book') }}
        secondaryCta={{ label: t.explore, onClick: () => go('services') }}
        foot={<><span>{t.hero.foot1}</span><span>{t.hero.foot2}</span></>} />
      <div className="epic-container"><LogoStrip label={t.trusted} /></div>

      <section className="epic-section epic-container">
        <SectionHeading eyebrow={t.statsHead.eyebrow} title={t.statsHead.title} />
        <StatRow stats={t.stats} />
      </section>

      <section className="epic-container" style={{ paddingBottom: 'var(--section-y)' }}>
        <SectionHeading eyebrow={t.pillarsHead.eyebrow} title={t.pillarsHead.title} lead={t.pillarsHead.lead} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(72px,9vw,128px)' }}>
          {t.pillars.map((p, i) => (
            <ServiceRow key={p.id} index={p.index} eyebrow={p.eyebrow} title={p.title} tagline={p.tagline} items={p.items.slice(0, 4)}
              reverse={i % 2 === 1} mediaVariant={['fluted', 'glow-stone', 'glow-dark'][i]} cta={{ label: t.learnMore, onClick: () => go('services', p.id) }} />
          ))}
        </div>
      </section>

      <section className="epic-section" style={{ background: 'var(--stone-50)' }}>
        <div className="epic-container">
          <SectionHeading eyebrow={t.testiHead.eyebrow} title={t.testiHead.title} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {t.testimonials.map((x, i) => <Reveal key={i} delay={i * 110}><TestimonialCard {...x} variant={i === 1 ? 'dark' : 'white'} /></Reveal>)}
          </div>
        </div>
      </section>

      <section className="epic-section epic-container" id="packages">
        <Reveal><PackageCard badge={t.pkg.badge} title={t.pkg.title} description={t.pkg.desc} includes={t.pkg.includes}
          primaryCta={{ label: t.cta, arrow: true, onClick: () => go('book') }} secondaryCta={{ label: t.pkg.secondary, onClick: () => go('services') }} /></Reveal>
      </section>

      <section className="epic-container" style={{ paddingBottom: 'var(--section-y)' }}>
        <SectionHeading eyebrow={t.stepsHead.eyebrow} title={t.stepsHead.title} />
        <NumberedSteps steps={t.steps} />
      </section>

      <section className="epic-container" style={{ paddingBottom: 'var(--section-y)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 48 }}>
        <SectionHeading eyebrow={t.faqHead.eyebrow} title={t.faqHead.title} />
        <Reveal style={{ gridColumn: 'span 1' }}><FAQAccordion items={t.faq} /></Reveal>
      </section>

      <section className="epic-container" style={{ paddingBottom: 'var(--section-y)' }}>
        <SectionHeading eyebrow={t.insightsHead.eyebrow} title={t.insightsHead.title} action={<Button variant="outline" arrow onClick={() => go('insights')}>{t.insightsHead.all}</Button>} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 24 }}>
          {t.insights.slice(0, 3).map((x, i) => <Reveal key={i} delay={i * 110}><InsightCard {...x} mediaVariant={x.v} href="#insights" /></Reveal>)}
        </div>
      </section>

      <section className="epic-container" style={{ paddingBottom: 'clamp(48px,6vw,96px)' }}>
        <CTABand eyebrow={t.ctaBand.eyebrow} title={t.ctaBand.title} text={t.ctaBand.text} primaryCta={{ label: t.cta, arrow: true, onClick: () => go('book') }} />
      </section>
    </main>
  );
}
window.HomeScreen = HomeScreen;
