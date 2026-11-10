import React from 'react';
import { Badge } from '../display/Badge.jsx';
import { GlowSurface } from '../brand/GlowSurface.jsx';

export function InsightCard({ title, category, date, readTime, excerpt, image, mediaVariant = 'glow-stone', href = '#', className = '' }) {
  return (
    <a href={href} className={'epic-insight' + (className ? ' ' + className : '')}>
      <div className="epic-insight__media">{image ? <img src={image} alt="" /> : <GlowSurface variant={mediaVariant} />}</div>
      <div className="epic-insight__meta">
        {category ? <Badge>{category}</Badge> : null}
        {date ? <span>{date}</span> : null}
        {readTime ? <span>· {readTime}</span> : null}
      </div>
      <div><h3 className="epic-insight__title">{title}</h3></div>
      {excerpt ? <p className="epic-insight__excerpt">{excerpt}</p> : null}
    </a>
  );
}
