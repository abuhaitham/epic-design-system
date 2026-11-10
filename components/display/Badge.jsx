import React from 'react';

export function Badge({ variant = 'neutral', upper = false, dot = false, className = '', children, ...rest }) {
  const cls = ['epic-badge', 'epic-badge--' + variant, upper ? 'epic-badge--upper' : '', className].filter(Boolean).join(' ');
  return <span className={cls} {...rest}>{dot ? <span className="epic-badge__dot" /> : null}{children}</span>;
}
