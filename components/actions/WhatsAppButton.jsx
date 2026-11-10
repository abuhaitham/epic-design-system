import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function WhatsAppButton({ phone = '966500000000', message = '', label = 'WhatsApp us', float = false, iconOnly = false, className = '', ...rest }) {
  const href = 'https://wa.me/' + String(phone).replace(/[^0-9]/g, '') + (message ? '?text=' + encodeURIComponent(message) : '');
  const cls = ['epic-wa', float ? 'epic-wa--float' : '', iconOnly ? 'epic-wa--icon' : '', className].filter(Boolean).join(' ');
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls} aria-label={iconOnly ? label : undefined} {...rest}>
      <Icon name="message-circle" size={22} strokeWidth={2} />
      {iconOnly ? null : <span>{label}</span>}
    </a>
  );
}
