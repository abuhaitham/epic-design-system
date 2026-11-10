import React from 'react';
import { Reveal } from '../brand/Reveal.jsx';

export function SectionHeading({ eyebrow, title, lead, action, className = '' }) {
  return (
    <Reveal className={'epic-section-head' + (className ? ' ' + className : '')}>
      <div className="epic-section-head__text">
        {eyebrow ? <span className="epic-eyebrow epic-section-head__eyebrow">{eyebrow}</span> : null}
        {title ? <h2 className="epic-section-head__title">{title}</h2> : null}
        {lead ? <p className="epic-section-head__lead">{lead}</p> : null}
      </div>
      {action || null}
    </Reveal>
  );
}
