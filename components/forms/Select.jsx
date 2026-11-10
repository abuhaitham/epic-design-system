import React, { useId } from 'react';
import { Icon } from '../brand/Icon.jsx';

export function Select({ label, hint, error, options = [], placeholder, dark = false, id, className = '', ...rest }) {
  const auto = useId();
  const fid = id || auto;
  return (
    <div className={'epic-field' + (className ? ' ' + className : '')}>
      {label ? <label className="epic-field__label" htmlFor={fid}>{label}</label> : null}
      <div className="epic-select">
        <select id={fid} className={'epic-input' + (dark ? ' epic-input--dark' : '')} aria-invalid={error ? true : undefined} defaultValue={placeholder && rest.value === undefined && rest.defaultValue === undefined ? '' : undefined} {...rest}>
          {placeholder ? <option value="" disabled>{placeholder}</option> : null}
          {options.map((o) => { const v = typeof o === 'string' ? o : o.value; const l = typeof o === 'string' ? o : o.label; return <option key={v} value={v}>{l}</option>; })}
        </select>
        <Icon name="chevron-down" size={18} className="epic-select__chev" />
      </div>
      {error ? <span className="epic-field__error">{error}</span> : hint ? <span className="epic-field__hint">{hint}</span> : null}
    </div>
  );
}
