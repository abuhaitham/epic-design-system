import React from 'react';

const COLORS = { blue: '#366BFF', black: '#000000', navy: '#07142B', white: '#FFFFFF', current: 'currentColor' };

export function EpicMark({ color = 'current', height = '1em', className = '', style, title = 'EPIC' }) {
  return (
    <svg className={'epic-logo__mark' + (className ? ' ' + className : '')} viewBox="48.85 55.642 206.781 125.8"
      style={{ height, width: 'auto', ...style }} role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <path fill={COLORS[color] || color} transform="translate(304.481 0) scale(-1 1)"
        d="M 99.054 180.98 L 48.85 180.98 L 48.85 154.08 L 122.954 154.08 L 71.054 97.58 L 89.154 79.18 L 137.931 131.766 L 137.931 55.642 L 163.231 55.642 L 163.231 134.342 L 216.231 79.642 L 234.331 98.042 L 181.431 154.442 L 255.631 154.442 L 255.631 181.442 L 181.331 181.442 C 155.392 181.442 138.892 164.926 137.972 139.687 L 99.054 180.98 Z" />
    </svg>
  );
}

export function Logo({ color = 'current', markColor, wordmark = true, size = 28, href, className = '', style, ...rest }) {
  const Tag = href ? 'a' : 'span';
  const c = COLORS[color] || color;
  return (
    <Tag href={href} className={'epic-logo' + (className ? ' ' + className : '')} style={{ fontSize: size, color: c, ...style }} aria-label="EPIC" {...rest}>
      <EpicMark color={markColor || 'current'} />
      {wordmark ? <span className="epic-logo__word" aria-hidden="true">EPIC</span> : null}
    </Tag>
  );
}
