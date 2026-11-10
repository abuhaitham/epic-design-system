import React from 'react';
import { Icon } from '../brand/Icon.jsx';

export function Checkbox({ label, type = 'checkbox', className = '', style, ...rest }) {
  return (
    <label className={'epic-check' + (type === 'radio' ? ' epic-check--radio' : '') + (className ? ' ' + className : '')} style={style}>
      <input type={type} {...rest} />
      <span className="epic-check__box">
        {type === 'radio' ? <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="currentColor" /></svg> : <Icon name="check" size={14} strokeWidth={2.5} />}
      </span>
      <span>{label}</span>
    </label>
  );
}
