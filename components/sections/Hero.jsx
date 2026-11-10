import React from 'react';
import { GlowSurface } from '../brand/GlowSurface.jsx';
import { Reveal } from '../brand/Reveal.jsx';
import { Button } from '../actions/Button.jsx';

function Cta({ c, variant, size }) {
  if (!c) return null;
  return <Button variant={c.variant || variant} size={size} href={c.href} onClick={c.onClick} arrow={c.arrow}>{c.label}</Button>;
}

export function Hero({ eyebrow, title = 'License faster.\nOpen sooner.\nStart right.', lead, primaryCta, secondaryCta, variant = 'glow', align = 'start', foot, minHeight, className = '', children }) {
  const lines = String(title).split('\n');
  const dark = variant === 'glow-dark' || variant === 'black' || variant === 'blue' || variant === 'fluted';
  return (
    <GlowSurface as="section" variant={variant} className={'epic-hero' + (align === 'center' ? ' epic-hero--center' : '') + (dark ? ' epic-on-dark' : '') + (className ? ' ' + className : '')} style={minHeight ? { minHeight } : undefined}>
      <div className="epic-container">
        <div className="epic-hero__content">
          {eyebrow ? <Reveal variant="fade"><span className="epic-eyebrow">{eyebrow}</span></Reveal> : null}
          <h1 className="epic-hero__title">
            {lines.map((l, i) => <Reveal as="span" key={i} delay={120 + i * 110} style={{ display: 'block' }}>{l}</Reveal>)}
          </h1>
          {lead ? <Reveal delay={120 + lines.length * 110}><p className="epic-hero__lead">{lead}</p></Reveal> : null}
          {primaryCta || secondaryCta ? (
            <Reveal delay={220 + lines.length * 110} className="epic-hero__actions">
              <Cta c={primaryCta} variant="primary" size="lg" />
              <Cta c={secondaryCta} variant={dark ? 'light' : 'outline'} size="lg" />
            </Reveal>
          ) : null}
          {children}
        </div>
        {foot ? <Reveal variant="fade" delay={700} className="epic-hero__foot">{foot}</Reveal> : null}
      </div>
    </GlowSurface>
  );
}
