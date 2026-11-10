import React from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Button } from '../actions/Button.jsx';

const DEFAULT_COLUMNS = [
  { heading: 'Services', links: [{ label: 'Setup', href: '#setup' }, { label: 'Compliance', href: '#compliance' }, { label: 'Growth', href: '#growth' }, { label: 'SCG Package', href: '#packages' }] },
  { heading: 'Company', links: [{ label: 'About EPIC', href: '#about' }, { label: 'Team', href: '#team' }, { label: 'Insights', href: '#insights' }, { label: 'Careers', href: '#careers' }] },
  { heading: 'Contact', links: [{ label: 'Riyadh, Saudi Arabia', href: '#map' }, { label: 'hello@epic.sa', href: 'mailto:hello@epic.sa' }, { label: 'WhatsApp', href: '#whatsapp' }, { label: 'LinkedIn', href: '#linkedin' }] },
];

export function Footer({
  columns = DEFAULT_COLUMNS,
  blurb = 'The back office for education businesses in Saudi Arabia. From licence to launch to scale.',
  newsletter = true, newsletterLabel = 'Insights, monthly', newsletterPlaceholder = 'Your email', newsletterCta = 'Subscribe',
  disclaimer = 'EPIC is not a law firm. Information on this site is general guidance on education licensing and operations in the Kingdom of Saudi Arabia and is not legal advice.',
  copyright = '© 2026 EPIC — Education Platform Investing Company. Formerly Advanced Quantum Holding.',
  legal = [{ label: 'Privacy', href: '#privacy' }, { label: 'Terms', href: '#terms' }, { label: 'PDPL notice', href: '#pdpl' }],
  bigWordmark = true, className = '',
}) {
  return (
    <footer className={'epic-footer epic-on-dark' + (className ? ' ' + className : '')}>
      <div className="epic-container">
        <div className="epic-footer__top">
          <div className="epic-footer__brand">
            <Logo color="white" markColor="blue" size={34} className="epic-footer__logo" />
            <p className="epic-footer__blurb">{blurb}</p>
            {newsletter ? (
              <form className="epic-field" onSubmit={(e) => e.preventDefault()}>
                <span className="epic-footer__heading">{newsletterLabel}</span>
                <div className="epic-footer__news">
                  <input className="epic-input epic-input--dark" type="email" placeholder={newsletterPlaceholder} aria-label={newsletterPlaceholder} />
                  <Button variant="light" type="submit" style={{ height: 52 }}>{newsletterCta}</Button>
                </div>
              </form>
            ) : null}
          </div>
          {columns.map((c) => (
            <div key={c.heading} className="epic-footer__col">
              <span className="epic-footer__heading">{c.heading}</span>
              {c.links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
            </div>
          ))}
        </div>
        {bigWordmark ? <div className="epic-footer__wordmark" aria-hidden="true">EPIC</div> : null}
        <div className="epic-footer__bottom">
          <div className="epic-footer__disclaimer"><p>{copyright}</p><p>{disclaimer}</p></div>
          <nav className="epic-footer__legal">{legal.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}</nav>
        </div>
      </div>
    </footer>
  );
}
