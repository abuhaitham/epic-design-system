import React from 'react';
import { Icon } from '../brand/Icon.jsx';
import { Badge } from '../display/Badge.jsx';

export function PillarCard({ index = '01', title = 'Setup', tagline, tags = [], href = '#', variant = 'white', onClick, className = '' }) {
  const v = variant === 'white' ? '' : ' epic-pillar--' + variant;
  const badge = variant === 'white' || variant === 'stone' ? 'neutral' : 'outline';
  return (
    <a href={href} onClick={onClick} className={'epic-pillar' + v + (className ? ' ' + className : '')}>
      <div className="epic-pillar__top">
        <span className="epic-pillar__num">{index}</span>
        <span className="epic-pillar__arrow"><Icon name="arrow-right" size={18} /></span>
      </div>
      <h3 className="epic-pillar__title">{title}</h3>
      {tagline ? <p className="epic-pillar__tagline">{tagline}</p> : null}
      {tags.length ? <div className="epic-pillar__tags">{tags.map((t) => <Badge key={t} variant={badge}>{t}</Badge>)}</div> : null}
    </a>
  );
}
