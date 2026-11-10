import React from 'react';

export function TestimonialCard({ quote, name, role, avatar, variant = 'white', className = '' }) {
  const initials = String(name || '').split(' ').map((p) => p[0]).slice(0, 2).join('');
  return (
    <figure className={'epic-testimonial' + (variant === 'dark' ? ' epic-testimonial--dark' : '') + (className ? ' ' + className : '')} style={{ margin: 0 }}>
      <span className="epic-testimonial__mark" aria-hidden="true">“</span>
      <blockquote className="epic-testimonial__quote">{quote}</blockquote>
      <figcaption className="epic-testimonial__person">
        <span className="epic-testimonial__avatar">{avatar ? <img src={avatar} alt="" /> : initials}</span>
        <span><div className="epic-testimonial__name">{name}</div><div className="epic-testimonial__role">{role}</div></span>
      </figcaption>
    </figure>
  );
}
