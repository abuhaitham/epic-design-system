import React, { useId } from 'react';

export function Input({ label, hint, error, dark = false, id, className = '', ...rest }) {
  const auto = useId();
  const fid = id || auto;
  return (
    <div className={'epic-field' + (className ? ' ' + className : '')}>
      {label ? <label className="epic-field__label" htmlFor={fid} style={dark ? { color: '#fff' } : undefined}>{label}</label> : null}
      <input id={fid} className={'epic-input' + (dark ? ' epic-input--dark' : '')} aria-invalid={error ? true : undefined} {...rest} />
      {error ? <span className="epic-field__error">{error}</span> : hint ? <span className="epic-field__hint">{hint}</span> : null}
    </div>
  );
}
