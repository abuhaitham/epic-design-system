import React from 'react';
import { Reveal } from '../brand/Reveal.jsx';
import { Icon } from '../brand/Icon.jsx';
import { Button } from '../actions/Button.jsx';
import { GlowSurface } from '../brand/GlowSurface.jsx';

export function ServiceRow({ index = '01', eyebrow = 'Setup', title, tagline, items = [], cta, image, imageAlt = '', media, mediaVariant = 'fluted', reverse = false, id, className = '' }) {
  return (
    <div id={id} className={'epic-service' + (reverse ? ' epic-service--reverse' : '') + (className ? ' ' + className : '')}>
      <Reveal className="epic-service__body">
        <span className="epic-eyebrow epic-service__eyebrow"><span className="epic-service__index">{index}</span>{eyebrow}</span>
        {title ? <h3 className="epic-service__title">{title}</h3> : null}
        {tagline ? <p className="epic-service__tagline">{tagline}</p> : null}
        {items.length ? (
          <ul className="epic-service__list">{items.map((it, i) => <li key={i}><Icon name="check" size={18} />{it}</li>)}</ul>
        ) : null}
        {cta ? <div><Button variant={cta.variant || 'link'} href={cta.href} onClick={cta.onClick} arrow>{cta.label}</Button></div> : null}
      </Reveal>
      <Reveal variant="scale" delay={120} className="epic-service__media">
        {media || (image ? <img src={image} alt={imageAlt} /> : <GlowSurface variant={mediaVariant} />)}
      </Reveal>
    </div>
  );
}
