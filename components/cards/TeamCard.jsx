import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function TeamCard({ name, role, photo, linkedin, className = '' }) {
  const initials = String(name || '').split(' ').map((p) => p[0]).slice(0, 2).join('');
  return (
    <div className={'epic-team' + (className ? ' ' + className : '')}>
      <div className="epic-team__photo">{photo ? <img src={photo} alt={name} /> : <span className="epic-team__initials">{initials}</span>}</div>
      <div className="epic-team__row">
        <div><div className="epic-team__name">{name}</div><div className="epic-team__role">{role}</div></div>
        {linkedin ? <a className="epic-team__social" href={linkedin} aria-label={name + ' on LinkedIn'}><Icon name="linkedin" size={16} /></a> : null}
      </div>
    </div>
  );
}
