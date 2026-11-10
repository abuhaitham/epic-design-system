import React, { useLayoutEffect, useRef, useState } from 'react';

export function Tabs({ items = [], value, defaultValue, onChange, variant = 'pill', className = '', ...rest }) {
  const [inner, setInner] = useState(defaultValue ?? (items[0] && items[0].id));
  const active = value ?? inner;
  const wrap = useRef(null);
  const [ind, setInd] = useState({ left: 0, width: 0 });
  useLayoutEffect(() => {
    const el = wrap.current && wrap.current.querySelector('[aria-selected="true"]');
    if (el) setInd({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active, items.length]);
  const select = (id) => { setInner(id); onChange && onChange(id); };
  const cls = ['epic-tabs', variant !== 'pill' ? 'epic-tabs--' + variant : '', className].filter(Boolean).join(' ');
  return (
    <div ref={wrap} role="tablist" className={cls} {...rest}>
      <span className="epic-tabs__indicator" style={{ left: ind.left, width: ind.width }} />
      {items.map((it) => (
        <button key={it.id} role="tab" type="button" aria-selected={it.id === active} className="epic-tabs__tab" onClick={() => select(it.id)}>{it.label}</button>
      ))}
    </div>
  );
}
