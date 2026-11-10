import React from 'react';

export function LogoStrip({ label = 'Trusted by schools, operators and investors across the Kingdom', logos = [], duration = 40, className = '' }) {
  const items = logos.length ? logos : ['Al Noor Schools', 'Riyadh Academy', 'Najd Training', 'Future Minds', 'Dar Al Ilm', 'Coastal International', 'Qimam Institute'];
  const render = (l, i) => (
    <span className="epic-logostrip__item" key={i}>
      {typeof l === 'string' ? l : <img src={l.src} alt={l.alt || ''} />}
    </span>
  );
  return (
    <div className={'epic-logostrip' + (className ? ' ' + className : '')}>
      {label ? <span className="epic-logostrip__label">{label}</span> : null}
      <div className="epic-logostrip__viewport">
        <div className="epic-logostrip__track" style={{ '--marquee-dur': duration + 's' }}>
          {items.map(render)}
          <span aria-hidden="true" style={{ display: 'contents' }}>{items.map((l, i) => render(l, 'd' + i))}</span>
        </div>
      </div>
    </div>
  );
}
