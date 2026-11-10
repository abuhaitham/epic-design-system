import React from 'react';
import { GlowSurface } from '../brand/GlowSurface.jsx';
import { Reveal } from '../brand/Reveal.jsx';
import { Button } from '../actions/Button.jsx';

export function CTABand({ eyebrow = 'Make this real', title = 'Ready to open your school?', text, primaryCta = { label: 'Book a discovery call', arrow: true }, secondaryCta, variant = 'glow-dark', flush = false, className = '', children }) {
  const dark = variant !== 'glow-stone' && variant !== 'stone' && variant !== 'glow';
  return (
    <GlowSurface as="section" variant={variant} className={'epic-cta' + (flush ? ' epic-cta--flush' : '') + (dark ? ' epic-on-dark' : '') + (className ? ' ' + className : '')}>
      <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        {eyebrow ? <span className="epic-eyebrow epic-cta__eyebrow">{eyebrow}</span> : null}
        <h2 className="epic-cta__title">{title}</h2>
        {text ? <p className="epic-cta__text">{text}</p> : null}
        <div className="epic-cta__actions">
          {primaryCta ? <Button variant={primaryCta.variant || (dark ? 'light' : 'primary')} size="lg" href={primaryCta.href} onClick={primaryCta.onClick} arrow={primaryCta.arrow}>{primaryCta.label}</Button> : null}
          {secondaryCta ? <Button variant={secondaryCta.variant || 'outline'} size="lg" href={secondaryCta.href} onClick={secondaryCta.onClick}>{secondaryCta.label}</Button> : null}
          {children}
        </div>
      </Reveal>
    </GlowSurface>
  );
}
