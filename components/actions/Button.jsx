import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function Button({ variant = 'primary', size = 'md', href, arrow = false, iconStart, iconEnd, block = false, disabled = false, className = '', children, ...rest }) {
  const Tag = href ? 'a' : 'button';
  const cls = ['epic-btn', 'epic-btn--' + variant, size !== 'md' ? 'epic-btn--' + size : '', block ? 'epic-btn--block' : '', className].filter(Boolean).join(' ');
  const iSize = size === 'sm' ? 16 : 18;
  const end = arrow ? 'arrow-right' : iconEnd;
  return (
    <Tag href={href} className={cls} disabled={Tag === 'button' ? disabled : undefined} aria-disabled={disabled || undefined}
      type={Tag === 'button' ? rest.type || 'button' : undefined} {...rest}>
      {iconStart ? <Icon name={iconStart} size={iSize} className="epic-btn__icon" /> : null}
      {children}
      {end ? <Icon name={end} size={iSize} className="epic-btn__icon epic-btn__icon--trail" /> : null}
    </Tag>
  );
}
