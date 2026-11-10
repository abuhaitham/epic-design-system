import React from 'react';
import { EpicMark } from '../brand/Logo.jsx';
import { Icon } from '../brand/Icon.jsx';
import { Button } from '../actions/Button.jsx';
import { GlowSurface } from '../brand/GlowSurface.jsx';

const DEFAULT_STATS = [{ value: '27', label: 'Years' }, { value: '89', label: 'Organisations' }, { value: '4,800', label: 'Trainees' }];

export function ProfileCard({ name = 'EPIC', handle = '@epic.sa', bio = 'The back office for education businesses in Saudi Arabia. Setup · Compliance · Growth.', avatar, verified = true, stats = DEFAULT_STATS, ctaLabel = 'Follow', onCta, bannerVariant = 'fluted', className = '' }) {
  return (
    <div className={'epic-profile epic-on-dark' + (className ? ' ' + className : '')}>
      <GlowSurface variant={bannerVariant} className="epic-profile__banner" />
      <div className="epic-profile__body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <span className="epic-profile__avatar">{avatar ? <img src={avatar} alt="" /> : <EpicMark color="blue" height="0.9em" />}</span>
          {ctaLabel ? <Button variant="primary" size="sm" onClick={onCta}>{ctaLabel}</Button> : null}
        </div>
        <div>
          <div className="epic-profile__name">{name}{verified ? <span className="epic-profile__verified"><Icon name="check" size={12} strokeWidth={3} /></span> : null}</div>
          <div className="epic-profile__handle">{handle}</div>
        </div>
        {bio ? <p className="epic-profile__bio">{bio}</p> : null}
        {stats.length ? <div className="epic-profile__stats">{stats.map((s) => <div className="epic-profile__stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>)}</div> : null}
      </div>
    </div>
  );
}
