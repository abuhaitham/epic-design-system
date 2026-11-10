import React from 'react';

export function GlowSurface({ variant = 'glow', grain = true, as = 'div', className = '', style, children, ...rest }) {
  const Tag = as;
  const cls = 'epic-surface epic-surface--' + variant + (grain ? ' epic-grain' : '') + (className ? ' ' + className : '');
  return <Tag className={cls} style={style} {...rest}>{children}</Tag>;
}
