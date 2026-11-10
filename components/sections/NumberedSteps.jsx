import React from 'react';
import { Reveal } from '../brand/Reveal.jsx';

const DEFAULT_STEPS = [
  { title: 'Discovery call', text: 'Thirty minutes on your plans, your timeline and where you are in the licensing process.' },
  { title: 'Roadmap', text: 'A written plan with every approval, document and deadline, owned by one EPIC lead.' },
  { title: 'Execution', text: 'We file, follow up and prepare you for every inspection while you focus on the school.' },
  { title: 'Launch & beyond', text: 'Open on schedule, then stay licensed and accredited with ongoing compliance support.' },
];

export function NumberedSteps({ steps = DEFAULT_STEPS, active, className = '' }) {
  return (
    <ol className={'epic-steps' + (className ? ' ' + className : '')} style={{ '--steps': Math.min(steps.length, 4) }}>
      {steps.map((s, i) => (
        <Reveal as="li" key={i} delay={i * 110} className={'epic-step' + (active === i ? ' epic-step--active' : '')}>
          <span className="epic-step__num">{String(i + 1).padStart(2, '0')}</span>
          <span className="epic-step__title">{s.title}</span>
          <p className="epic-step__text">{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}
