import React, { useEffect, useState } from 'react';
import { Logo } from '../brand/Logo.jsx';
import { Icon } from '../brand/Icon.jsx';
import { Button } from '../actions/Button.jsx';

const DEFAULT_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
];

export function SiteHeader({
  links = DEFAULT_LINKS, lang = 'en', onLangToggle, loginLabel = 'Client login', loginHref = '#login',
  ctaLabel = 'Book a discovery call', ctaHref, onCtaClick, tone = 'light', overlay = false, hideOnScroll = false,
  scrolled: forceScrolled, className = '', onNavigate,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (hideOnScroll) setHidden(y > 400 && y > last && !open);
      last = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hideOnScroll, open]);
  const isScrolled = forceScrolled ?? scrolled;
  const cls = ['epic-header', overlay ? 'epic-header--overlay' : '', tone === 'dark' ? 'epic-header--on-dark' : '', isScrolled || open ? 'is-scrolled' : '', hidden ? 'is-hidden' : '', className].filter(Boolean).join(' ');
  const langLabel = lang === 'ar' ? 'English' : 'العربية';
  const nav = (l) => (e) => { setOpen(false); if (onNavigate) { e.preventDefault(); onNavigate(l); } };
  return (
    <header className={cls}>
      <div className="epic-container epic-header__inner">
        <Logo href="#top" size={26} className="epic-header__logo" markColor={isScrolled || open || tone !== 'dark' ? 'blue' : 'current'} />
        <nav className="epic-header__nav" aria-label="Primary">
          {links.map((l) => <a key={l.label} href={l.href} className="epic-header__link" onClick={nav(l)}>{l.label}</a>)}
        </nav>
        <div className="epic-header__actions">
          <button type="button" className="epic-header__link epic-header__lang" onClick={onLangToggle} lang={lang === 'ar' ? 'en' : 'ar'}>
            <Icon name="globe" size={17} />{langLabel}
          </button>
          <a href={loginHref} className="epic-header__link epic-header__login">{loginLabel}</a>
          <Button variant="primary" size="sm" href={ctaHref} onClick={onCtaClick} className="epic-header__cta">{ctaLabel}</Button>
          <button type="button" className="epic-header__menu" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </div>
      <div className={'epic-header__drawer' + (open ? ' is-open' : '')}>
        {links.map((l) => <a key={l.label} href={l.href} onClick={nav(l)}>{l.label}</a>)}
        <a href={loginHref}>{loginLabel}</a>
        <div style={{ marginTop: 24 }}><Button variant="primary" size="lg" block href={ctaHref} onClick={onCtaClick}>{ctaLabel}</Button></div>
      </div>
    </header>
  );
}
