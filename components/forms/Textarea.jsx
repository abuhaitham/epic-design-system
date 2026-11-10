import React, { useId } from 'react';

export function Textarea({ label, hint, error, dark = false, id, rows = 4, className = '', ...rest }) {
  const auto = useId();
  const fid = id || auto;
  return (
    <div className={'epic-field' + (className ? ' ' + className : '')}>
      {label ? <label className="epic-field__label" htmlFor={fid}>{label}</label> : null}
      <textarea id={fid} rows={rows} className={'epic-input' + (dark ? ' epic-input--dark' : '')} aria-invalid={error ? true : undefined} {...rest} />
      {error ? <span className="epic-field__error">{error}</span> : hint ? <span className="epic-field__hint">{hint}</span> : null}
    </div>
  );
}
